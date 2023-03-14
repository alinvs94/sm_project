import { useState, createContext, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";

export const DataContext = createContext({});

export const AppData = ({ children }) => {
  const [data, setData] = useState([]);

  // Fetch Data

  useEffect(() => {
    async function fetchData(link) {
      try {
        const res = await fetch(link);
        const fetchedData = await res.json();
        setData((prevState) => {
          return (prevState = fetchedData);
        });
      } catch (error) {
        throw error;
      }
    }
    fetchData("https://randomuser.me/api/?results=700");
  }, []);

  let userId = 0;

  const usersArray =
    data.results &&
    data.results.map((user) => {
      userId += 1;
      return {
        ...user,
        userId: userId,
      };
    });

  const USERS = usersArray
    ? usersArray
    : [
        {
          gender: "male",
          name: { title: "Mr", first: "Malthe", last: "Petersen" },
          location: {
            street: { number: 6557, name: "Rønnevej" },
            city: "Lemvig",
            state: "Midtjylland",
            country: "Denmark",
            postcode: 48918,
            coordinates: { latitude: "-46.8841", longitude: "-82.4668" },
            timezone: { offset: "+9:30", description: "Adelaide, Darwin" },
          },
          email: "malthe.petersen@example.com",
          login: {
            uuid: "8ceaa756-d585-4051-a091-41a84eb508f3",
            username: "organicbird343",
            password: "1024",
            salt: "YwGuduej",
            md5: "4b829e12f985db614d758c4e0aecb3d9",
            sha1: "55376812af4c0f09f48d38fed4f169f1ba4f3e96",
            sha256:
              "8b74ac88c4da3d507f3efce905b10461d88f4f3199a21507626b81ddbf8e6a5e",
          },
          dob: { date: "1949-06-12T23:24:38.363Z", age: 73 },
          registered: { date: "2015-07-23T23:37:45.512Z", age: 7 },
          phone: "29730592",
          cell: "91763984",
          id: { name: "CPR", value: "120649-1532" },
          picture: {
            large: "https://randomuser.me/api/portraits/men/55.jpg",
            medium: "https://randomuser.me/api/portraits/med/men/55.jpg",
            thumbnail: "https://randomuser.me/api/portraits/thumb/men/55.jpg",
          },
          nat: "DK",
        },
      ];

  // Get user pictures

  const userPicArray = [];
  let pic;

  for (let i = 0; i < 9; i++) {
    pic = `https://picsum.photos/150/150?random=${i}`;
    userPicArray.push(pic);
  }

  // Get posts

  async function fetchPosts(link) {
    let fetchedPosts;
    try {
      const res = await fetch(link);
      fetchedPosts = await res.json();
    } catch (error) {
      throw error;
    }
    return fetchedPosts;
  }

  // Random user per Post

  const randomNumbArray = [];

  while (randomNumbArray.length < 31) {
    let randomNumberPostUser = Math.floor(
      Math.random() * (USERS.length - 1) + 1
    );
    if (randomNumbArray.indexOf(randomNumberPostUser === -1)) {
      randomNumbArray.push(randomNumberPostUser);
    }
  }

  // Random friends number

  const friendsNum = Math.floor(Math.random() * (USERS.length - 250) + 250);

  return (
    <DataContext.Provider
      value={{ USERS, userPicArray, fetchPosts, randomNumbArray, friendsNum }}
    >
      {children}
    </DataContext.Provider>
  );
};
