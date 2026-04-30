// Sample inverted index (simulate your C project output)
const index = {
    "data": [
        { file: "file1.txt", count: 3 },
        { file: "file2.txt", count: 1 }
    ],
    "search": [
        { file: "file2.txt", count: 2 },
        { file: "file3.txt", count: 4 }
    ],
    "project": [
        { file: "file1.txt", count: 2 }
    ]
};

function search() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const resultsDiv = document.getElementById("results");

    resultsDiv.innerHTML = "";

    if (query === "") {
        resultsDiv.innerHTML = "<p>Please enter a word</p>";
        return;
    }

    if (index[query]) {
        let output = `<h3>Results for "${query}"</h3><ul>`;
        
        index[query].forEach(item => {
            output += `<li>${item.file} (Count: ${item.count})</li>`;
        });

        output += "</ul>";
        resultsDiv.innerHTML = output;
    } else {
        resultsDiv.innerHTML = `<p>No results found</p>`;
    }
}
