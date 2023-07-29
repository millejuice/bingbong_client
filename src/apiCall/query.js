const method = "GET";
export async function queryMemberById(id) {
    const response = await fetch(
        `http://localhost:8080/api/members/${id}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

// 데이터 요청 예시
// queryMemberById(1).then((response) => {
//     console.log(JSON.stringify(response));
// });

export async function queryMemberByKey(key) {
    const response = await fetch(
        `http://localhost:8080/api/members/key/${key}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

// 데이터 요청 예시
// queryMemberByKey("1010").then((response) => {
//     console.log(JSON.stringify(response));
// });

export async function queryClassRoomById(id) {
    const response = await fetch(
        `http://localhost:8080/api/classRooms/${id}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

// 데이터 요청 예시
// queryClassRoomById("2").then((response) => {
//     console.log(JSON.stringify(response));
// });


/**
 * 테스트 실패. 다시 해보기
 * */
export async function queryMyClassRoom(id) {
    const response = await fetch(
        `http://localhost:8080/api/classRoomMembers/classrooms/${id}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

/**
 * 테스트 실패. 다시 해보기
 * */
export async function queryAllClassMembers(id) {
    const response = await fetch(
        `http://localhost:8080/api/classRoomMembers/members/${id}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

/**
 * 아직 API 미완성. 미완성 후 테스트 해보기
 * */
export async function queryAnalytics(id) {
    const response = await fetch(
        `http://localhost:8080/api/evaluations/analytics/${id}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

/**
 * 아직 API 미완성. 미완성 후 테스트 해보기
 * */
export async function queryAllApplies(id) {
    const response = await fetch(
        `http://localhost:8080/api/appies/${id}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

/**
 * 테스트 실패. 다시 해보기
 * */
export async function queryAllClassChattingRooms(id) {
    const response = await fetch(
        `http://localhost:8080/api/chatRooms/classRooms/${id}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

export async function queryChattingRoom(id) {
    const response = await fetch(
        `http://localhost:8080/api/chatRooms/${id}`,
        {
            method: method,
            withCredentials: true,
        }
    );
    const result = await response.json();
    return result;
}

// 데이터 요청 예시
// queryChattingRoom("1").then((response) => {
//     console.log(JSON.stringify(response));
// });






