import { useState, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../ProfilePage/assets/userProfile.jpg";

export const DataContext = createContext({});

export const AppData = ({ children }) => {
  const [data, setData] = useState([]);
  const [posts, setPosts] = useState([]);
  const [clickedUser, setclickedUser] = useState({});
  const [friendsNum, setFriendsNum] = useState();

  const alinUser = {
    gender: "male",
    userId: 1,
    name: { title: "Mr", first: "Alin", last: "Vasiliu" },
    location: {
      street: { number: 25, name: "Inculet" },
      city: "<Iasi>",
      state: "Northwest ",
      country: "Romania",
      postcode: "xxxxx",
      coordinates: { latitude: "-70.3078", longitude: "7.4370" },
      timezone: {
        offset: "+2:00",
        description: "Romania",
      },
    },
    email: "alin.vsl@example.com",
    login: {
      uuid: "bffd34a7-2502-4d01-b956-ea7e8ed761a9",
      username: "alinvs",
      password: "123456",
      salt: "xcl1bh8M",
      md5: "8d8d67b580fe790cda6ac0780602a37c",
      sha1: "9834d16c9d7c8884d42985374e6a5579a60e3451",
      sha256:
        "e9c4af5db327c9287b498d8117e298434f7d8a22a04434ef18d0197217c08927",
    },
    dob: { date: "1994-06-12T04:53:19.756Z", age: 28 },
    registered: { date: "2013-09-28T10:33:40.147Z", age: 2 },
    phone: "X84 J06-6682",
    cell: "I44 X21-7431",
    id: { name: "SIN", value: "500363700" },
    picture: {
      large: img,
      medium: img,
    },
    nat: "RO",
  };

  // Fetch user data

  useEffect(() => {
    try {
      fetch("https://randomuser.me/api/?results=700")
      .then(res => res.json())
      .then(res => {
        setData(prevState => {
          return prevState = res;
        })
      })
    } catch (error) {
      console.log(error)
    }
  }, []);

  // Create user array
  let userId = 1;

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

  USERS.unshift(alinUser);

  // Get user pictures

  const userPicArray = [];
  let pic;

  for (let i = 0; i < 9; i++) {
    pic = `https://picsum.photos/150/150?random=${i}`;
    userPicArray.push(pic);
  }

  // Get posts

  useEffect(() => {
    try {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((res) => {
          setPosts((prevState) => {
            return (prevState = res);
          });
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

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

  useEffect(() => {
    setFriendsNum((prevState) => {
      return (prevState = Math.floor(
        Math.random() * (USERS.length - 250) + 250
      ));
    });
  }, []);

  // Go to clicked user

  const navigate = useNavigate();

  function handleUser(user) {
    navigate("/user");
    setclickedUser((prevState) => {
      return (prevState = user);
    });
  }

  return (
    <DataContext.Provider
      value={{
        USERS,
        userPicArray,
        posts,
        randomNumbArray,
        friendsNum,
        handleUser,
        clickedUser,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
