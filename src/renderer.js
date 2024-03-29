const information = document.getElementById("info");
information.innerText = `Cette application utilise Chrome (v${versions.chrome()}), Node.js (v${versions.node()}), et Electron (v${versions.electron()})`;

const func = async () => {
  const response = await window.versions.ping();
  console.log(response); // Affichera 'pong'
};

func();

const cpu = async () => {
  const response = await window.versions.cpu();
  console.log(`le CPU est à ${response} de charge`);
};

cpu();

const info = async (data) => {
  //   console.log(log);
  const response = await window.versions.info();
  console.log(`Info CPU ${JSON.stringify(response[1])})`);
};

info();
