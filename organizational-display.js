// organizational-display.js

// Sample organization data
const orgData = {
  name: "CEO",
  children: [
    {
      name: "Manager 1",
      children: [
        { name: "Team Lead 1", children: [{ name: "Employee 1" }, { name: "Employee 2" }] },
        { name: "Team Lead 2", children: [{ name: "Employee 3" }, { name: "Employee 4" }] }
      ]
    },
    {
      name: "Manager 2",
      children: [
        { name: "Team Lead 3", children: [{ name: "Employee 5" }, { name: "Employee 6" }] }
      ]
    }
  ]
};

// Function to generate organization chart
function generateOrgChart(data, elementId) {
  const element = document.getElementById(elementId);
  const ul = document.createElement("ul");
  for (const item of data) {
    const li = document.createElement("li");
    li.textContent = item.name;
    if (item.children && item.children.length > 0) {
      const childUl = generateOrgChart(item.children, elementId);
      li.appendChild(childUl);
      li.classList.add("hide");
      li.addEventListener("click", () => {
        li.classList.toggle("hide");
      });
    }
    ul.appendChild(li);
  }
  return ul;
}

// Render organization chart
function renderOrgChart(elementId) {
  const orgChart = generateOrgChart([orgData], elementId);
  document.getElementById(elementId).appendChild(orgChart);
}

// Usage: Call renderOrgChart with the ID of the element where you want to render the organization chart
// For example:
// renderOrgChart("orgChartContainer");
