<template>
    <v-card class="mainCard elevation-0" color="transparent">
        <img src="../assets/line.svg" class="lineV"/>
        <v-card-title class="mainCardTitle">
            Мы сотрудничаем с частными и государственными организациями
        </v-card-title>
        <v-card color=transparent class="governmentCard elevation-0">
            <v-card class="governmentCardTitle elevation-0" align="left">
                <v-card-title>Государственные</v-card-title>
            </v-card>
            <v-row align="center">
                <v-col cols="12" lg="1" align="right">
                    <img src="../assets/arrow.svg" class="arrow"/>
                </v-col>
                <v-col>
                    <v-card class="cardMini elevation-0">
                        <v-row>
                            <v-col align="center">
                                <v-img src="../assets/gasProm.png" class="hercogImg"/>
                            </v-col>
                            <v-col>
                                <v-card-title class="cardTitle">Герцог графства коронован</v-card-title>
                                <v-card-text class="cardText">
                                    <span>Разнообразный и богатый опыт говорит нам, что укрепление и развитие внутренней структуры.</span>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="cardMini elevation-0">
                        <v-row>
                            <v-col align="center">
                                <v-img src="../assets/rusHydro.png" class="hercogImg"/>
                            </v-col>
                            <v-col>
                                <v-card-title class="cardTitle">Герцог графства коронован</v-card-title>
                                <v-card-text class="cardText">
                                    <span>Разнообразный и богатый опыт говорит нам, что укрепление и развитие внутренней структуры.</span>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="cardMini elevation-0">
                        <v-row>
                            <v-col align="center">
                                <v-img src="../assets/moesk.png" class="hercogImg"/>
                            </v-col>
                            <v-col>
                                <v-card-title class="cardTitle">Герцог графства коронован</v-card-title>
                                <v-card-text class="cardText">
                                    <span>Разнообразный и богатый опыт говорит нам, что укрепление и развитие внутренней структуры.</span>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-card>
        <v-card color=transparent class="commercialCard elevation-0">
            <v-card class="commercialCardTitle elevation-0">
                <v-card-title>Частные</v-card-title>
            </v-card>
            <v-row align="center">
                <v-col>
                    <v-card class="cardMini elevation-0">
                        <v-row>
                            <v-col align="center">
                                <v-img src="../assets/gasProm.png" class="hercogImg"/>
                            </v-col>
                            <v-col>
                                <v-card-title class="cardTitle">Герцог графства коронован</v-card-title>
                                <v-card-text class="cardText">
                                    <span>Разнообразный и богатый опыт говорит нам, что укрепление и развитие внутренней структуры.</span>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="cardMini elevation-0">
                        <v-row>
                            <v-col align="center">
                                <v-img src="../assets/rusHydro.png" class="hercogImg"/>
                            </v-col>
                            <v-col>
                                <v-card-title class="cardTitle">Герцог графства коронован</v-card-title>
                                <v-card-text class="cardText">
                                    <span>Разнообразный и богатый опыт говорит нам, что укрепление и развитие внутренней структуры.</span>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col>
                    <v-card class="cardMini elevation-0">
                        <v-row>
                            <v-col align="center">
                                <v-img src="../assets/moesk.png" class="hercogImg"/>
                            </v-col>
                            <v-col>
                                <v-card-title class="cardTitle">Герцог графства коронован</v-card-title>
                                <v-card-text class="cardText">
                                    <span>Разнообразный и богатый опыт говорит нам, что укрепление и развитие внутренней структуры.</span>
                                </v-card-text>
                            </v-col>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col cols="12" lg="1" align="left">
                    <img src='../assets/arrow.svg' class="arrowBackwards"/>
                </v-col>
            </v-row>
        </v-card>
        <img src="../assets/line.svg" class="lineV1"/>
    </v-card>
</template>

<script>
</script>

<style scoped>

.mainCard {
    padding: 0em 7em 0em 7em;
}
.mainCardTitle {
    margin-top: 4em;
    font-size:40px;
    font-weight: 500;
    margin-right: 20em;
    text-wrap: wrap;
    line-height: 1.2em;
}

.governmentCard {
    margin-top: 2em;
}

.governmentCardTitle {
    width: fit-content;
    margin-left: auto;
    border-radius: 15px;
    font-size:20px;
    font-weight: 600;
    padding: 0 10px 0 10px;
    color:black;
    margin-bottom: 1.5em
}

.hercogImg {
    width: 7em;
    height:7em;
    padding: 1em 0em 1em 0em
}

.cardTitle {
    font-size: 23px;
    font-weight: 600
}

.cardText {
    margin-right: 4em;
}

.cardMini {
    border-radius: 15px;
}

.commercialCard {
    margin-top: 2em
}

.commercialCardTitle {
    width: fit-content;
    border-radius: 15px;
    font-size:20px;
    font-weight: 600;
    padding: 0 10px 0 10px;
    margin-bottom: 1.5em
}

.arrowBackwards {
    transform: scaleX(-1);
}

.lineV {
    position: absolute;
    top: 27.55em;
    left: 14em;
    transform: translateY(-50%);
    z-index: -1;
    width: 107em;
    height: 4px
}

.lineV1 {
    position: absolute;
    bottom: 3.8em;
    left: -2em;
    transform: translateY(-50%);
    z-index: -1;
    width: 107em;
    height: 4px
}
</style>