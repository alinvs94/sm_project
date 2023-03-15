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

  const USERS = usersArray ? usersArray : [];

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
