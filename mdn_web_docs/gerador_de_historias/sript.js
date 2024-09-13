const user = document.getElementById('user');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

const storyText = "Em [Nome da Cidade], o Principal percebeu que todos os [Nome do Item] estavam desaparecendo. Depois de investigar, descobriu que [Nome do Inimigo] estava escondido em [Nome do Local Estranho], tentando usar os [Nome do Item] para fazer [Nome do Novo Item Maluco]. No fim, Principal e [Nome do Amigo] se uniram e criaram uma nova arma que fez o [Nome do Inimigo] desistir de tudo."
const nameCity = [];
const nameItem = [];
const nameEnemy = [];
const nameLocation = [];
const nameFriend = [];