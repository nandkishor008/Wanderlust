const input = document.getElementById("searchInput");
const suggestionsBox = document.getElementById("suggestionsBox");

input.addEventListener("input", async () => {
  const query = input.value.trim();
  if (!query) {
    suggestionsBox.style.display = "none";
    return;
  }

  try {
    const res = await fetch(`/listings/suggest?q=${query}`);
    const suggestions = await res.json();

    suggestionsBox.innerHTML = "";
    suggestions.forEach(item => {
      const link = document.createElement("a");
      link.href = `/listings/search?search=${encodeURIComponent(item)}`;
      link.className = "dropdown-item";
      link.innerHTML = item.replace(new RegExp(query, "gi"), match => `<mark>${match}</mark>`);
      suggestionsBox.appendChild(link);
    });

    suggestionsBox.style.display = "block";
  } catch (err) {
    console.error("Error fetching suggestions", err);
  }
});

document.addEventListener("click", () => {
  suggestionsBox.style.display = "none";
});
