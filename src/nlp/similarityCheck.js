export default async function query(data) {
    const response = await fetch(
        "https://api-inference.huggingface.co/models/sentence-transformers/all-MiniLM-L6-v2",
        {
            headers: { Authorization: "Bearer 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" },
            method: "POST",
            body: JSON.stringify(data),
        }
    );
    const result = await response.json();
    return result;
}

// 데이터 요청 예시
query({"inputs": {
        "source_sentence": "That is a happy person",
        "sentences": [
            "That is a happy dog",
            "That is a very happy person",
            "Today is a sunny day"
        ]
    }}).then((response) => {
    console.log(JSON.stringify(response));
});