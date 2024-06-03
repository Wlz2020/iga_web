import ImgTeacherBrad from '@/assets/image/about/teacher5.jpg'
import ImgTeacherLauran from '@/assets/image/about/teacher.jpg'
import ImgTeacherLuo from '@/assets/image/about/teacher2.jpg'
import ImgTeacherYYJ from '@/assets/image/about/teacher3.jpg'
import ImgTeacherAlex from '@/assets/image/about/teacher4.jpg'
import ImgTeacherEric from '@/assets/image/about/teacher6.jpg'
import ImgTeacherJonathan from '@/assets/image/about/teacher7.jpg'
import ImgTeacherLisurt from '@/assets/image/about/teacher8.jpg'
import ImgTeacherFreddy from '@/assets/image/about/teacher9.jpg'

export const levels = Object.freeze({
  Supervisor: 'Supervisor',
  Tutor: 'Tutor'
})

export const teacherNames = Object.freeze({
  Brad: 'Brad',
  Lauran: 'Lauran',
  Luo: '罗老师',
  YYJ: 'YYJ',
  Alex: 'Alex',
  Eric: 'Eric',
  Jonathan: 'Jonathan',
  Lisurt: 'Lisurt',
  Freddy: 'Freddy'
})

export const teamList = Object.freeze([
  {
    img: ImgTeacherBrad,
    title: '纽约大学游戏设计硕士',
    subTitle: '清华美院平面设计学士',
    desc: '负责作品集项目规划/审核，游戏/交互项目指导，游戏设计/制作教学。有着数百个名校成功申请案例，同时是独立游戏制作人，为人教学严谨，因材施教。',
    name: teacherNames.Brad,
    level: levels.Supervisor
  },
  {
    img: ImgTeacherLauran,
    title: '提赛德大学 概念艺术',
    subTitle: '学士/硕士（Distinction)',
    desc: '电子游戏项目指导，Unity/GMS/Arduino/C#/C++教学 曾就职于「字节跳动」负责流媒体平台的设计研究抖音，用户常用的流媒体平台的结构层设计，分析数据绘制框架层设计。',
    name: teacherNames.Lauran,
    level: levels.Tutor
  },
  {
    img: ImgTeacherLuo,
    title: '曼彻斯特大学： 环境科学本科/提赛德大学',
    subTitle: '游戏设计硕士',
    desc: '负责游戏策划/电子游戏项目指导，UE4等教学，游戏策划领域有深度研究，擅长游戏背后的设计思考，热爱团队合作，富有责任心。腾讯天美工作室群 战斗策划。',
    name: teacherNames.Luo,
    level: levels.Tutor
  },
  {
    img: ImgTeacherYYJ,
    title: '莱斯特大学：会计与金融学',
    subTitle: '硕士',
    desc: '负责留学申请指导，签证/入读指导。从事留学行业5年，丰富的海外生活经验。为人乐观开朗，与学生没有距离感。擅长挖掘学生潜在特质，解决疑难case。曾帮助超低GPA2.1逆袭拿到皇艺硕士直录。',
    name: teacherNames.YYJ,
    level: levels.Supervisor
  },
  {
    img: ImgTeacherAlex,
    title: '伦敦艺术大学： 游戏设计',
    subTitle: '硕士',
    desc: '电子游戏项目指导，Unity/GMS/Arduino/C#/C++教学。曾就职于「字节跳动」负责流媒体平台的设计研究抖音，用户常用的流媒体平台的结构层设计，分析数据绘制框架层设计。\n',
    name: teacherNames.Alex,
    level: levels.Tutor
  },
  {
    img: ImgTeacherEric,
    title: '伦敦艺术大学： 游戏设计',
    subTitle: '硕士',
    desc: '独角兽/孵化器项目指导，自研游戏开发。全栈游戏开发者，有丰富的独立游戏开发经验。电子游戏项目指导，Unity/GMS/Arduino/C#/C++教学。',
    name: teacherNames.Eric,
    level: levels.Supervisor
  },
  {
    img: ImgTeacherJonathan,
    title: '纽约大学：哲学/经济学专业',
    subTitle: '（双学位）美籍导师',
    desc: '负责留学申请规划/审核，创意文书指导。有着数百个名校成功申请案例。曾作为顶尖留学公司英美申请总负责人，为人兢兢业业，善于激发学生灵感。',
    name: teacherNames.Jonathan,
    level: levels.Supervisor
  },
  {
    img: ImgTeacherLisurt,
    title: '伦敦艺术学院：插画 学士 （一等荣誉学位）',
    subTitle: '金斯顿大学：插画 硕士 （一等荣誉学位）',
    desc: '桌游/美术项目指导，2D美术/概念设计教学。桌游/美术项目指导，2D美术/概念设计教学。伦敦弗洛伊博物馆 -受邀策展',
    name: teacherNames.Lisurt,
    level: levels.Tutor
  },
  {
    img: ImgTeacherFreddy,
    title: '明尼苏达大学德卢斯分校 纯艺学士',
    subTitle: '萨凡纳艺术设计学院 插画硕士',
    desc: '独立游戏美术指导，2D&3D概念美术设计/UE5/游戏场景与人物，独立游戏设计及插画师。6年多行业经验参与制作众多上线独立游戏：Ink，KOKO ALONE，宇宙求助热线，坏脾气马克，木山今等。',
    name: teacherNames.Freddy,
    level: levels.Tutor
  }
])
