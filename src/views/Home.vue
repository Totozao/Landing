<template>
  <div class="navAndNewYork">
    <v-container>
      <v-card color="transparent" class="elevation-0">
        <v-row align="center">
          <v-col cols="12" lg="2" align="center">
            <v-img src="../assets/logo.png" contain height="4.5em"></v-img>
          </v-col>
          <v-col cols="12" lg="8" align="center">
            <v-card class="cardTransparent elevation-0 d-flex align-center">
              <v-btn class="cardBtn elevation-0" color="#497AFF" size="x-large" @click="scrollToAbout">О нас</v-btn>
              <v-btn class="cardBtn elevation-0" size="x-large" @click="scrollToStatistics">Статистика</v-btn>
              <v-btn class="cardBtn elevation-0" size="x-large" @click="scrollToPartners">Партнёры</v-btn>
              <v-btn class="cardBtn elevation-0" size="x-large" @click="scrollToContacts">Контакты</v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" lg="2" align="right">
            <v-card class="number elevation-0">
              <b>Номер для связи - </b>
              <p>+7(978) 123 45 67</p>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12" lg="10">
          </v-col>
          <v-col cols="12" lg="2" align="right" class="numberCol">
            <v-card class="social elevation-0">
              <v-btn class="socialBtn elevation-0">
                <img src="../assets/whatsapp.svg"/>
              </v-btn>
              <v-btn class="socialBtn elevation-0">
                <img src="../assets/telegram.svg"/>
              </v-btn>
              <v-btn class="socialBtnVk elevation-0">
                <img src="../assets/vk.svg"/>
              </v-btn>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
      <v-card class="newYork elevation-0">
        <v-row>
          <v-col class="socialCol">
            <v-card class="insideNewYork elevation-0" elevation="0">
              <v-card-title class="newYorkTitle"> 
                <v-icon icon="emergency" size="48px"/>
                Поддерживая инновации, строим будущее </v-card-title>
              <v-card-text class="newYorkText">
                Ясность нашей позиции очевидна: понимание сути ресурсосберегающих технологий, в своём классическом представлении, допускает внедрение новых принципов формирования материально-технической и кадровой базы.
              </v-card-text>
              <v-btn class="connect" append-icon="north_east"> Связаться </v-btn>
            </v-card>
          </v-col>
          <v-col cols="12" lg="5" class="socialCol">
            <v-card class="insideNewYork1 elevation-0 d-flex flex-column align-center">
              <v-card-title class="insideNewYork1Title"> 25+ </v-card-title>
              <span class="insideNewYork1Text">Компаний выиграли свой тендер</span>
            </v-card>
            <v-card class="insideNewYork2 elevation-0">
              <v-card-text class="d-flex align-center insideNewYork2Text">
                <span class="material-symbols-outlined NYIcon">hotel_class</span> 5 звёзд по мнению наших пользователей
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-container>
  </div>
  <div class='noNewYork'>
    <about ref="aboutSection"> </about>
    <statistics ref="statisticsSection"> </statistics>
    <partners ref="partnersSection"> </partners>
    <contacts ref="contactsSection"> </contacts>
  </div>

</template>

<script setup>
import about from "../components/About.vue"
import statistics from "../components/Statistics.vue"
import partners from "../components/Partners.vue"
import contacts from "../components/Contacts.vue"
import { ref } from 'vue';

const aboutSection = ref(null);
const statisticsSection = ref(null);
const partnersSection = ref(null)
const contactsSection = ref(null)

const scrollToAbout = () => {
  aboutSection.value.$el.scrollIntoView({ behavior: 'smooth' });
};

const scrollToStatistics = () => {
  statisticsSection.value.$el.scrollIntoView({ behavior: 'smooth' });
};

const scrollToPartners = () => {
  partnersSection.value.$el.scrollIntoView({ behavior: 'smooth' });
};

const scrollToContacts = () => {
  contactsSection.value.$el.scrollIntoView({ behavior: 'smooth' });
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');
@import url("https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/7.4.47/css/materialdesignicons.min.css");

/* Global styles */
.v-card .v-card-title {
  line-height: 1.2em;
}

/* navAndNewYork */
.navAndNewYork {
  background: url("../assets/newYork.png");
  background-position: bottom 47.5% left 10%;
  background-size: cover;
}

.cardTransparent {
  background: linear-gradient(126.05deg, rgba(255, 255, 255, 0.3) 4.96%, rgba(255, 255, 255, 0.0375) 95.59%);
  backdrop-filter: blur(15px);
  border-radius: 27px;
  height: 5em;
  justify-content: center;
  width: fit-content;
}

.cardBtn {
  border-radius: 12px;
  color: #000000;
  font-size: 16px;
  font-weight: 500;
  margin-left: 33px;
}

.number {
  border-radius: 12px;
  margin-left: 4em;
  padding: 1.5% 10%;
  width: fit-content;
}

.numberCol {
  padding-top: 0;
}

.social {
  background: linear-gradient(118.11deg, rgba(255, 255, 255, 0.2325) -5.82%, rgba(255, 255, 255, 0.0375) 70.98%);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  width: fit-content;
}

.socialBtn,
.socialBtnVk {
  background: linear-gradient(118.11deg, rgba(255, 255, 255, 0.3) -5.82%, rgba(255, 255, 255, 0.0375) 70.98%);
  backdrop-filter: blur(15px);
  border-radius: 12px;
  margin-right: 1em;
  max-width: 0;
  min-width: 0;
}

.socialBtnVk {
  margin-right: 0;
}

/* newYork */
.newYork {
  background: transparent;
  margin-left: 3em;
  margin-top: 5em;
}

.newYorkTitle {
  color: white;
  font-family: 'Inter';
  font-size: 48px;
  font-style: normal;
  font-weight: 700;
  padding-bottom: 0.5em;
  padding-left: 0;
  padding-right: 5em;
  padding-top: 0;
  text-wrap: wrap;
}

.newYorkText {
  color: white;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 1em;
  padding-left: 0;
  padding-right: 50%;
}

.connect {
  background-color: #497AFF;
  border-radius: 15px;
  color: white;
  margin-top: 5em;
  width: 20em;
}

.insideNewYork {
  background: transparent;
}

.insideNewYork1 {
  border-radius: 27px;
  margin-bottom: 2.5em;
  margin-left: 70%;
  margin-top: 1em;
  padding: 5% 10% 5% 5%;
}

.insideNewYork1Title {
  color: #497AFF;
  font-size: 70px;
}

.insideNewYork1Text {
  font-size: 16px;
  font-weight: 500;
}

.insideNewYork2 {
  border-radius: 27px;
  margin-bottom: 4.5em;
  margin-left: 35%;
}

.insideNewYork2Text {
  font-size: 1rem;
  font-weight: 500;
  padding-right: 20%;
}

.socialCol {
  padding-bottom: 0;
  padding-top: 0;
}

/* noNewYork */
.noNewYork {
  padding: 5em 0 3em;
  position: relative;
}

/* Material Icons */
.material-symbols-outlined {
  color: #497AFF;
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48;
}

.NYIcon {
  font-size: 8rem;
  margin: 5%;
  margin-right: 7.5%;
}

.starIcon {
  color: white;
  font-size: 48px;
  font-weight: 700;
  padding-top: 1.5em;
}

/* Other */
.emergencyIcon {
  height: 1em;
}
</style>