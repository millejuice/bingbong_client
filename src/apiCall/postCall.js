const method = "POST";

export async function register(data) {
    const response =  await fetch(
        `http://localhost:8080/api/members`,
        {
            method: method,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

// 데이터 요청 예시
// const data = {
//     name: "john_doe",
//     email: "john.doe@example.com",
//     kakaoKey: "000000",
//     childName: "peter"
// };
// register(data).then((response) => {
//     console.log(JSON.stringify(response));
// });

export async function createClassRoom(data) {
    const response =  await fetch(
        `http://localhost:8080/api/classRooms`,
        {
            method: method,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

// 데이터 요청 예시
// const data = {
//     "classRoomName":"1학년 3반 새싹반",
//     "description":"description example",
//     "groupCode":"1010",
//     "year":2023,
//     "teacherId":7
// };
// createClassRoom(data).then((response) => {
//     console.log(JSON.stringify(response));
// });

export async function joinClassRoom(data) {
    const response =  await fetch(
        `http://localhost:8080/api/classRoomMembers`,
        {
            method: method,
            withCredentials: true,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
    );
    const result = await response.json();
    return result;
}

// 데이터 요청 예시
// const data = {
//     "code":"1010",
//     "memberId":2
// };
// joinClassRoom(data).then((response) => {
//     console.log(JSON.stringify(response));
// });

/**
 * 개발 미완. 추후 테스트 필요
 * */
export async function reflectAnalytics(id) {
    const response =  await fetch(
        `http://localhost:8080/api/evaluations/${id}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

// 데이터 요청 예시
// reflectAnalytics(1).then((response) => {
//     console.log(JSON.stringify(response));
// });


/**
 * 개발 미완. 추후 테스트 필요
 * */
// export async function reflectAnalytics(id) {
//     const response =  await fetch(
//         `http://localhost:8080/api/applies/${id}`,
//         {
//             method: "PUT",
//             withCredentials: true,
//         }
//     );
//     const result = await response.json();
//     return result;
// }
