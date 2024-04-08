<template>
    <v-card class="mainCard elevation-0">
    <v-row>
        <v-col cols="12" lg="4">
            <v-card class="contactsCard elevation-0" align="left">
                <v-card-title class=contactsCardTitle>
                    Контакты
                </v-card-title>
                <v-img 
                class="logo"
                src="../assets/logo.png"
                height="4em"></v-img>
                <v-card-text>
                    <b>Номер для связи: </b>
                    <span>+7(978) 123 45 67</span>
                    <br/>
                    <br/>
                    <b>Адрес: </b>
                    <span>Кечкеметская улица, 147, Симферополь,
                    Республика Крым, 295022</span>
                </v-card-text>
                <v-btn class="connect" append-icon="north_east">
                    Связаться 
                </v-btn>
            </v-card>
        </v-col>
        <v-col cols="12" lg="8">
            <v-img 
            src="../assets/yandex.png" 
            class="mainImg"
            cover 
            height="24em"/>
        </v-col>
    </v-row>
    </v-card>
</template>

<script>
</script>

<style scoped>
.mainCard {
    margin: 5em 7em 0em 7em;
    border-radius:27px;
    height: 527px
}

.mainImg {
    margin: 4.5em 12.5em 4.5em 10em;
    border-radius: 20px;
    width:738px
}

.connect {
  border-radius: 15px;
  color: white;
  background-color: #497AFF;
  width: 20em;
  margin-top: 6em;
  margin-bottom: 0.5em
}

.contactsCard {
    margin: 4.5em 0em 0em 10em;
}

.contactsCardTitle {
    font-size: 40px;
    font-weight: 500;
    margin-bottom: 0.5em
}

.logo { 
    margin-right: 60%;
    margin-bottom: 2em
}
</style>