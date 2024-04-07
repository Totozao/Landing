<template>
    <v-card color="transparent" class="elevation-0 mainCard">
        <v-card-title class="aboutTitle"> 
            О нашей компании
        </v-card-title>
        <v-row>
            <v-col >
            <v-img src="../assets/about.png" 
            class="aboutImg" 
            cover 
            position="center"/>
            </v-col>
            <v-col lg="3">
            <v-card class="aboutCard1 elevation-0">
                <v-card-title>
                <span class="material-symbols-outlined aboutIcon">browse_activity</span>
                </v-card-title>
                <v-card-title class="aboutCardTitle">
                Оценка и сравнение заявок:
                </v-card-title>
                <v-card-text class="aboutCardText">
                анализ представленных предложений, определение наиболее выгодного предложения для заказчика, наиболее выгодного предложения для заказчика.
                </v-card-text>
            </v-card>
            </v-col>
            <v-col>
            <v-card class="aboutCard2 elevation-0">
                <v-card-title>
                    <span class="material-symbols-outlined aboutIcon">psychology</span>
                </v-card-title>
                <v-card-title class="aboutCardTitle">
                    Разработка и публикация тендеров:
                </v-card-title>
                <v-card-text class="aboutCardText">
                    определение требований к участникам тендера, описание предмета тендера и 
                    условий его выполнения, описание предмета тендера и условий его выполнения.
                </v-card-text>
            </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" lg="6">
            <v-card class="aboutCard3 elevation-0">
                <v-card-title>
                <span class="material-symbols-outlined aboutIcon">real_estate_agent</span>
                </v-card-title>
                <v-card-title class="aboutCardTitle3">
                Заключение договоров с победителями тендера:
                </v-card-title>
                <v-card-text class="aboutCardText3">
                значимость этих проблем настолько очевидна, что высококачественный 
                прототип будущего проекта требует от нас анализа распределения внутренних 
                резервов и ресурсов, будущего проекта требует от нас анализа распределения внутренних резервов и ресурсов.
                </v-card-text>
            </v-card>
            </v-col>
            <v-col cols="12" lg="6">
            <v-img 
            src="../assets/about2.png" 
            class="aboutImg1" 
            cover
            position="center"/>
            </v-col>
        </v-row>
    </v-card>
</template>

<style scoped>
.mainCard {
  margin: 5em 7em 0em 7em;
}
.aboutTitle {
  font-size: 40px;
  font-weight: 500;
  margin-bottom: 1em;
}

.aboutImg {
  border-radius: 15px;
  height: 20em
}

.aboutIcon {
  font-variation-settings: 'FILL' 0, 'wght' 500, 'GRAD' 0, 'opsz' 48;
  font-size: 2.5rem;
}

.aboutCard1 {
  padding: 2.5em 5em 10px 2.5em;
  border-radius: 20px;
  height: 22em;
}

.aboutCard2 {
  padding: 2.5em 11em 10px 2.5em;
  border-radius: 20px;
  height: 22em;
}

.aboutCardTitle {
  font-weight: 600;
  font-size: 23px;
  text-wrap: wrap;
}

.aboutImg1 {
  border-radius: 20px;
  height: 22.7em;
}

.aboutCard3 {
  padding: 2.5em 11em 5em 2.5em;
  border-radius: 20px;
}

.aboutCardText3 {
  margin-right: 10em;
}

.aboutCardTitle3 {
  font-weight: 600;
  margin-right: 50%;
  text-wrap: wrap;
}
</style>