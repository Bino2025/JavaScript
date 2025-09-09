const fetchData = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("data loaded");
        }, 3000); // wait for 3s until the promise is resolved
    });
};

const getData = async () => {
    console.log("start");
    const result = await fetchData();
    console.log(result);
    console.log("end");
};

getData();
