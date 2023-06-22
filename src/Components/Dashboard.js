// import React from "react";
// import Login from "./Login";

// const Dashboard = ({loggedIn}) => {
//   return <div>{loggedIn ? "This is Dashboard" : <Login />}</div>;
// };

// export default Dashboard;
import React, { useState, useEffect } from 'react';
import img1 from '../assets/library-of-congress-zvL4T3Pum0g-unsplash.jpg'
const movielist = [
  {
      "_id": "5ce26565842db9428619496d",
      "director": [
          "Santhosh Ananddram"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "puneeth rajkumar"
      ],
      "releasedDate": 1617218999,
      "productionCompany": [
          ""
      ],
      "title": "Yuvarathnaa",
      "language": "Kannada",
      "runTime": null,
      "genre": "action,drama",
      "voted": [
          {
              "upVoted": [
                  "5e175e1d0638b447521cae98"
              ],
              "downVoted": [],
              "_id": "5ce26565842db9428619496f",
              "updatedAt": 1566905378,
              "genre": "action"
          },
          {
              "upVoted": [
                  "5e175e1d0638b447521cae98"
              ],
              "downVoted": [],
              "_id": "5ce26565842db9428619496e",
              "updatedAt": 1566905378,
              "genre": "drama"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1558340965271_Yuvarathnaa.jpg",
      "pageViews": 335,
      "description": "",
      "upVoted": [
          "6066b32b9de1c7591dac55dd",
          "6070a229315bc40c7d445944"
      ],
      "downVoted": [
          "6071243a315bc40c7d4459c7"
      ],
      "totalVoted": 3,
      "voting": 1
  },
  {
      "_id": "5e7059c93247fc29fe7f5580",
      "description": "",
      "director": [
          "Tarun Sudhir"
      ],
      "writers": [
          "Tarun Sudhir"
      ],
      "stars": [
          "Darshan Thoogudeep,Jagapathi Babu,Asha Bhat,Vinod Prabhakar"
      ],
      "productionCompany": [
          "Tarun Sudhir"
      ],
      "pageViews": 433,
      "upVoted": [
          "5fa16e812337772a083bef69",
          "604972e6f93686291dfc5c77",
          "604f32b82dbe6561a66b6d68"
      ],
      "downVoted": [
          "6071243a315bc40c7d4459c7"
      ],
      "title": "Roberrt",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1615404599,
      "genre": "action",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e7059c93247fc29fe7f5581",
              "updatedAt": 1584421321,
              "genre": "action"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1584421321076_Roberrt.jpg",
      "totalVoted": 4,
      "voting": 2
  },
  {
      "_id": "6047813c71513613cb5e222d",
      "description": "",
      "director": [
          "Narasimha"
      ],
      "writers": [
          "Guru Kashyap"
      ],
      "stars": [
          "Bhavana,Darshan,Prajwal Devaraj,Pradeep Doddaiah"
      ],
      "productionCompany": [
          "Guru Kashyap"
      ],
      "pageViews": 136,
      "upVoted": [
          "604781a771513613cb5e2236",
          "6047819371513613cb5e2234",
          "604c3e2c2dbe6561a66b6cc4"
      ],
      "downVoted": [
          "6071243a315bc40c7d4459c7"
      ],
      "title": "Inspector Vikram",
      "language": "Kannada",
      "runTime": 159,
      "releasedDate": 1612466999,
      "genre": "action",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "6047813c71513613cb5e222e",
              "updatedAt": 1615298876,
              "genre": "action"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1615298876928_Inspector_Vikram.jpg",
      "totalVoted": 4,
      "voting": 2
  },
  {
      "_id": "5d9448106e6974498e97e844",
      "description": "",
      "director": [
          "Prashanth Neel"
      ],
      "writers": [
          "Prashanth Neel"
      ],
      "stars": [
          "Sanjay Dutt,Raveena Tandon,Yash,Srinidhi Shetty"
      ],
      "productionCompany": [
          "Prashanth Neel"
      ],
      "pageViews": 188,
      "upVoted": [],
      "downVoted": [],
      "title": "K.G.F: Chapter 2",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1601580599,
      "genre": "action,drama",
      "voted": [
          {
              "upVoted": [
                  "5fe18f0e2337772a083bf60f"
              ],
              "downVoted": [],
              "_id": "5d9448106e6974498e97e846",
              "updatedAt": 1569998864,
              "genre": "action"
          },
          {
              "upVoted": [
                  "5e1d4475416a070ee7add99c",
                  "5fe18f0e2337772a083bf60f"
              ],
              "downVoted": [],
              "_id": "5d9448106e6974498e97e845",
              "updatedAt": 1569998864,
              "genre": "drama"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1569998864699_K.G.F:_Chapter 2.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e7069c83247fc29fe7f55b1",
      "description": "",
      "director": [
          "Rana Sunil Kumar Singh"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Vaibhavi Joshi,Rajesh Nataranga,Srinivas Prabhu,Arvind Rau"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 435,
      "upVoted": [
          "5e5e1bcdb57a766c57b2c451"
      ],
      "downVoted": [],
      "title": "Www.Meenabazar.,",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1584646199,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e7069c83247fc29fe7f55b2",
              "updatedAt": 1584425416,
              "genre": "drama"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1584425416478_Www.Meenabazar.,.jpg",
      "totalVoted": 1,
      "voting": 1
  },
  {
      "_id": "5e65cbee6f8b393aca0ca2e4",
      "description": "",
      "director": [
          "Vikram Yoganand"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Guruprasad,Chandu Gowda,Kailash Pal"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 480,
      "upVoted": [
          "5e782aaf82a1d60c67ecd4a6"
      ],
      "downVoted": [],
      "title": "Kushka",
      "language": "Kannada",
      "runTime": 122,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e65cbee6f8b393aca0ca2e5",
              "updatedAt": 1583729646,
              "genre": "drama"
          }
      ],
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1583729863157_70022372.jpg",
      "releasedDate": 1584041399,
      "totalVoted": 1,
      "voting": 1
  },
  {
      "_id": "5e65d02c6f8b393aca0ca308",
      "description": "",
      "director": [
          "Dore Raj Teja"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Supreem,Asha,Kavya"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 503,
      "upVoted": [
          "5e782aaf82a1d60c67ecd4a6"
      ],
      "downVoted": [],
      "title": "Ambani Putra",
      "language": "Kannada",
      "runTime": null,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e65d02c6f8b393aca0ca309",
              "updatedAt": 1583730732,
              "genre": "drama"
          }
      ],
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1583730898323_IMG-20200219-WA0140.jpg",
      "releasedDate": 1584041399,
      "totalVoted": 1,
      "voting": 1
  },
  {
      "_id": "5e5c913ca587862e1b597c18",
      "description": "",
      "director": [
          "Pramod Chakravarthi"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Shivarajkumar,Rangayana Raghu"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 426,
      "upVoted": [
          "5e6779066f8b393aca0cbd69"
      ],
      "downVoted": [],
      "title": "Drona",
      "language": "Kannada",
      "runTime": null,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e5c913ca587862e1b597c19",
              "updatedAt": 1583124796,
              "genre": "drama"
          }
      ],
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1583124864967_drona-20190903173036-4083.jpg",
      "releasedDate": 1583436599,
      "totalVoted": 1,
      "voting": 1
  },
  {
      "_id": "5cdea3fcc5cdee1bf917dbc6",
      "director": [
          " Radhakrishna Reddy"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Prakash Raj,Raj B. Shetty,Vasishta N. Simha,Achyuth Kumar"
      ],
      "releasedDate": 1582831799,
      "productionCompany": [
          ""
      ],
      "title": "Mayabazaar 2016",
      "language": "Kannada",
      "runTime": null,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5cdea3fcc5cdee1bf917dbc7",
              "updatedAt": 1566647798,
              "genre": "drama"
          }
      ],
      "pageViews": 420,
      "description": "",
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1582549586018_mayabazar2016-20200217110337-17046.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e53c9925bf4cf14f67006c0",
      "description": "",
      "director": [
          "Hari Santhosh"
      ],
      "writers": [
          "B.L. Venu"
      ],
      "stars": [
          "Raja Varadhan,Hariprriya,Prabhakar,Sparsha Rekha"
      ],
      "productionCompany": [
          "B.L. Venu"
      ],
      "pageViews": 259,
      "upVoted": [],
      "downVoted": [],
      "title": "Bicchugatthi Chapter 1",
      "language": "Kannada",
      "runTime": 141,
      "releasedDate": 1582831799,
      "genre": "action,thriller",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e53c9925bf4cf14f67006c2",
              "updatedAt": 1582549394,
              "genre": "action"
          },
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e53c9925bf4cf14f67006c1",
              "updatedAt": 1582549394,
              "genre": "thriller"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1582549394172_Bicchugatthi_Chapter 1.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e4cc4235bf4cf14f67001bc",
      "description": "",
      "director": [
          "Akash Srivatsa"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Ramesh Aravind,Avinash,Rohith Bhanuprakash,Radhika Narayan"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 462,
      "upVoted": [],
      "downVoted": [],
      "title": "Shivaji Surathkal",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1582226999,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e4cc4235bf4cf14f67001bd",
              "updatedAt": 1582089251,
              "genre": "drama"
          }
      ],
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1582089322387_74186309.jpeg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5cdec3b1c5cdee1bf917e07f",
      "director": [
          "Vinod Kumar. J"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Sruthi Hariharan,Chiranjeevi Sarja,Sangeetha Bhat"
      ],
      "releasedDate": 1582226999,
      "productionCompany": [
          ""
      ],
      "title": "Aadya",
      "language": "Kannada",
      "runTime": null,
      "genre": "thriller",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5cdec3b1c5cdee1bf917e080",
              "updatedAt": 1566897102,
              "genre": "thriller"
          }
      ],
      "pageViews": 432,
      "description": "",
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1582089694850_aadyaa-20200203114107-11964.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e4cc3655bf4cf14f67001b4",
      "description": "",
      "director": [
          "Raj Pandith"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Avinash,Kempegowda,Mayuri Kyatari,Nayana"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 249,
      "upVoted": [],
      "downVoted": [],
      "title": "Mounam",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1582226999,
      "genre": "family",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e4cc3655bf4cf14f67001b5",
              "updatedAt": 1582089061,
              "genre": "family"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1582089061061_Mounam.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e4cc2ec5bf4cf14f67001ac",
      "description": "",
      "director": [
          "Duniya Soori"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Niveditha,Dhananjay,Sapthami Gowda,Amrutha Iyengar"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 303,
      "upVoted": [
          "5e6779066f8b393aca0cbd69"
      ],
      "downVoted": [],
      "title": "Popcorn Monkey Tiger",
      "language": "Kannada",
      "runTime": 134,
      "releasedDate": 1582226999,
      "genre": "action,crime",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e4cc2ec5bf4cf14f67001ae",
              "updatedAt": 1582088940,
              "genre": "action"
          },
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e4cc2ec5bf4cf14f67001ad",
              "updatedAt": 1582088940,
              "genre": "crime"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1582088940401_Popcorn_Monkey Tiger.jpg",
      "totalVoted": 1,
      "voting": 1
  },
  {
      "_id": "5cdd54639ad53e1b08dd4544",
      "director": [
          "Raghu S P"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Ameeta Kulal,Renuk Mathode,Deeptii Mohan,Murali Gundanna"
      ],
      "releasedDate": 1581794999,
      "productionCompany": [
          ""
      ],
      "title": "Gift Box",
      "language": "Kannada",
      "runTime": 135,
      "genre": "drama,romance,thriller",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5cdd54639ad53e1b08dd4547",
              "updatedAt": 1566646717,
              "genre": "drama"
          },
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5cdd54639ad53e1b08dd4546",
              "updatedAt": 1566646717,
              "genre": "romance"
          },
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5cdd54639ad53e1b08dd4545",
              "updatedAt": 1566646717,
              "genre": "thriller"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1558008931541_Gift_Box.jpg",
      "pageViews": 309,
      "description": "",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e43ed865bf4cf14f66ffb63",
      "description": "Maduve Madri Sari Hogtane is an upcoming Kannada movie, written and directed by Gopi Kerur. The film stars ShivaChandra Kumar, Aradhya in the lead roles. The movie is produced by Shivrajkumar and Laxmanrao Desai.",
      "director": [
          "Gopi Kerur"
      ],
      "writers": [
          "Gopi Kerur"
      ],
      "stars": [
          "ShivaChandra Kumar,Aradhya"
      ],
      "productionCompany": [
          "Shivrajkumar and Laxmanrao Desai."
      ],
      "pageViews": 215,
      "upVoted": [],
      "downVoted": [],
      "title": "Madhuve Madri Sari Ogthane",
      "genre": "romance",
      "language": "Kannada",
      "releasedDate": 1581622199,
      "runTime": 120,
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1581510008816_download%20%284%29.jpg",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e43edb65bf4cf14f66ffb6b",
              "updatedAt": 1581510070,
              "genre": "romance"
          }
      ],
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e43cd9d5bf4cf14f66ffb53",
      "description": "",
      "director": [
          "Ravi Teja"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Master Ashik Arya,Gaddapa,Janvi Jyothi,Naveen Kumar"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 280,
      "upVoted": [],
      "downVoted": [],
      "title": "Saagutha Doora Doora",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1581622199,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e43cd9d5bf4cf14f66ffb54",
              "updatedAt": 1581501853,
              "genre": "drama"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1581501853899_Saagutha_Doora Doora.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e4638fb5bf4cf14f66ffd16",
      "description": "Gadappana Circle is a Kannada movie which stars Gaddappa, Abhishek, Sukanya, Century Gowda in the lead. The film is directed and produced by B R Keshava.",
      "director": [
          "B R Keshava"
      ],
      "writers": [
          "B R Keshava"
      ],
      "stars": [
          "Gaddappa, Abhishek, Sukanya, Century Gowda"
      ],
      "productionCompany": [
          "Sri Srinivas Cinemas"
      ],
      "pageViews": 192,
      "upVoted": [],
      "downVoted": [],
      "title": "Gadappana Circle",
      "genre": "drama",
      "language": "Kannada",
      "releasedDate": 1581622199,
      "runTime": 120,
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1581660408990_download%20%286%29.jpg",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e4639145bf4cf14f66ffd1c",
              "genre": "drama",
              "updatedAt": 1581660436
          }
      ],
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5de793c6c669bb3aebba5963",
      "description": "",
      "director": [
          "Prathap Raj"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Amith,Sharath Lohitashwa,Moksha,Prathap Raj"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 509,
      "upVoted": [
          "5de9e9f7c669bb3aebba5a21",
          "5cc29c10fdab38486281ae2a",
          "5de9ff42c669bb3aebba5b4d",
          "5de9ff42c669bb3aebba5b4f",
          "5de9ff42c669bb3aebba5b51",
          "5de9ff42c669bb3aebba5b53",
          "5de9ff42c669bb3aebba5b55",
          "5de9ff43c669bb3aebba5b57",
          "5de9ff43c669bb3aebba5b59",
          "5de9ff43c669bb3aebba5b5b",
          "5de9ff43c669bb3aebba5b5d",
          "5de9ff43c669bb3aebba5b5f",
          "5de9ff43c669bb3aebba5b61",
          "5de9ff44c669bb3aebba5b63",
          "5de9ff44c669bb3aebba5b65",
          "5de9ff44c669bb3aebba5b67",
          "5de9ff45c669bb3aebba5b69",
          "5de9ff45c669bb3aebba5b6b",
          "5de9ff45c669bb3aebba5b6d",
          "5de9ff45c669bb3aebba5b6f",
          "5de9ff45c669bb3aebba5b71",
          "5de9ff45c669bb3aebba5b73",
          "5de9ff46c669bb3aebba5b75",
          "5de9ff46c669bb3aebba5b77",
          "5dea04979b68db1858735c2b",
          "5deb513b467796395b7d2886",
          "5deb51c1467796395b7d2892",
          "5deb5178467796395b7d288c",
          "5deb53c0467796395b7d28ca",
          "5deb53c1467796395b7d28cc",
          "5deb53c2467796395b7d28ce",
          "5deb53c3467796395b7d28d0",
          "5deb53c5467796395b7d28d2",
          "5deb53c6467796395b7d28d4",
          "5deb53c6467796395b7d28d6",
          "5dedce9ca4c54d55de935da0",
          "5fa290d52337772a083bef6b",
          "61235bcea6eee93dad520b6a"
      ],
      "downVoted": [
          "5d8b360c14124c3611103a7a",
          "5deb51be467796395b7d2890",
          "5e4e0eb35bf4cf14f67002ce"
      ],
      "title": "Navarathna",
      "language": "Kannada",
      "runTime": 138,
      "releasedDate": 1581622199,
      "genre": "action",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5de793c6c669bb3aebba5964",
              "updatedAt": 1575457734,
              "genre": "action"
          }
      ],
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1575464895549_navaratna.jpg",
      "totalVoted": 41,
      "voting": 35
  },
  {
      "_id": "5e3943ff00c1141858b6890d",
      "description": "",
      "director": [
          "Jadesh Kumar"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Nishvika Naidu,Prajwal Devaraj"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 256,
      "upVoted": [
          "5e3d499000c1141858b68ba9",
          "5e3e732e00c1141858b68c4f",
          "5ea85557410d4019a49268ca"
      ],
      "downVoted": [],
      "title": "Gentleman",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1581017399,
      "genre": "action,drama,mystery,thriller",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e3943ff00c1141858b68911",
              "updatedAt": 1580811263,
              "genre": "action"
          },
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e3943ff00c1141858b68910",
              "updatedAt": 1580811263,
              "genre": "drama"
          },
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e3943ff00c1141858b6890f",
              "updatedAt": 1580811263,
              "genre": "mystery"
          },
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e3943ff00c1141858b6890e",
              "updatedAt": 1580811263,
              "genre": "thriller"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1580811263626_Gentleman.jpg",
      "totalVoted": 3,
      "voting": 3
  },
  {
      "_id": "5e39437d00c1141858b68905",
      "description": "",
      "director": [
          ""
      ],
      "writers": [
          "V. Nagendra Prasad"
      ],
      "stars": [
          "Avinash,Jagadeesh Nam,Roopika"
      ],
      "productionCompany": [
          "V. Nagendra Prasad"
      ],
      "pageViews": 246,
      "upVoted": [],
      "downVoted": [],
      "title": "3rd Class",
      "language": "Kannada",
      "runTime": 130,
      "releasedDate": 1581017399,
      "genre": "action",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e39437d00c1141858b68906",
              "updatedAt": 1580811133,
              "genre": "action"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1580811133939_3rd_Class.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5dc9593681e213068c540b15",
      "description": "",
      "director": [
          "K.S. Ashoka"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Pruthvi Amber,Kushi"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 433,
      "upVoted": [],
      "downVoted": [],
      "title": "Dia (Kannada)",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1581017399,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5dc9593681e213068c540b16",
              "updatedAt": 1573476662,
              "genre": "drama"
          }
      ],
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1573562447171_dia.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e2ee0974223f702691cdaae",
      "description": "",
      "director": [
          "Kishor Moodbidri"
      ],
      "writers": [
          "Kishor Moodbidri"
      ],
      "stars": [
          "Arjun Kapikad,Vidya Murthy,Vijay Raghavendra,Greeshma Sridhar"
      ],
      "productionCompany": [
          "Kishor Moodbidri"
      ],
      "pageViews": 347,
      "upVoted": [
          "5e3cd25700c1141858b68b72",
          "5e3d75c600c1141858b68bd8"
      ],
      "downVoted": [
          "5fa290d52337772a083bef6b"
      ],
      "title": "Malgudi Days (Kannada Film)",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1581017399,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e2ee0974223f702691cdaaf",
              "updatedAt": 1580130455,
              "genre": "drama"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1580130455035_Malgudi_Days (Kannada Film).jpg",
      "totalVoted": 3,
      "voting": 1
  },
  {
      "_id": "5e65cd216f8b393aca0ca2ed",
      "description": "",
      "director": [
          "Dhanakumar"
      ],
      "writers": [
          "Siddharth Mahesh"
      ],
      "stars": [
          "Raghu Dixit,Kamna Jethmalani,Srinagar Kitty,Adi Lokesh"
      ],
      "productionCompany": [
          "Siddharth Mahesh"
      ],
      "pageViews": 160,
      "upVoted": [],
      "downVoted": [],
      "title": "Garuda",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1580498999,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e65cd216f8b393aca0ca2ee",
              "updatedAt": 1583729953,
              "genre": "drama"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1583729953611_Garuda.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e2ebee64223f702691cda09",
      "description": "",
      "director": [
          "Darling Krishna"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Milana Nagaraj,Darling Krishna"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 357,
      "upVoted": [],
      "downVoted": [],
      "title": "Love Mocktail",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1580412599,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e2ebee64223f702691cda0a",
              "updatedAt": 1580121830,
              "genre": "drama"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1580121830113_Love_Mocktail.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e2ffb9c4223f702691cdd12",
      "description": "",
      "director": [
          "Abhishek Jain"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Aarva,Vijay Eshwar,Abhishek Jain,Anusha Rodrigues"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 336,
      "upVoted": [],
      "downVoted": [],
      "title": "Dinga",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1580412599,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e2ffb9c4223f702691cdd13",
              "updatedAt": 1580202908,
              "genre": "drama"
          }
      ],
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1580202946516_download%20%282%29.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e29570ae56a1f166b43a0f8",
      "description": "",
      "director": [
          "Shashikanth Gatti"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Prabhu Mundkur,Divya Uruduga"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 329,
      "upVoted": [],
      "downVoted": [],
      "title": "Ranchi",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1579807799,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e29570ae56a1f166b43a0f9",
              "updatedAt": 1579767562,
              "genre": "drama"
          }
      ],
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1579767613878_ranchi1123-et00114385-11-10-2019-11-12-48.jpg",
      "totalVoted": 0,
      "voting": 0
  },
  {
      "_id": "5e259cffe56a1f166b43970f",
      "description": "",
      "director": [
          "Nagathihalli Chandrashekar"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Lex Lamprey,Manvita Kamath,Vasishta N. Simha,Michael Austin"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 240,
      "upVoted": [
          "5e2da1aa4223f702691cd195"
      ],
      "downVoted": [],
      "title": "India vs England",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1579807799,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e259cffe56a1f166b439710",
              "updatedAt": 1579523327,
              "genre": "drama"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1579523327762_India_vs England.jpg",
      "totalVoted": 1,
      "voting": 1
  },
  {
      "_id": "5e259d87e56a1f166b43971a",
      "description": "",
      "director": [
          "Naviin Reddy B"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Tanya Hope,Chiranjeevi Sarja"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 289,
      "upVoted": [
          "5e2a72c2e56a1f166b43a64c",
          "5d2c08b397260761e58250fc",
          "5e2ff79a4223f702691cdcf2"
      ],
      "downVoted": [
          "61057102a6eee93dad51dc30"
      ],
      "title": "Khakii",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1579807799,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e259d87e56a1f166b43971b",
              "updatedAt": 1579523463,
              "genre": "drama"
          }
      ],
      "poster": "https://s3.ap-south-1.amazonaws.com/hoblist/movies/poster/1579523463151_Khakii.jpg",
      "totalVoted": 4,
      "voting": 2
  },
  {
      "_id": "5e259c7ee56a1f166b439707",
      "description": "",
      "director": [
          "Srinivas Thimmaiah"
      ],
      "writers": [
          ""
      ],
      "stars": [
          "Govinde Gowda,Samyuktha Hornadu,Shivaraj K.R. Pete"
      ],
      "productionCompany": [
          ""
      ],
      "pageViews": 357,
      "upVoted": [
          "5e2a72c2e56a1f166b43a64c",
          "5e1317300638b447521ca5a6",
          "5e05f9c40638b447521c9bc9",
          "5e2ff79a4223f702691cdcf2",
          "5d2c08b397260761e58250fc",
          "5fa16e812337772a083bef69"
      ],
      "downVoted": [
          "5e2bdeb34223f702691ccd33",
          "5fa290d52337772a083bef6b"
      ],
      "title": "Naanu Matthu Gunda",
      "language": "Kannada",
      "runTime": null,
      "releasedDate": 1579807799,
      "genre": "drama",
      "voted": [
          {
              "upVoted": [],
              "downVoted": [],
              "_id": "5e259c7ee56a1f166b439708",
              "updatedAt": 1579523198,
              "genre": "drama"
          }
      ],
      "poster": "https://hoblist.s3.ap-south-1.amazonaws.com/movies/poster/1579523236611_download%20%282%29.jpg",
      "totalVoted": 8,
      "voting": 4
  }
]

function Dashboard() {
  

  return (
    <div>
      {
        movielist && movielist.map((obj)=>(
        

        
        <div className="main_con">
      <div className="hero">
        <div className="hero1">
          <img src={obj.poster} alt="" />
        </div>
        <div className="hero2">
          <h6>{obj.title}</h6>
          <p>{obj.genre}</p>
          <p>{obj.director[0]}</p>
          <p>{obj.productionCompany[0]}</p>
         <p> Mins | English | 2 APr</p>
         <span>137 views | Voted by 1 People</span>
          </div>
      </div>
      <div className="butn">
        <button>Watch Trailer</button>
      </div>
      </div>
        
     
        ))
    }
     
    </div>
  );
}

export default Dashboard;
