export const getGameStatistic = (answers, countLives, gameParametrs, countGames) => {

  if ((answers.length !== countGames) || (countLives <= 0)) {
    return -1;
  }

  const resultsGame = {
    fastAnswers: 0,
    slowAnswers: 0,
    correctAnswers: 0,
    pointsForFastAnswers: 0,
    pointsForSlowAnswers: 0,
    pointsForCorrectAnswers: 0,
    pointsForLives: 0,
    totalPoints: 0
  };

  answers.forEach((answer) => {
    if (answer.isCorrect) {
      resultsGame.correctAnswers++;
      if (answer.time <= gameParametrs.FAST_TIME) {
        resultsGame.fastAnswers++;
      }
      if (answer.time >= gameParametrs.SLOW_TIME) {
        resultsGame.slowAnswers++;
      }
    }
  });

  resultsGame.pointsForCorrectAnswers = resultsGame.correctAnswers * gameParametrs.POINTS_FOR_CORRECT_ANSWERS;
  resultsGame.pointsForSlowAnswers = resultsGame.slowAnswers * gameParametrs.POINTS_FOR_SLOW_ANSWERS;
  resultsGame.pointsForFastAnswers = resultsGame.fastAnswers * gameParametrs.POINTS_FOR_FAST_ANSWERS;
  resultsGame.pointsForLives = countLives * gameParametrs.POINTS_FOR_LIVES;
  resultsGame.totalPoints = resultsGame.pointsForCorrectAnswers + resultsGame.pointsForFastAnswers + resultsGame.pointsForSlowAnswers + resultsGame.pointsForLives;

  return resultsGame;
};

export const dataGame = {

  parametrs: {
    FAST_TIME: 5,
    SLOW_TIME: 20,
    MAX_TIME: 30,
    MAX_LIVES: 3,
    POINTS_FOR_FAST_ANSWERS: 50,
    POINTS_FOR_SLOW_ANSWERS: -50,
    POINTS_FOR_CORRECT_ANSWERS: 100,
    POINTS_FOR_LIVES: 50
  },

  greeting: {
    title: `Лучшие художники-фотореалисты бросают&nbsp;тебе&nbsp;вызов!`,
    content: `Правила игры просты.<br>
      Нужно отличить рисунок&nbsp;от фотографии и сделать выбор.<br>
      Задача кажется тривиальной, но не думай, что все так просто.<br>
      Фотореализм обманчив и коварен.<br>
      Помни, главное — смотреть очень внимательно.`
  },

  games: [
    {
      type: 1,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      images: [
        {
          is: `paint`,
          src: `http://azoriceramica.ru/fileadmin/fotoreal_5.jpg`
        },
        {
          is: `photo`,
          src: `http://popsop.com/wp-content/uploads/coca_cola_caramel_cancer_joshua_rott_reuters_01.jpg`
        }]
    },
    {
      type: 2,
      title: `Угадай, фото или рисунок?`,
      image: {
        src: `http://cp12.nevsepic.com.ua/7-2/1355150347-0905459-www.nevsepic.com.ua.jpg`,
        is: `paint`
      }
    },
    {
      type: 3,
      title: `Найдите рисунок среди изображений`,
      search: `paint`,
      images: [
        {
          src: `https://avatars.mds.yandex.net/get-pdb/251121/50784e1a-b4aa-4a5e-bd2e-834c6e60ab85/s800`,
          is: `photo`
        },
        {
          src: `http://www.fresher.ru/manager_content/2-2017/v-eto-slozhno-poverit-neveroyatno-fotorealistichnye-risunki-vypolnennye-sharikovoj-ruchkoj/2.jpg`,
          is: `paint`
        },
        {
          src: `https://mediaslide-europe.storage.googleapis.com/premier/pictures/3040/8410/large-1484589467-5a73b09a083c184594647d37af2f5a00.jpg`,
          is: `photo`
        }
      ]
    },
    {
      type: 1,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      images: [
        {
          is: `paint`,
          src: `http://img-fotki.yandex.ru/get/5208/svezduh.5b/0_625ef_17c2c13c_XL`
        },
        {
          is: `photo`,
          src: `http://mysadochek.ru/wp-content/uploads/2014/05/ogurci-v-bankah.jpg`
        }]
    },
    {
      type: 2,
      title: `Угадай, фото или рисунок?`,
      image: {
        src: `http://bm.img.com.ua/nxs/img/prikol/images/large/0/2/270520.jpg`,
        is: `paint`
      }
    },
    {
      type: 3,
      title: `Найдите фото среди изображений`,
      search: `photo`,
      images: [
        {
          src: `https://img.day.az/clickable/05/a/477844_004.jpg`,
          is: `paint`
        },
        {
          src: `https://user.vse42.ru/files/P_S1280x795q80/Wnone/ui-50f4da1671a275.37646578.jpeg`,
          is: `paint`
        },
        {
          src: `http://lfly.ru/wp-content/uploads/2017/02/allergiya-na-glazax-simptomy-foto.jpg`,
          is: `photo`
        }
      ]
    },
    {
      type: 1,
      title: `Угадайте для каждого изображения фото или рисунок?`,
      images: [
        {
          is: `paint`,
          src: `http://camelot.multilocal.ru/pic/photo/FotoRealPic09W/1.jpg`
        },
        {
          is: `photo`,
          src: `https://c.pxhere.com/photos/54/45/boy_african_africa_child_portrait_culture_ethnicity_tribe-777505.jpg!d`
        }]
    },
    {
      type: 2,
      title: `Угадай, фото или рисунок?`,
      image: {
        src: `https://c.pxhere.com/photos/23/e9/people_portrait_child_poverty_male_black_and_white_looking_eyes-543713.jpg!d`,
        is: `photo`
      }
    },
    {
      type: 3,
      title: `Найдите рисунок среди изображений`,
      search: `paint`,
      images: [
        {
          src: `http://allreport.ru/home/allrepor/public_html/wp-content/uploads//2012/01/tjalf-sparnaay-hyperrealistic-food-paintings-6-600x379.jpg`,
          is: `paint`
        },
        {
          src: `https://hi-news.ru/wp-content/uploads/2016/04/Junk-Food-650x433.jpg`,
          is: `photo`
        },
        {
          src: `http://www.munsonangusbeef.com/v/vspfiles/photos/GBB-12-2.jpg`,
          is: `photo`
        }
      ]
    },
    {
      type: 2,
      title: `Угадай, фото или рисунок?`,
      image: {
        src: `http://www.whiterockgallery.com/JPEGs/Acierno/strawberrykisses-Mickie_Acierno.jpg`,
        is: `paint`
      }
    }
  ]
};
