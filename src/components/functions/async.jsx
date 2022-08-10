const myAsyncFunction = async () => {
    const usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await usersResponse.json();
    const SecondUser = users[1];

    console.log(SecondUser);

    const postsResponse = await fetch('https://jsonplaceholder.typicode.com/posts?userId=' + SecondUser.id);

    const posts = await postsResponse.json();
    console.log(posts);
}