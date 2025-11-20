const input = document.getElementById("countInput");
const generateBtn = document.getElementById("generateBtn");
const copyAllBtn = document.getElementById("copyAllBtn");
const results = document.getElementById("results");

let allUsersJSON = [];

generateBtn.addEventListener("click", async () => {
  const count = parseInt(input.value);

  if (!count || count <= 0) {
    alert("Enter valid number!");
    return;
  }

  results.innerHTML = `<p class="text-center text-gray-600">Loading...</p>`;
  allUsersJSON = [];

  try {
    const res = await fetch(`https://randomuser.me/api/?results=${count}`);
    const data = await res.json();
    const users = data.results;

    results.innerHTML = "";

    users.forEach((user, index) => {
      const jsonText = JSON.stringify(user, null, 2);
      allUsersJSON.push(user);

      const card = document.createElement("div");
      card.className = "bg-gray-50 border rounded p-4 relative";

      card.innerHTML = `
            <div class="flex justify-between items-center mb-2">
              <h2 class="font-bold">User ${index + 1}</h2>
              <button class="copyBtn text-blue-600 hover:text-blue-800"
                      data-json='${jsonText.replace(/'/g, "&apos;")}'>
                <i class="fa-solid fa-copy"></i> Copy
              </button>
            </div>
            <pre class="text-sm bg-white p-3 rounded border overflow-auto">${jsonText}</pre>
          `;

      results.appendChild(card);
    });

    document.querySelectorAll(".copyBtn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const json = btn.getAttribute("data-json");
        navigator.clipboard.writeText(json);
        btn.innerHTML = `<i class="fa-solid fa-check text-green-600"></i> Copied`;
        setTimeout(() => {
          btn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy`;
        }, 1500);
      });
    });
  } catch (err) {
    results.innerHTML = `<p class="text-red-600 text-center">Error loading users</p>`;
  }
});

copyAllBtn.addEventListener("click", () => {
  if (allUsersJSON.length === 0) {
    alert("No users to copy! Generate first.");
    return;
  }
  navigator.clipboard.writeText(JSON.stringify(allUsersJSON, null, 2));
  copyAllBtn.innerHTML = `<i class="fa-solid fa-check text-green-600"></i> Copied`;
  setTimeout(() => {
    copyAllBtn.innerHTML = `<i class="fa-solid fa-copy"></i> Copy All`;
  }, 1500);
});
