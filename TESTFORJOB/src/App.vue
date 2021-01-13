<template>
  <div>
    <div class="title">
      <h1>СПИСОК КОНТАКТОВ</h1>
    </div>
    <div id="newContact">
      <label for="name">НОВЫЙ КОНТАКТ</label>
      <input type="text" id="name" v-model="newName"/>
      <button id="addContact" @click="addNewContact">ДОБАВИТЬ</button>
    </div>
    <div id="contactList">
      <ul>
        <li v-for="(contact, index) in contacts" :key="(contact, index)">
          <p>
            {{ index + 1 }} - {{ contact }}
            <button @click="openContact">Информация</button>
            <button @click="deleteContact">Удалить</button>
          </p>
        </li>
      </ul>
    </div>
	<div>
		<app-contact-info v-if="false" :contacts="contacts" :key="index" :index="index"></app-contact-info>
	</div>
  </div>
</template>

<script>
import ContactInfo from "./components/ContactInfo.vue";

export default {
  data() {
    return {
      newName: "",
	  contacts: [],
	  show: false
    };
  },
  methods: {
    addNewContact() {
      this.contacts.push(this.newName);
      this.newName = "";
    },
    deleteContact(index) {
      if (confirm("Вы уверены, что хотите удалить этот контакт?")) {
        this.contacts.splice(index, 1);
      }
	},
	openContact(event) {
		
	}
  },
  components: {
    appContactInfo: ContactInfo,
  },
};
</script>

<style scoped>
#contactList li {
  list-style: none;
}
</style>
