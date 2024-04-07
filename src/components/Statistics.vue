<template>
    <v-card color="transparent" class="elevation-0 statisticsCard">
        <v-card-title class="statisticsCardTitle" justify="end">
            Наши статистические данные
        </v-card-title>
        <v-row>
            <v-col lg="1" class="d-flex">
                <div class="orientation">
                    <span class="requests5000">5 000 </span>
                    <span class="requests" size="70px"> поданных заявок</span>
                </div>
            </v-col>
            <v-col lg="2" class="d-flex flex-column tenThousand">
                <div class="tenYears" align="center">
                    <span class="bigNumber">10 </span>
                    <span class="tenYearsC">лет опыта работы</span>
                </div>
                <v-card class="thousand d-flex align-center" align=center>
                    <div>
                        <span class="bigNumber tThousandC">3000</span>
                        <span class="space"> </span>
                        <span class="tThousandC"> выигранных заявок</span>
                    </div>
                </v-card>
            </v-col>
        <v-col>
            <v-card class="letterCard">
                <v-card-title class="d-flex justify-end">
                  <span class="material-symbols-outlined emergencyIcon">emergency</span>
                </v-card-title>
                <v-card-title class="latterCardTitle">
                  Заключенных контрактов на:
                </v-card-title>
                <v-card-text>
                  <span class="letterCardText">8,3</span>
                  <span class="letterCardText1"> млрд. руб.</span>
                </v-card-text>
              </v-card>
            <v-card class="letter">
                <v-row>
                <v-col>
                    <v-btn color="#497AFF" class="cardBtn" append-icon="north_east">присоединяйся</v-btn>
                </v-col>
                <v-col>
                    <v-card class="blurred">
                    <v-card-title>
                        <span class="material-symbols-outlined thumbIcon">thumb_up</span>
                        <v-card-text class="blurredText">
                        Мы ценим каждого клиента, как уникальную жемчужину в нашей компании.
                        </v-card-text>
                    </v-card-title>
                    </v-card>
                    <v-card class="blurred1 align-center">
                        <v-card-text>
                            <span class="blurred1Title">99,3</span>
                            <span class="blurred1Percent">%</span>
                        </v-card-text>
                        <v-card-text class="blurred1Text">
                            допущенных
                            к участию
                            заявок
                        </v-card-text>
                    </v-card>
                </v-col>
                </v-row>
            </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>


<style scoped>
.statisticsCard {
    margin: 6em 7em 0em 7em;
}
.statisticsCardTitle {
    text-align: right;
    font-size: 40px;
    margin-bottom: 0.5em;
}
.requests5000 {
    font-weight: 600;
    font-size: 70px;
    color: #497AFF;
    letter-spacing: 0.25rem;
}
.requests {
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0.25rem;
    margin-top: 1em
}
.orientation {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    transform: rotate(-180deg);

}
.space {
    font-size:24px
}
.space1 {
    font-size: 40px
}
.bigNumber {
    font-size: 75px;
    font-weight: 600;
}

.tThousandC {
    color:white;
    font-weight: 500;
}

.tenYearsC {
    font-size: 32px;
    font-weight: 600;
    line-height: 1rem;
}

.tenYears {
    position: relative;
}
.thousand {
    background: linear-gradient(180deg, #EDEDED 0%, #497AFE 28.77%, #2C4999 100%);
    border-radius: 30px;
    height: 100%;

}

.tenThousand {
    padding-top: 0;
}
.cardBtn {
  border-radius: 12px;
  font-weight: 500;
  margin-left: 2em;
  font-size: 16px;
  margin-top:2em
}

.letter {
  background: url("../assets/letter.png");
  background-size: cover;
  background-position: bottom 47% right 10%;
  border-radius: 40px;
  overflow: hidden;
  position: relative;
  height: 50em;
  clip-path: polygon( 0% 7.876%,0% 37.333%,0% 37.333%,0.074% 38.61%,0.287% 39.822%,0.629% 40.952%,1.087% 41.984%,1.649% 42.902%,2.306% 43.689%,3.043% 44.33%,3.851% 44.807%,4.718% 45.106%,5.631% 45.209%,34.935% 45.209%,34.935% 45.209%,35.848% 45.312%,36.715% 45.61%,37.523% 46.088%,38.26% 46.728%,38.917% 47.516%,39.48% 48.433%,39.937% 49.465%,40.279% 50.595%,40.492% 51.807%,40.566% 53.085%,40.566% 92.124%,40.566% 92.124%,40.64% 93.402%,40.853% 94.614%,41.195% 95.744%,41.653% 96.776%,42.215% 97.693%,42.872% 98.48%,43.609% 99.121%,44.417% 99.598%,45.284% 99.897%,46.197% 100%,94.369% 100%,94.369% 100%,95.282% 99.897%,96.149% 99.598%,96.957% 99.121%,97.694% 98.48%,98.351% 97.693%,98.913% 96.776%,99.371% 95.744%,99.713% 94.614%,99.926% 93.402%,100% 92.124%,100% 7.876%,100% 7.876%,99.926% 6.598%,99.713% 5.387%,99.371% 4.256%,98.913% 3.224%,98.351% 2.307%,97.694% 1.52%,96.957% 0.879%,96.149% 0.402%,95.282% 0.103%,94.369% 0%,59.245% 0%,53.456% 0%,28.797% 0%,23.585% 0%,5.631% 0%,5.631% 0%,4.718% 0.103%,3.851% 0.402%,3.043% 0.879%,2.306% 1.52%,1.649% 2.307%,1.087% 3.224%,0.629% 4.256%,0.287% 5.386%,0.074% 6.598%,0% 7.876% );
}

.letterCard {
  position: absolute;
  background-color: white;
  width: 27%;
  top:55%;
  height: 44.5%;
  border-radius: 27px;
  padding: 1em 2em 1em 1.5em;
}

.latterCardTitle {
  font-weight: 600;
  font-size: 32px;
  text-wrap: wrap;
  margin-bottom: 2em;
}

.letterCardText {
  font-size: 75px;
  color:#497AFF;
}

.letterCardText1 {
    font-size: 32px;
    color:#497AFF;
}

.blurred {
    background: linear-gradient(118.11deg, rgba(255, 255, 255, 0.3) -5.82%, rgba(255, 255, 255, 0.0375) 70.98%);
    backdrop-filter: blur(15px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 12px;
    margin-top: 2em;
    margin-left: 7.5em;
    width: 75%;
    margin-bottom: 5em;
}

.blurredText {
    font-size: 32px;
    text-wrap: wrap;
    color: white;
    line-height: 1.1em;
    font-weight: 500;
}

.blurred1 {
    background: linear-gradient(118.11deg, rgba(255, 255, 255, 0.3) -5.82%, rgba(255, 255, 255, 0.0375) 70.98%);
    backdrop-filter: blur(15px);
    /* Note: backdrop-filter has minimal browser support */
    border-radius: 27px;
    height: 54%;
    width: 16.5em;
    margin-left: 17.5em;
    padding-top:7em;
    padding-left: 0.5em;
}

.blurred1Title {
    font-size:75px;
    font-weight: 600;
    color: white;
    text-wrap:wrap;
    margin-left:5%
}

.blurred1Text {
    font-size: 32px;
    color:white;
    text-wrap: wrap;
    line-height: 1.2em;
    padding-left: 1em;
    padding-right: 0.5em;
}
.blurred1Percent {
    font-size: 32px;
    color:white;
    text-wrap: wrap;
    line-height: 1.2em;
    padding-left: 0.5em;
}


.thumbIcon {
    margin-left: 0.5em;
    margin-top: 0.5em;
    font-size:32px;
    color: white
}

.emergencyIcon {
    font-size:75px
}

</style>