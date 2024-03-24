import React from 'react'
import CardCanal from '../componentes/CardCanal'

const TigoEspecialH = () => {

  const tigoEspecialHfc = [
    {
      id: 1,
      canal: 2,
      tipo: "SD",
      nombre: "Canal Guía Tigo",
      genero: "Informativo",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5htSnILk5aHuMItDzDwtTj/a9bd18d826cf27510dae3f27f848ca54/ic-canal-tigo.png?q=70&fm=avif"
    },
    {
      id: 2,
      canal: 6,
      tipo: "SD",
      nombre: "Telemedellín",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6Ne59Qhjjf9IelaXKkzVrD/25c113f63390dab5a1ceca8688421408/Pag_Web_40_x_40_px.png?q=70&fm=avif"
    },
    {
      id: 3,
      canal: 7,
      tipo: "SD",
      nombre: "Caracol",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5oQQA4E58l5GkZcCV6ppYT/830070c8518b1fddc5556d5c461c8449/ic-canal-caracol.jpeg?q=70&fm=avif"
    },
    {
      id: 4,
      canal: 8,
      tipo: "SD",
      nombre: "Canal 1",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6UMTY7DxspevyqOHNBfpJ3/8711eab9289b3d3eeb65c990d94bfef9/ic-canal-1.jpeg?q=70&fm=avif"
    },
    {
      id: 5,
      canal: 9,
      tipo: "SD",
      nombre: "RCN",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co78eRjob73lbosKEwlqoLrD/2618c1b0d4af2f583aeae44f8130328a/ic-canal-rcn.svg"
    },
    {
      id: 6,
      canal: 11,
      tipo: "SD",
      nombre: "Disney Channel",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5iCjDVCV7G8uRjoYxCmwso/d1ec74150d9f78e1e35739c0640db630/ic-canal-disney-channel.png?q=70&fm=avif"
    },
    {
      id: 7,
      canal: 12,
      tipo: "SD",
      nombre: "Discovery Kids",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6gsIwv6YoNIL71xFxKwBv/518f3ae2e34030ee7bdd778f7c68fbff/ic-canal-discovery-kids.png?q=70&fm=avif"
    },
    {
      id: 8,
      canal: 13,
      tipo: "SD",
      nombre: "Canal Institucional",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4YJSMpVSQV4PtIHA8Ysrsf/9518657eb42975b12511e8afdb587d7c/ic-canal-institucional.jpeg?q=70&fm=avif"
    },
    {
      id: 9,
      canal: 14,
      tipo: "SD",
      nombre: "DreamWorks",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/6P0uJt1JcsE8kNTwnLgomm/271e7ab917fd5d5d7903dd920eb47465/DreamWorks_SD_y_HD_LogoPa__ginaWeb_40x40.png?q=70&fm=avif"
    },
    {
      id: 10,
      canal: 15,
      tipo: "SD",
      nombre: "Disney Jr.",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co79iMSUUR4CnmS266dN2Uyx/9a1f66c8c77e905da5099e427f537d31/ic-canal-disney-jr.png?q=70&fm=avif"
    },
    {
      id: 11,
      canal: 16,
      tipo: "SD",
      nombre: "Cartoon Network",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co0dHXhQ7O3glwwQXZLTXWp/6e225156d67fb9df4ee866c8aa18eadf/ic-canal-cartoon-network.png?q=70&fm=avif"
    },
    {
      id: 12,
      canal: 17,
      tipo: "SD",
      nombre: "Nickelodeon",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/400J14uqkIfTgUBQNGkWws/45aacbd0eb3a349a5d6b991e96521d3d/Nickelodeon.png?q=70&fm=avif"
    },
    {
      id: 13,
      canal: 18,
      tipo: "SD",
      nombre: "Cartoonito",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7wvIe4rUHHdrxVmt3JSkB1/bf2ea92295b2f8c273ddbda4161eb788/Cartoonito.png?q=70&fm=avif"
    },
    {
      id: 14,
      canal: 19,
      tipo: "SD",
      nombre: "CNN Español",
      genero: "Informativo",
      img: "https://images.tigocloud.net/j1bxozgharz5/coCRou53WpZ0UoGYM9MQBHD/05ae7a041eec7313916ee51bdf0224fb/ic-canal-cnn-espanol.png?q=70&fm=avif"
    },
    {
      id: 15,
      canal: 21,
      tipo: "SD",
      nombre: "City TV",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6UpVQf0K8KqNveQrDQlyQS/cc91edd65ddde6a79ca0534a1abe82a5/ic-canal-city-tv.jpeg?q=70&fm=avif"
    },
    {
      id: 16,
      canal: 22,
      tipo: "SD",
      nombre: "Canal El Tiempo",
      genero: "Informativo",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2RFdAnl30bDqPy2kIVkjxX/a883178ab07113087e1aa376080882f8/ic-canal-el-tiempo.jpeg?q=70&fm=avif"
    },
    {
      id: 17,
      canal: 23,
      tipo: "SD",
      nombre: "WIN Sports",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3Xf9Sir3mqOCcWD2xpXlSg/9e9883d046c228d103eead443a89ed89/ic-canal-win-sports.svg"
    },
    {
      id: 18,
      canal: 24,
      tipo: "SD",
      nombre: "Señal Colombia",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3WOsGiFNI2RR1FgiEmGSWK/6c32438152d3c0615328ebff7e175fc3/ic-canal-sen_al-colombia.svg"
    },
    {
      id: 19,
      canal: 25,
      tipo: "SD",
      nombre: "ESPN",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6ge576sHeB67b9pX7yODUg/a0150e2cf92a19ccac98f0c734fe1f5b/ic-canal-espn.png?q=70&fm=avif"
    },
    {
      id: 20,
      canal: 26,
      tipo: "SD",
      nombre: "ESPN 2",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7zGaQrmcR3M5iJEMPCjHQm/a178935434ed6cc610d3f6b0e745ffaf/ic-canal-espn2.png?q=70&fm=avif"
    },
    {
      id: 21,
      canal: 27,
      tipo: "SD",
      nombre: "ESPN 3",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1Dthr6woz0QtpK1KpYZZDR/e26e0eb5e053e6c9d7175c771a50fd43/ic-canal-espn3.png?q=70&fm=avif"
    },
    {
      id: 22,
      canal: 30,
      tipo: "SD",
      nombre: "ESPN 7",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/QPLwkZIAzFlohFDhbKxYd/a7d670d73a1508e945f0b5b04bdec021/ESPN7_40x40px.png?q=70&fm=avif"
    },
    {
      id: 23,
      canal: 31,
      tipo: "SD",
      nombre: "Discovery Channel",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1Orfczu9yCAWMF2pMH5qlF/4b2a690fd10d13f25e627efdebe81bf8/ic-canal-discovery-channel.png?q=70&fm=avif"
    },
    {
      id: 24,
      canal: 32,
      tipo: "SD",
      nombre: "Animal Planet",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4eHe490tUS8SP81dr4icD5/6e9b68be011a0442617271743245c7a6/ic-canal-animal-planet.png?q=70&fm=avif"
    },
    {
      id: 25,
      canal: 33,
      tipo: "SD",
      nombre: "Discovery Home & Health",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/5It996ihg3cBPyP0B75R9U/b327fc38dd2a781d85b3d6a24a0fb04b/H_H_40x40px.png?q=70&fm=avif"
    },
    {
      id: 26,
      canal: 37,
      tipo: "SD",
      nombre: "History Channel",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2eyO3EPGXuSVQSIfIW2OCA/ec523e24f625bde944bc8616bf55836d/ic-canal-history.png?q=70&fm=avif"
    },
    {
      id: 27,
      canal: 39,
      tipo: "SD",
      nombre: "Universal Channel",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co55LzSPtvIcdKNnEEBdcHpH/3fe8338780cdd3d73c99a0ceefbead56/ic-canal-universal.png?q=70&fm=avif"
    },
    {
      id: 28,
      canal: 40,
      tipo: "SD",
      nombre: "Studio Universal",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co52S0YY8ALigiKBUSiSF9M4/b0fb6b4284f0c5c523874f4c2a158799/ic-canal-studio-universal.png?q=70&fm=avif"
    },
    {
      id: 29,
      canal: 41,
      tipo: "SD",
      nombre: "Sony Movies ",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/5mnMq4623KYWEJtJMhDhPZ/1c985bb791fe8b78c642b8d04f6215c0/Sony_Movies_SD_HD_p__gina_web_40x40px.png?q=70&fm=avif"
    },
    {
      id: 30,
      canal: 42,
      tipo: "SD",
      nombre: "TNT",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3U7ZklHFGSNj8p1gkFkvCJ/5d0283359f8a5557ef2e57d7b53e2dc5/ic-canal-tnt.png?q=70&fm=avif"
    },
    {
      id: 31,
      canal: 43,
      tipo: "SD",
      nombre: "TCM",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co34MUgnepURka9Kk7VeW5c/4bfd65ea175a7b3498a0403898d27014/ic-canal-tcm.png?q=70&fm=avif"
    },
    {
      id: 32,
      canal: 44,
      tipo: "SD",
      nombre: "Space",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/coZuutadbpFwgrk5gu2pYAH/4ebf1dbe2519ac0ffadc38a20be4521d/ic-canal-space.png?q=70&fm=avif"
    },
    {
      id: 33,
      canal: 47,
      tipo: "SD",
      nombre: "AMC",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7vIDCo9DolCEBCoGXsY2to/8c04f6e67bb6c8a6e6fdfe5bf107fe12/ic-canal-amc.png?q=70&fm=avif"
    },
    {
      id: 34,
      canal: 48,
      tipo: "SD",
      nombre: "Investigation Discovery",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/coeQrK8baQzklRkZch6LDIz/6bcd85583ec9f42698670e7b1ee4410c/ic-canal-id.png?q=70&fm=avif"
    },
    {
      id: 35,
      canal: 53,
      tipo: "SD",
      nombre: "AXN",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1XELBJt7AmWmBcyUPvHtC9/2be845f564ddf9ed957f93418804f640/ic-canal-axn.png?q=70&fm=avif"
    },
    {
      id: 36,
      canal: 54,
      tipo: "SD",
      nombre: "SONY Channel",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/7oiPB6u7cJjPhRXBVYazIz/cee92ce3836a0981a56aa48a4bc9395c/Sony_Channel.png?q=70&fm=avif"
    },
    {
      id: 37,
      canal: 55,
      tipo: "SD",
      nombre: "Warner Channel",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/co540nmryyY9YP2MiYp7o9rW/7a64a44f9c811119607422643ca84608/ic-canal-warner-channel.png?q=70&fm=avif"
    },
    {
      id: 38,
      canal: 56,
      tipo: "SD",
      nombre: "A & E",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/cosMpBDLh3VErNKFzx6fFBw/f98bf0b51d1348a99ef5771f284c0d2e/ic-canal-ae.png?q=70&fm=avif"
    },
    {
      id: 39,
      canal: 58,
      tipo: "SD",
      nombre: "EWTN",
      genero: "Religioso",
      img: "https://images.tigocloud.net/j1bxozgharz5/coSq3O5x3bwKo4AkHc92Abs/5e6e0cc72e7fd6e4ec4a5215e0ae2831/ic-canal-ewtn.png?q=70&fm=avif"
    },
    {
      id: 40,
      canal: 59,
      tipo: "SD",
      nombre: "Enlace",
      genero: "Religioso",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2abg6MrvhLlhqJ9IcDevjO/970c8766e5667897c59146853ab6196c/ic-canal-enlace.png?q=70&fm=avif"
    },
    {
      id: 41,
      canal: 60,
      tipo: "SD",
      nombre: "TNT Series",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2z6PAA0BmcbxfL6MdDPmlk/c4cf5a9b49ee01d3891ebfd727bcdef0/ic-canal-tnt-series.png?q=70&fm=avif"
    },
    {
      id: 42,
      canal: 61,
      tipo: "SD",
      nombre: "MAS CHIC",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6OnfS4mtV0wVd47l6SDQru/53c615e72128a6b955152eab5caa3fe8/ic-canal-mas-chic.png?q=70&fm=avif"
    },
    {
      id: 43,
      canal: 62,
      tipo: "SD",
      nombre: "Las Estrellas",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co58tKot0HP9xOm44fd6Qrgl/21aa58d8c07eba27538fae0acf04ecd0/ic-canal-las-estrellas.png?q=70&fm=avif"
    },
    {
      id: 44,
      canal: 64,
      tipo: "SD",
      nombre: "TL Novelas",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/coKYwsb8FccxH975KWEkZEO/d4a967a50cab4a2f3dd09a25d8e0afd6/ic-canal-tl-novelas.png?q=70&fm=avif"
    },
    {
      id: 45,
      canal: 65,
      tipo: "SD",
      nombre: "Tele VID",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6WKvUCZ82JDw4PkXF1gfLc/ddde3485e7469592b08fdf8769fb1c60/ic-canal-tele-vid.svg"
    },
    {
      id: 46,
      canal: 68,
      tipo: "SD",
      nombre: "E! Entertainment",
      genero: "Especializado",
      img: "https://images.tigocloud.net/j1bxozgharz5/coga4EVrg0iqYaoB5jQDQ23/1af11fa8f2a16ef374bf03f872502128/ic-canal-e.png?q=70&fm=avif"
    },
    {
      id: 47,
      canal: 69,
      tipo: "SD",
      nombre: "El Gourmet",
      genero: "Especializado",
      img: "https://images.tigocloud.net/j1bxozgharz5/74J1c3ANbKo3lYdVLBZsjz/102ba094a978c99cee892b275031be11/El_Gourmet.png?q=70&fm=avif"
    },
    {
      id: 48,
      canal: 98,
      tipo: "SD",
      nombre: "Canal del Congreso",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4sVJkgUxXzgeDcbxrwizlx/645684cf30566dd2e7cf09075bb43a7e/ic-canal-congreso.jpeg?q=70&fm=avif"
    },
    {
      id: 49,
      canal: 99,
      tipo: "SD",
      nombre: "Zoom",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6G10xbqEJ6B4aBP1pHGlQu/30badd9e3970f367095b26f3f54dde20/ic-canal-zoom.svg"
    },
    {
      id: 50,
      canal: 100,
      tipo: "SD",
      nombre: "Teleantioquia",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5JYJOD3JTeyc3H4dKeoUFi/7a8f258880805fdf8a8bfc28aef0633b/ic-canal-teleantioquia.svg"
    },
    {
      id: 51,
      canal: 101,
      tipo: "SD",
      nombre: "Telecaribe",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3ssmF8QC4886rzr0des7Oe/58f66c83453cf889be9d8540eccdc9af/ic-canal-telecaribe.svg"
    },
    {
      id: 52,
      canal: 102,
      tipo: "SD",
      nombre: "Telepacifico",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co39I7lozxMEDKGxd8emURVz/cdda99e30771c703f100b4692cd16c3f/ic-canal-telepacifico.svg"
    },
    {
      id: 53,
      canal: 103,
      tipo: "SD",
      nombre: "Telecafé",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5AP65C5pIWWfOTSjlpuQjr/14fe3e91c588e981a5ff71289878bafe/ic-canal-telecafe.svg"
    },
    {
      id: 54,
      canal: 104,
      tipo: "SD",
      nombre: "Canal Capital",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co24DCDyA7SSBbgOz6m04rmn/5084d4f191f7a513297e5f4f3f24d7f6/ic-canal-capital.jpeg?q=70&fm=avif"
    },
    {
      id: 55,
      canal: 105,
      tipo: "SD",
      nombre: "Canal Trece",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2uIruxse87iG2l4hmARY6j/2cc1e70fbdf6271b80514c3a5ff4bfd8/ic-canal-trece.jpeg?q=70&fm=avif"
    },
    {
      id: 56,
      canal: 106,
      tipo: "SD",
      nombre: "TRO",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/coCXoHZvtzV7uzGXHmzZlJU/105d3ef695e7cb9b1f5d073ee90bc724/ic-canal-tro.svg"
    },
    {
      id: 57,
      canal: 107,
      tipo: "SD",
      nombre: "Teleislas",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1yzrTES0CvOcLJEseTe68N/f0a58cb2c9d575a64923c7899cadf489/ic-canal-teleislas.svg"
    },
    {
      id: 58,
      canal: 111,
      tipo: "SD",
      nombre: "ATN",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4USNeIu1774qU7XQoMiIso/52db45bab863d8f3ee702e3321db831d/ic-canal-atn.jpeg?q=70&fm=avif"
    },
    {
      id: 59,
      canal: 112,
      tipo: "SD",
      nombre: "Telepetroleo",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4cXHD8GUgCuu0F8mTPdxBr/df984214a79da8ad594b26fc3e4457de/ic-canal-telepetroleo.svg"
    },
    {
      id: 60,
      canal: 113,
      tipo: "SD",
      nombre: "Enlace TV",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6K5EsRrFWnclUjoj0u06gV/8470572e5474cae775a38e86897a978a/ic-canal-enlace-tv.jpeg?q=70&fm=avif"
    },
    {
      id: 61,
      canal: 114,
      tipo: "SD",
      nombre: "TVC",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co0N6WFq78tCpedwhma8ZDa/8529a2a2370f26346cb8d0fbf39718a6/ic-canal-tvc.svg"
    },
    {
      id: 62,
      canal: 115,
      tipo: "SD",
      nombre: "Canal Cartagena ",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co22rpT8vnvJFWXLoVRNxarf/ddadbfba9ab236b45939897ac75f1ab7/ic-canal-cartagena.jpeg?q=70&fm=avif"
    },
    {
      id: 63,
      canal: 116,
      tipo: "SD",
      nombre: "Cali TV ",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4RmwpnjNL2gEpnfsSJzraM/7aaa56bafbebcffbf5ea0269fcea47f9/ic-canal-cali-tv.jpeg?q=70&fm=avif"
    },
    {
      id: 64,
      canal: 117,
      tipo: "SD",
      nombre: "Canal Univalle TV",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6ncEX5zYsUdHwPOyWnotgG/818bb7f2c4b38af19acf8e775526c85d/ic-canal-univalle-tv.jpeg?q=70&fm=avif"
    },
    {
      id: 65,
      canal: 148,
      tipo: "SD",
      nombre: "ZooMoo",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/cos0aRlvZnKvasQyxusjpUc/2b66668ddb36c0e70b23e8a6d4eb9994/ic-canal-zoomoo.png?q=70&fm=avif"
    },
    {
      id: 66,
      canal: 149,
      tipo: "SD",
      nombre: "Cristovisión",
      genero: "Religioso",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5vv3b1lhjYHP9YrmsicMHE/03302e8f9850b180fec9a61435317804/ic-canal-cristovision.jpeg?q=70&fm=avif"
    },
    {
      id: 67,
      canal: 150,
      tipo: "SD",
      nombre: "Telemundo",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/cohKK7JGtVoxK4bMs3O7vN2/3d10ac0422e7d6475eb92671c38be445/ic-canal-telemundo.svg"
    },
    {
      id: 68,
      canal: 151,
      tipo: "SD",
      nombre: "Cosmovision",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6UuKmLL9oq1jXcXsRneLN8/d08dea6f409cea00069bdac532a19b6d/ic-canal-cosmovision.svg"
    },
    {
      id: 69,
      canal: 152,
      tipo: "SD",
      nombre: "Kanal D Drama",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6fr1lCP2Ylo0MoMvLVcNU7/c8a2ad3bc184d8d99cac11ddf8b3ee2d/ic-canal-D-Drama.png?q=70&fm=avif"
    },
    {
      id: 70,
      canal: 154,
      tipo: "SD",
      nombre: "Teleamiga",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4SsVZut3zvSf8sKN7dpJQE/0ddf21d15e693c2eb8edd6d590b935cf/ic-canal-teleamiga.png?q=70&fm=avif"
    },
    {
      id: 71,
      canal: 159,
      tipo: "SD",
      nombre: "Tooncast",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1eKtT8254WxPepXVuOBfee/638dd9c1a5d537ae9117459e98f91d58/ic-canal-tooncast.png?q=70&fm=avif"
    },
    {
      id: 72,
      canal: 163,
      tipo: "SD",
      nombre: "Bloomberg",
      genero: "Especializado",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2ZCWY872f52C9Ek84D439c/59b45762169b8340abe174849d61f6c0/ic-canal-bloomberg.png?q=70&fm=avif"
    },
    {
      id: 73,
      canal: 165,
      tipo: "SD",
      nombre: "Cinema +",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/conaLlYOaRQCFijqfYpCziz/e45280166e5ed1d43e2f7630f20e380c/ic-canal-cinema_.jpeg?q=70&fm=avif"
    },
    {
      id: 74,
      canal: 170,
      tipo: "SD",
      nombre: "Eurochannel",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1ijSEPXnQVtX23B2XGTXZm/24fe36407e910a90fd8de484388ad648/ic-canal-eurochannel.jpeg?q=70&fm=avif"
    },
    {
      id: 75,
      canal: 173,
      tipo: "SD",
      nombre: "Usa",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/1OAbli0DiU3UmFOWav3kbG/455b91510e862bba9f1d08e5fb2614c6/USA.jpg?q=70&fm=avif"
    },
    {
      id: 76,
      canal: 174,
      tipo: "SD",
      nombre: "Lifetime",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/co41RPlaIAKX0o3tm3uU54tq/8ed307877032891270d6148380125604/ic-canal-lifetime.svg"
    },
    {
      id: 77,
      canal: 179,
      tipo: "SD",
      nombre: "Mi Gente TV",
      genero: "Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4gLuJNgNofNA1smoALkTFf/83b066012b2450c93c40e51f4766c6a1/ic-canal-mi-gente-tv.jpeg?q=70&fm=avif"
    },
    {
      id: 78,
      canal: 183,
      tipo: "SD",
      nombre: "Film & Arts",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3jDERpPsaHVffgrqKwYO2w/b663d0fbac2b61783957968725964383/ic-canal-film-arts.png?q=70&fm=avif"
    },
    {
      id: 79,
      canal: 184,
      tipo: "SD",
      nombre: "RCN Telenovelas",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5iHcqjsTSQ9LHAZVtyX5lY/fe40099171c56573d983e7d9b8718f39/ic-canal-rcn-novelas.svg"
    },
    {
      id: 80,
      canal: 185,
      tipo: "SD",
      nombre: "Novelas Caracol",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7d8PFevQkLktNnyZMIkhez/bc6200c723fa48274d8a23ea11904aaf/ic-canal-novelas-caracol.jpeg?q=70&fm=avif"
    },
    {
      id: 81,
      canal: 189,
      tipo: "SD",
      nombre: "NTN 24",
      genero: "Informativo",
      img: "https://images.tigocloud.net/j1bxozgharz5/co57GvUnxksUnEoE0lN2uTom/51b083a76ed7e1e98f338033ae76a444/ic-canal-ntn24.jpeg?q=70&fm=avif"
    },
    {
      id: 82,
      canal: 190,
      tipo: "SD",
      nombre: "Cable Noticias",
      genero: "Informativo",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7f4PLZI9NlUABB50VzWpsY/c35f27303fe57489072f3898e587062d/ic-canal-cable-noticias.jpeg?q=70&fm=avif"
    },
    {
      id: 83,
      canal: 191,
      tipo: "SD",
      nombre: "BBC World News",
      genero: "Informativo",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6uOo3IU4gC25AVEF6RvkBm/2fdf00650d3ed09afd961bd50ae359be/ic-canal-bbc-world.png?q=70&fm=avif"
    },
    {
      id: 84,
      canal: 200,
      tipo: "HD",
      nombre: "RCN HD",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co78eRjob73lbosKEwlqoLrD/2618c1b0d4af2f583aeae44f8130328a/ic-canal-rcn.svg"
    },
    {
      id: 85,
      canal: 201,
      tipo: "HD",
      nombre: "Caracol HD",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4lYouPdT24CcLSBplvOfZf/4453e3d55aa1c281ba09adf35717fcb6/ic-canal-caracol-hd.svg"
    },
    {
      id: 86,
      canal: 203,
      tipo: "HD",
      nombre: "Canal 1 HD",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6li6EJ8bYucHuccsnextSA/13c1cfb4c4ea36bcc5afc2c1cfbcb190/ic-canal-1-hd.svg"
    },
    {
      id: 87,
      canal: 204,
      tipo: "HD",
      nombre: "Señal Colombia HD",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3WOsGiFNI2RR1FgiEmGSWK/6c32438152d3c0615328ebff7e175fc3/ic-canal-sen_al-colombia.svg"
    },
    {
      id: 88,
      canal: 205,
      tipo: "HD",
      nombre: "Canal Institucional HD",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4YJSMpVSQV4PtIHA8Ysrsf/9518657eb42975b12511e8afdb587d7c/ic-canal-institucional.jpeg?q=70&fm=avif"
    },
    {
      id: 89,
      canal: 207,
      tipo: "HD",
      nombre: "Teleantioquia HD",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5JYJOD3JTeyc3H4dKeoUFi/7a8f258880805fdf8a8bfc28aef0633b/ic-canal-teleantioquia.svg"
    },
    {
      id: 90,
      canal: 211,
      tipo: "HD",
      nombre: "Cosmovisión HD",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6UuKmLL9oq1jXcXsRneLN8/d08dea6f409cea00069bdac532a19b6d/ic-canal-cosmovision.svg"
    },
    {
      id: 91,
      canal: 216,
      tipo: "HD",
      nombre: "Telemedellin HD",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6Ne59Qhjjf9IelaXKkzVrD/25c113f63390dab5a1ceca8688421408/Pag_Web_40_x_40_px.png?q=70&fm=avif"
    },
    {
      id: 92,
      canal: 217,
      tipo: "HD",
      nombre: "Tele VID HD",
      genero: "Colombiano",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6WKvUCZ82JDw4PkXF1gfLc/ddde3485e7469592b08fdf8769fb1c60/ic-canal-tele-vid.svg"
    },
    {
      id: 93,
      canal: 218,
      tipo: "HD",
      nombre: "TVFamilia HD",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co45kxZfHuNnJ4z2MDjq4SRL/8a2a238a62cccd2b5fab71f348116f1c/ic-canal-tv-familia.svg"
    },
    {
      id: 94,
      canal: 220,
      tipo: "HD",
      nombre: "Nickelodeon HD",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/400J14uqkIfTgUBQNGkWws/45aacbd0eb3a349a5d6b991e96521d3d/Nickelodeon.png?q=70&fm=avif"
    },
    {
      id: 95,
      canal: 221,
      tipo: "HD",
      nombre: "Discovery Kids HD",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6gsIwv6YoNIL71xFxKwBv/518f3ae2e34030ee7bdd778f7c68fbff/ic-canal-discovery-kids.png?q=70&fm=avif"
    },
    {
      id: 96,
      canal: 222,
      tipo: "HD",
      nombre: "Disney HD",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5iCjDVCV7G8uRjoYxCmwso/d1ec74150d9f78e1e35739c0640db630/ic-canal-disney-channel.png?q=70&fm=avif"
    },
    {
      id: 97,
      canal: 223,
      tipo: "HD",
      nombre: "DreamWorks HD",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/6P0uJt1JcsE8kNTwnLgomm/271e7ab917fd5d5d7903dd920eb47465/DreamWorks_SD_y_HD_LogoPa__ginaWeb_40x40.png?q=70&fm=avif"
    },
    {
      id: 98,
      canal: 224,
      tipo: "HD",
      nombre: "ZooMoo HD",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/cos0aRlvZnKvasQyxusjpUc/2b66668ddb36c0e70b23e8a6d4eb9994/ic-canal-zoomoo.png?q=70&fm=avif"
    },
    {
      id: 99,
      canal: 225,
      tipo: "HD",
      nombre: "Disney Jr. HD",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co79iMSUUR4CnmS266dN2Uyx/9a1f66c8c77e905da5099e427f537d31/ic-canal-disney-jr.png?q=70&fm=avif"
    },
    {
      id: 100,
      canal: 228,
      tipo: "HD",
      nombre: "Cartoon Network HD",
      genero: "Infantil",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1hOhMBs7olm1wVRwzjrErd/13d672b14228af6dcd9f47a2734f0f99/ic-canal-cartoon-network-hd.png?q=70&fm=avif"
    },
    {
      id: 101,
      canal: 240,
      tipo: "HD",
      nombre: "WIN Sports HD",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3Xf9Sir3mqOCcWD2xpXlSg/9e9883d046c228d103eead443a89ed89/ic-canal-win-sports.svg"
    },
    {
      id: 102,
      canal: 241,
      tipo: "HD",
      nombre: "ESPN HD",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co78Qi49NmL1IiO8OEjcjYFw/0db9916ae6dfef777e9387657540ff03/ic-canal-espn-hd.png?q=70&fm=avif"
    },
    {
      id: 103,
      canal: 242,
      tipo: "HD",
      nombre: "ESPN 2 HD",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3EGb7ZnD7pBxFloeTWJxqy/e54dac16e0c46b56d7a6a92ae2ec7cc4/ic-canal-espn2-hd.png?q=70&fm=avif"
    },
    {
      id: 104,
      canal: 243,
      tipo: "HD",
      nombre: "ESPN 3 HD",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6OZlJkiJO71zZaSiN6kJJr/3bcdf779948cacc59c7460b422906774/ic-canal-espn3-hd.png?q=70&fm=avif"
    },
    {
      id: 105,
      canal: 244,
      tipo: "HD",
      nombre: "ESPN 4 HD",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co5fm6wAG6Vhh6fYo4WWbc2v/a8cb5ff54365104a0c173bd5c6ca345c/ESPN4.png?q=70&fm=avif"
    },
    {
      id: 106,
      canal: 247,
      tipo: "HD",
      nombre: "ESPN 7 HD",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/QPLwkZIAzFlohFDhbKxYd/a7d670d73a1508e945f0b5b04bdec021/ESPN7_40x40px.png?q=70&fm=avif"
    },
    {
      id: 107,
      canal: 250,
      tipo: "HD",
      nombre: "TyC Sports HD ",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/1CmE0x23tI3wqdPLPczeox/0f2dcfb423ce685f14e373534f28c1dc/TyC_Sports_HD.png?q=70&fm=avif"
    },
    {
      id: 108,
      canal: 252,
      tipo: "HD",
      nombre: "PX Sports HD",
      genero: "Deportes",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6whY35hrAi7Bkkes1M1bls/103de396478f3fc7d8f19c6abf50a0c9/ic-canal-px-sports.png?q=70&fm=avif"
    },
    {
      id: 109,
      canal: 261,
      tipo: "HD",
      nombre: "Discovery H&H HD",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/5It996ihg3cBPyP0B75R9U/b327fc38dd2a781d85b3d6a24a0fb04b/H_H_40x40px.png?q=70&fm=avif"
    },
    {
      id: 110,
      canal: 263,
      tipo: "HD",
      nombre: "Animal Planet HD",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4eHe490tUS8SP81dr4icD5/6e9b68be011a0442617271743245c7a6/ic-canal-animal-planet.png?q=70&fm=avif"
    },
    {
      id: 111,
      canal: 264,
      tipo: "HD",
      nombre: "Discovery Channel HD",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1Orfczu9yCAWMF2pMH5qlF/4b2a690fd10d13f25e627efdebe81bf8/ic-canal-discovery-channel.png?q=70&fm=avif"
    },
    {
      id: 112,
      canal: 267,
      tipo: "HD",
      nombre: "History Channel HD",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2eyO3EPGXuSVQSIfIW2OCA/ec523e24f625bde944bc8616bf55836d/ic-canal-history.png?q=70&fm=avif"
    },
    {
      id: 113,
      canal: 268,
      tipo: "HD",
      nombre: "Love Nature HD",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7kP3NpiJTy278ENx8O3NPQ/692319fd088d84131ac633596b4a2c65/ic-canal-love-nature.png?q=70&fm=avif"
    },
    {
      id: 114,
      canal: 272,
      tipo: "HD",
      nombre: "Discovery Turbo HD",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6ldLwqJgt0mQTADKqnHqK6/5b2c977b9bda4073d353298397308e8f/ic-canal-turbo.png?q=70&fm=avif"
    },
    {
      id: 115,
      canal: 273,
      tipo: "HD",
      nombre: "Film & Arts HD",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3jDERpPsaHVffgrqKwYO2w/b663d0fbac2b61783957968725964383/ic-canal-film-arts.png?q=70&fm=avif"
    },
    {
      id: 116,
      canal: 274,
      tipo: "HD",
      nombre: "H2 HD",
      genero: "Cultural",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1yFHegLNsvHUaZRPqyesDh/254242624ef8b1418d02361421c5c160/ic-canal-h2.svg"
    },
    {
      id: 117,
      canal: 281,
      tipo: "HD",
      nombre: "Universal HD",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2lD1Cgpk2B6HH7IhyFZMFA/00096f8ba500830ea000c645ff60f69e/ic-canal-universal-hd.png?q=70&fm=avif"
    },
    {
      id: 118,
      canal: 282,
      tipo: "HD",
      nombre: "Sony Movies HD",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/5mnMq4623KYWEJtJMhDhPZ/1c985bb791fe8b78c642b8d04f6215c0/Sony_Movies_SD_HD_p__gina_web_40x40px.png?q=70&fm=avif"
    },
    {
      id: 119,
      canal: 283,
      tipo: "HD",
      nombre: "TNT HD",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1ixHhDqT5gjrIVpp9TUgoi/44d60c2885f5ae09d7e361e4ae398b7d/ic-canal-tnt-hd.png?q=70&fm=avif"
    },
    {
      id: 120,
      canal: 284,
      tipo: "HD",
      nombre: "Space HD",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co3VGmGgxylkdtB3fPhIwMbm/87afa292769986e4f0d14e0f06166f9e/ic-canal-space-hd.png?q=70&fm=avif"
    },
    {
      id: 121,
      canal: 287,
      tipo: "HD",
      nombre: "Paramount HD",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1UFA84BpGaBv72rFztSuEv/9a246065f05d3a88a3b4f7ade05925c9/ic-canal-paramount-channel.png?q=70&fm=avif"
    },
    {
      id: 122,
      canal: 288,
      tipo: "HD",
      nombre: "DHE HD",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/7nPugjlUMus38srt0rgORN/ef402138135879811322af511f2e968b/DHE_HD.png?q=70&fm=avif"
    },
    {
      id: 123,
      canal: 290,
      tipo: "HD",
      nombre: "AMC HD",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7vIDCo9DolCEBCoGXsY2to/8c04f6e67bb6c8a6e6fdfe5bf107fe12/ic-canal-amc.png?q=70&fm=avif"
    },
    {
      id: 124,
      canal: 291,
      tipo: "HD",
      nombre: "Studio Universal HD",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4ctnYyKEBpBNFWMBOqfXbA/4caa96cff333507ee1e7c12a9434a151/ic-canal-studio-universal-hd.png?q=70&fm=avif"
    },
    {
      id: 125,
      canal: 300,
      tipo: "HD",
      nombre: "Investigation Discovery HD",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/coeQrK8baQzklRkZch6LDIz/6bcd85583ec9f42698670e7b1ee4410c/ic-canal-id.png?q=70&fm=avif"
    },
    {
      id: 126,
      canal: 302,
      tipo: "HD",
      nombre: "SONY Channel HD",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/7oiPB6u7cJjPhRXBVYazIz/cee92ce3836a0981a56aa48a4bc9395c/Sony_Channel.png?q=70&fm=avif"
    },
    {
      id: 127,
      canal: 303,
      tipo: "HD",
      nombre: "WARNER HD",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/co540nmryyY9YP2MiYp7o9rW/7a64a44f9c811119607422643ca84608/ic-canal-warner-channel.png?q=70&fm=avif"
    },
    {
      id: 128,
      canal: 304,
      tipo: "HD",
      nombre: "A & E HD",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7CyDkXdxpu39UwkHnrJChl/d033ea9ab5f31e234938dda931971a70/ic-canal-ae-hd.png?q=70&fm=avif"
    },
    {
      id: 129,
      canal: 305,
      tipo: "HD",
      nombre: "AXN HD",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/co4FAUV7EqvbhcbF3aPxiVhY/d5a11177b406a8a37f385e0c65f1b7ca/ic-canal-axn-hd.png?q=70&fm=avif"
    },
    {
      id: 130,
      canal: 309,
      tipo: "HD",
      nombre: "Lifetime HD",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/co41RPlaIAKX0o3tm3uU54tq/8ed307877032891270d6148380125604/ic-canal-lifetime.svg"
    },
    {
      id: 131,
      canal: 310,
      tipo: "HD",
      nombre: "Usa HD",
      genero: "Series",
      img: "https://images.tigocloud.net/j1bxozgharz5/1OAbli0DiU3UmFOWav3kbG/455b91510e862bba9f1d08e5fb2614c6/USA.jpg?q=70&fm=avif"
    },
    {
      id: 132,
      canal: 321,
      tipo: "HD",
      nombre: "MTV00s HD",
      genero: "Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6NP1cKq4Caa3PUeQ0CRtxi/d2ac2a8fbe94cc4d7202d29bd2c394e9/MTV00s.png?q=70&fm=avif"
    },
    {
      id: 133,
      canal: 339,
      tipo: "HD",
      nombre: "GUSTO TV ",
      genero: "Especializado",
      img: "https://images.tigocloud.net/j1bxozgharz5/6roRnUj6mAQOdBYbFONq9t/4696b1cb57f994be6eaf5c6441e28628/gustotv_40x40_png.png?q=70&fm=avif"
    },
    {
      id: 134,
      canal: 342,
      tipo: "HD",
      nombre: "Gourmet HD",
      genero: "Especializado",
      img: "https://images.tigocloud.net/j1bxozgharz5/74J1c3ANbKo3lYdVLBZsjz/102ba094a978c99cee892b275031be11/El_Gourmet.png?q=70&fm=avif"
    },
    {
      id: 135,
      canal: 343,
      tipo: "HD",
      nombre: "Bloomberg HD",
      genero: "Especializado",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2ZCWY872f52C9Ek84D439c/59b45762169b8340abe174849d61f6c0/ic-canal-bloomberg.png?q=70&fm=avif"
    },
    {
      id: 136,
      canal: 344,
      tipo: "HD",
      nombre: "E! Entertainmet HD",
      genero: "Especializado",
      img: "https://images.tigocloud.net/j1bxozgharz5/coga4EVrg0iqYaoB5jQDQ23/1af11fa8f2a16ef374bf03f872502128/ic-canal-e.png?q=70&fm=avif"
    },
    {
      id: 137,
      canal: 360,
      tipo: "HD",
      nombre: "LAS ESTRELLAS HD",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co58tKot0HP9xOm44fd6Qrgl/21aa58d8c07eba27538fae0acf04ecd0/ic-canal-las-estrellas.png?q=70&fm=avif"
    },
    {
      id: 138,
      canal: 361,
      tipo: "HD",
      nombre: "Kanal D Drama HD",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6fr1lCP2Ylo0MoMvLVcNU7/c8a2ad3bc184d8d99cac11ddf8b3ee2d/ic-canal-D-Drama.png?q=70&fm=avif"
    },
    {
      id: 139,
      canal: 366,
      tipo: "HD",
      nombre: "Más Chic HD",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/co6OnfS4mtV0wVd47l6SDQru/53c615e72128a6b955152eab5caa3fe8/ic-canal-mas-chic.png?q=70&fm=avif"
    },
    {
      id: 140,
      canal: 367,
      tipo: "HD",
      nombre: "Telemundo HD",
      genero: "Variedades",
      img: "https://images.tigocloud.net/j1bxozgharz5/cohKK7JGtVoxK4bMs3O7vN2/3d10ac0422e7d6475eb92671c38be445/ic-canal-telemundo.svg"
    },
    {
      id: 141,
      canal: 520,
      tipo: "SD",
      nombre: "MTV Hits",
      genero: "Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co2Gtzv2XnLDAiruttOQD1z1/0238c0097437f5276674487da90c688e/ic-canal-mtv-hits.jpeg?q=70&fm=avif"
    },
    {
      id: 142,
      canal: 521,
      tipo: "SD",
      nombre: "Paramount",
      genero: "Cine",
      img: "https://images.tigocloud.net/j1bxozgharz5/co1UFA84BpGaBv72rFztSuEv/9a246065f05d3a88a3b4f7ade05925c9/ic-canal-paramount-channel.png?q=70&fm=avif"
    },
    {
      id: 143,
      canal: 600,
      tipo: "Audio",
      nombre: "Clásicos para todos",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 144,
      canal: 601,
      tipo: "Audio",
      nombre: "Ópera Plus",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 145,
      canal: 602,
      tipo: "Audio",
      nombre: "Maestros del Clásico",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 146,
      canal: 603,
      tipo: "Audio",
      nombre: "Sólo para Peques",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 147,
      canal: 604,
      tipo: "Audio",
      nombre: "New Age",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 148,
      canal: 605,
      tipo: "Audio",
      nombre: "El Salón Chill",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 149,
      canal: 606,
      tipo: "Audio",
      nombre: "Cocktail Lounge",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 150,
      canal: 607,
      tipo: "Audio",
      nombre: "Maestros del Jazz",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 151,
      canal: 608,
      tipo: "Audio",
      nombre: "Jazz Latino",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 152,
      canal: 609,
      tipo: "Audio",
      nombre: "Blues",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 153,
      canal: 610,
      tipo: "Audio",
      nombre: "Big Band",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 154,
      canal: 611,
      tipo: "Audio",
      nombre: "Popular Brasil",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 155,
      canal: 612,
      tipo: "Audio",
      nombre: "Éxitos de Brasil",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 156,
      canal: 613,
      tipo: "Audio",
      nombre: "Rock de Brasil",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 157,
      canal: 614,
      tipo: "Audio",
      nombre: "Música del Mundo",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 158,
      canal: 615,
      tipo: "Audio",
      nombre: "Latin Lounge",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 159,
      canal: 616,
      tipo: "Audio",
      nombre: "Euro Hits",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 160,
      canal: 617,
      tipo: "Audio",
      nombre: "Latino Tropical",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 161,
      canal: 618,
      tipo: "Audio",
      nombre: "Reggaetón",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 162,
      canal: 619,
      tipo: "Audio",
      nombre: "Jammin Reggae",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 163,
      canal: 620,
      tipo: "Audio",
      nombre: "Pop Latino Actual",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 164,
      canal: 621,
      tipo: "Audio",
      nombre: "Salsa y Merengue",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 165,
      canal: 622,
      tipo: "Audio",
      nombre: "Sesiones Dancehall",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 166,
      canal: 623,
      tipo: "Audio",
      nombre: "Viva México",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 167,
      canal: 624,
      tipo: "Audio",
      nombre: "Tango",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 168,
      canal: 625,
      tipo: "Audio",
      nombre: "Samba y Pagode",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 169,
      canal: 626,
      tipo: "Audio",
      nombre: "Mariachi Para Siempre",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 170,
      canal: 627,
      tipo: "Audio",
      nombre: "Años 70",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 171,
      canal: 628,
      tipo: "Audio",
      nombre: "Años 80",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 172,
      canal: 629,
      tipo: "Audio",
      nombre: "Años 90",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 173,
      canal: 630,
      tipo: "Audio",
      nombre: "Pop Adulto",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 174,
      canal: 631,
      tipo: "Audio",
      nombre: "Éxitos de Italia",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 175,
      canal: 632,
      tipo: "Audio",
      nombre: "Viejitas pero Buenísimas",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 176,
      canal: 633,
      tipo: "Audio",
      nombre: "Silk (Canciones de Amor)",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 177,
      canal: 634,
      tipo: "Audio",
      nombre: "Clásicos del Soul y el Rhythm and Blues",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 178,
      canal: 635,
      tipo: "Audio",
      nombre: "Éxitos de las Américas",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 179,
      canal: 636,
      tipo: "Audio",
      nombre: "Música Ligera",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 180,
      canal: 637,
      tipo: "Audio",
      nombre: "Club de Baile",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 181,
      canal: 638,
      tipo: "Audio",
      nombre: "Clásicos del \"Dance\"",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 182,
      canal: 639,
      tipo: "Audio",
      nombre: "Rompepistas",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 183,
      canal: 640,
      tipo: "Audio",
      nombre: "Romance Latino",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 184,
      canal: 641,
      tipo: "Audio",
      nombre: "Popcorn",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 185,
      canal: 642,
      tipo: "Audio",
      nombre: "Éxitos Recientes",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 186,
      canal: 643,
      tipo: "Audio",
      nombre: "Fiesta Continua",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 187,
      canal: 644,
      tipo: "Audio",
      nombre: "Estándares",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 188,
      canal: 645,
      tipo: "Audio",
      nombre: "Rock Alternativo",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 189,
      canal: 646,
      tipo: "Audio",
      nombre: "Hard Rock",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 190,
      canal: 647,
      tipo: "Audio",
      nombre: "Rock en Español",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 191,
      canal: 648,
      tipo: "Audio",
      nombre: "Himnos del Rock",
      genero: "Audio Musical",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    },
    {
      id: 192,
      canal: 649,
      tipo: "Audio",
      nombre: "Clásicos Indie",
      genero: "Audio Musica",
      img: "https://images.tigocloud.net/j1bxozgharz5/co7HIOMvLNCnJ6T6AETCRMKc/886ba0457934e7cb08f8f02a8906ecf9/ic-canal-music.png?q=70&fm=avif"
    }
  ]

  return (
    <div className='pageTigoEspecialH'>
      <h3>Con el plan <span>Tigo Especial</span> puedes disfrutar el contenido de los siguientes canales:</h3>
      <div className='pageTigoEspecialH-canales'>
        {tigoEspecialHfc.map(especial =>(
          <CardCanal
          key = {especial.id}
          canal = {especial.canal}
          tipo = {especial.tipo}
          nombre = {especial.nombre}
          genero = {especial.genero}
          img = {especial.img}
          />
        ))}
      </div>
    </div>
  )
}

export default TigoEspecialH