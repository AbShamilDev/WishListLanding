import React, { useState } from "react";
import s from "./wishes.module.scss"


let wishList = [
  {
    "category": "Для души йога тичера",
    "wishes": [
      {
        "name": "Коврик для йоги",
        "description": "",
        "link": "https://www.wildberries.ru/catalog/44352481/detail.aspx?targetUrl=GP",
        "picture": "https://i.pinimg.com/564x/d1/eb/5c/d1eb5c28b2478d3296d2aff5a2412886.jpg"
      },
      {
        "name": "Коврик для йоги 2",
        "description": "",
        "link": "https://www.wildberries.ru/catalog/34725177/detail.aspx?targetUrl=GP&size=72906222",
        "picture": "https://i.pinimg.com/564x/32/83/67/3283672036baa808dc3e65af3d1512dc.jpg"
      },
      {
        "name": "Китайский чай",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/6d/5e/e9/6d5ee990cf7328a162267f2c4f57e858.jpg"
      },
      {
        "name": "Набор для чайной церемонии:\nпиалы, чайник, чабань",
        "description": "Где можно посмотреть в Краснодаре:\nАтмосфера, Чайная история",
        "link": "",
        "picture": "https://i.pinimg.com/564x/3a/91/5e/3a915e051d5f561c4d864a397106813f.jpg"
      },
      {
        "name": "Глюкофон, глюкофон мини",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/d6/a9/0b/d6a90bdba43a037f3ff1fa646f8f02b2.jpg"
      },
      {
        "name": "Тибетская поющая чаша",
        "description": "",
        "link": "",
        "picture": "https://mtdata.ru/u16/photo2039/20183449040-0/original.jpg"
      },
      {
        "name": "Сертификат в спа или на массаж",
        "description": "",
        "link": "",
        "picture": "https://actual-cosmetology.ru/wp-content/uploads/2022/08/7-1.jpg"
      },
      {
        "name": "Путевка в поход в горы на выходные",
        "description": "",
        "link": "",
        "picture": "https://img.freepik.com/free-photo/rural-travelers-exploring-the-surroundings-together_23-2149125448.jpg?w=996&t=st=1693923083~exp=1693923683~hmac=4decd224f48b1deda6ce9f731be07a9aa47a0961ef980211640ce13e7801afde"
      }
    ]
  },
  {
    "category": "Одежда (размер для оверсайз одежды лучше L, а так вообще M) ",
    "wishes": [
      {
        "name": "Кофта в сеточку (М)",
        "description": "",
        "link": "https://www.wildberries.ru/catalog/161210663/detail.aspx?targetUrl=GP&size=267881507",
        "picture": "https://i.pinimg.com/564x/83/5d/4e/835d4e09c686bfae320def41659e91fa.jpg"
      },
      {
        "name": "Футболка (L) 1",
        "description": "",
        "link": "https://www.wildberries.ru/catalog/154479615/detail.aspx?targetUrl=GP&size=257992692",
        "picture": "https://basket-10.wb.ru/vol1544/part154479/154479615/images/big/1.webp"
      },
      {
        "name": "Футболка (L) 2",
        "description": "",
        "link": "https://www.wildberries.ru/catalog/154663725/detail.aspx?targetUrl=GP&size=258254137",
        "picture": "https://basket-10.wb.ru/vol1546/part154663/154663725/images/big/5.webp"
      },
      {
        "name": "Свитшот (L)",
        "description": "Не знаю, где найти классные,\nно по ссылке какой стиль я хочу:",
        "link": "https://drive.google.com/drive/folders/1-BGEHLw2PLNQO_ShAtvA0vn3lU8GYf8g",
        "picture": "https://i.pinimg.com/564x/61/b6/3a/61b63ace8997f31676e65907926ff9c2.jpg"
      },
      {
        "name": "Толстовка (L)",
        "description": "Не знаю, где найти классные,\nно по ссылке какой стиль я хочу:",
        "link": "https://drive.google.com/drive/folders/1-BGEHLw2PLNQO_ShAtvA0vn3lU8GYf8g",
        "picture": "https://i.pinimg.com/564x/0d/f2/00/0df200aab3da44078727a543235c2389.jpg"
      },
      {
        "name": "Кепка",
        "description": "Не знаю, где найти классные,\nно по ссылке какой стиль я хочу:",
        "link": "https://drive.google.com/drive/folders/1-BGEHLw2PLNQO_ShAtvA0vn3lU8GYf8g",
        "picture": "https://i.pinimg.com/564x/15/df/d1/15dfd1d9fb000d7e96e5e26d5f83e033.jpg"
      },
      {
        "name": "Носки длинные (39)",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/2b/ca/5f/2bca5f01f7fb038d12d5a6f9fa4127d4.jpg"
      },
    ]
  },
  {
    "category": "Для дома",
    "wishes": [
      {
        "name": "Настольная лампа",
        "description": "С белым светом",
        "link": "https://www.wildberries.ru/catalog/51890757/detail.aspx?targetUrl=MS&size=97740666",
        "picture": "https://i.pinimg.com/564x/16/12/6a/16126a5fb03881b62c2e7596d0aef1cb.jpg",
      },
      {
        "name": "Свечи 1",
        "description": "Всегда мечтала о свечке,\nкоторая трещит…",
        "link": "https://instagram.com/practica.mentalhealth?igshid=MzRlODBiNWFlZA==",
        "picture": "https://i.pinimg.com/564x/2c/48/ed/2c48ed252061037483c36cd00b6735ed.jpg"
      },
      {
        "name": "Свечи 2",
        "description": "Всегда мечтала о свечке,\nкоторая трещит…",
        "link": "https://instagram.com/my_hygge_store?igshid=MzRlODBiNWFlZA==",
        "picture": "https://i.pinimg.com/564x/59/e8/5e/59e85e40dba017e4f95a0abe3577f51b.jpg"
      },
      {
        "name": "Большой уютный плед",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/d7/ca/7d/d7ca7dbc0c9e6d36247eed78b84a1093.jpg"
      },
      {
        "name": "Подставка под благовония",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/e2/57/aa/e257aa48bbd090ca98453be2930aaa76.jpg"
      },
      {
        "name": "Благовония",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/7b/98/b6/7b98b6a75bbda2cebf1ecd72c2d6ff0f.jpg"
      },
      {
        "name": "Подсветка для дома",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/47/d6/06/47d6061ac9fbf79da9022767aa2832b9.jpg"
      },
      {
        "name": "Мягкие тапочки для дома",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/0c/4c/9d/0c4c9dd1f3645966c6a40fbaa8ab29d8.jpg"
      },
      {
        "name": "Пижама",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/7e/9d/4d/7e9d4ddc7320b81fb73be18b2e236071.jpg"
      }
    ]
  },
  {
    "category": "Другое",
    "wishes": [
      {
        "name": "IBANEZ RG350DXZ-WH",
        "description": "",
        "link": "https://www.muztorg.ru/produ%D1%81t/A031209",
        "picture": "https://www.ibanez.com/common/product_artist_file/file/p_region_RG350DXZ_WH_1P_05_sub_3.jpg"
      },
      {
        "name": "Компьютерная мышка ",
        "description": "",
        "link": "https://www.citilink.ru/product/mysh-logitech-g102-lightsync-chernyi-opticheskaya-8000dpi-usb-6but-1891708/",
        "picture": "https://ir.ozone.ru/s3/multimedia-e/wc1000/6350655890.jpg"
      },
      {
        "name": "Чехол на телефон (XR)",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/e3/58/06/e3580662afcdb704eb8aada17db2c7ea.jpg"
      },
      {
        "name": "Защитное стекло (XR)",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/34/12/a7/3412a7e5fac523967b587552876c02aa.jpg"
      },
      {
        "name": "Чокер из бисера на шею",
        "description": "",
        "link": "",
        "picture": "https://i.pinimg.com/564x/89/16/9e/89169e6b02c9883ef9b8f3bc6e3c0ec2.jpg"
      },
      {
        "name": "Цепочка обьемная",
        "description": "Cеребряная",
        "link": "",
        "picture": "https://i.pinimg.com/originals/e6/5b/3d/e65b3d90f0ea98c56728c8d97c4dc939.jpg"
      }
    ]
  }
]

// let start = true, booking = false;

const List = () => {

  // async function refreshFn() {
  //   while (true) {
  //     let xhr = new XMLHttpRequest();
  //     xhr.open("GET", "./static/js/select_request.php", true);
  //     while(booking) {
  //       console.log('База в процессе бронирования')
  //     }
  //     xhr.send();

  //     // Обработка ответа от сервера
  //     xhr.onreadystatechange = function () {
  //       if (xhr.readyState === XMLHttpRequest.DONE) {
  //         if (xhr.status === 200) {
  //           // Парсинг JSON-данных
  //           let response = JSON.parse(xhr.responseText);
  //           setBook(response.map(el => el.Бронь == 0 ? false : true))
  //         } else {
  //           // Обработка ошибок
  //           console.error("Ошибка при выполнении запроса: " + xhr.status);
  //         }
  //       }
  //     }
  //     await new Promise((resolve) => setTimeout(resolve, 3000));
  //   }
  // }

  // if (start) {
  //   start = !start  
  //   refreshFn()
  // }

  const [bookedArray, setBook] = useState([true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

  const bookingFn = (id) => {
    // booking = true;
    // let copy = Object.assign([], bookedArray);
    // let update = new XMLHttpRequest();

    // update.open("POST", "./static/js/update_request.php", true);
    // update.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    // update.onreadystatechange = function () {
    //   if (update.readyState === 4 && update.status === 200) {
    //     console.log(update.responseText);
    //   }
    // };
    // update.send("id=" + (Number(id) + 1) + "&newVal=" + (copy[id] ? 0 : 1));
    // copy[id] = !copy[id]
    // setBook(copy)
    // booking = false;
    const tempBooked = [...bookedArray];
    tempBooked[id] = !tempBooked[id]
    setBook(tempBooked)
  }

  return wishList.map(el => <div className={s.wishList} >
    <h3>{el.category}</h3>
    {
      el.wishes.map((wish, bIndex) => {
        return <div className={s.wish} style={{ backgroundImage: `url(${wish.picture})` }}>
          <div className={s.bookingWrapper}>
            <div className={bookedArray[bIndex] ? s.active : ''}>
              Забронировано
            </div>
            <span id={bIndex} className={s.bookButton + ' ' + (bookedArray[bIndex] ? '' : s.active)} onClick={(el) => { bookingFn(el.target.id) }}>Забронировать</span>
            <span id={bIndex} className={s.unbookButton + ' ' + (bookedArray[bIndex] ? s.active : '')} onClick={(el) => { bookingFn(el.target.id) }}>Разбронировать</span>
          </div>
          {wish.name}
          <div className={s.description}>{wish.description}</div>
          {wish.link ? <a href={wish.link} className={s.linkButton}>
            Link
          </a> : null}
        </div>
      })
    }
  </div>
  )
}

const WishWrapper = () => {
  return (
    <div className={s.wrapper}>
      {<List />}
    </div>
  )
}

export default WishWrapper;