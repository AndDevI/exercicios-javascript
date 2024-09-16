const user = document.getElementById('user');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "Em :city:, o Principal percebeu que todos os :item: estavam desaparecendo. Depois de investigar, descobriu que :enemy: estava escondido em :location:, tentando usar os :item: para fazer :buildItem:. No fim, Principal e :friend: se uniram e criaram uma nova arma que fez o :enemy: desistir de tudo.";
const nameCity = ["São Paulo", "Rio de Janeiro", "Belo Horizonte", "Porto Alegre", "Salvador"];
const nameItem = ["blocos de LEGO", "tijolos de chocolate", "morcegos de pelúcia", "canos de espuma", "tampinhas de garrafa"];
const nameBuildItem = ["castelo de LEGO com muros de tijolos de chocolate envenenado", "armadilha de pelúcia que desmorona em um mar de canos de espuma", "labirinto de tampinhas e LEGO que leva a uma caverna de chocolate derretido", "escultura de monstros feita de pelúcia e canos, com lava de chocolate", "catapulta de tampinhas lançando tijolos de chocolate que explodem em uma nuvem venenosa"];
const nameEnemy = ["Sombrio Destructor", "Lady Caos", "Senhor Oblivion", "Mestre Tormenta", "Dama das Trevas"];
const nameLocation = ["Caverna das Sombras", "Fortaleza do Caos", "Ninho da Escuridão", "Abismo do Terror", "Castelo do Medo"];
const nameFriend = ["Valente Leon", "Ares Storm", "Sofia Lumina", "Rico Guardião", "Helena Fênix"];

function randomValue(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function result() {
    let newStory = storyText;

    const city = randomValue(nameCity);
    const item = randomValue(nameItem);
    const buildItem = randomValue(nameBuildItem);
    const enemy = randomValue(nameEnemy);
    const location = randomValue(nameLocation);
    const friend = randomValue(nameFriend);

    console.log("City:", city);
    console.log("Item:", item);
    console.log("Build Item:", buildItem);
    console.log("Enemy:", enemy);
    console.log("Location:", location);
    console.log("Friend:", friend);

    newStory = newStory.replace(/:city:/g, city);
    newStory = newStory.replace(/:item:/g, item);
    newStory = newStory.replace(/:buildItem:/g, buildItem);
    newStory = newStory.replace(/:enemy:/g, enemy);
    newStory = newStory.replace(/:location:/g, location);
    newStory = newStory.replace(/:friend:/g, friend);

    if (user.value.trim() !== '') {
        const name = user.value;
        newStory = newStory.replace(/Principal/g, name);
    }

    story.textContent = newStory;
}

randomize.addEventListener('click', result);
