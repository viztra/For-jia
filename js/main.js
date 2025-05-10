
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('嗨，我只是想借此机会祝您生日快乐，我的小陛下。我想让你知道你真的是一个了不起的人，我很高兴我能成为你生活的一部分。 我希望你过上健康的生活，请永远记住——当你对生活感到疲倦时，我会永远在这里为你服务。').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 100); // 1000ms delay
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};