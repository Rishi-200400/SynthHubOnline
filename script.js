function filterservices() {
  const input = document.getElementById("serviceSearch").value.toLowerCase();

  const cards = document.querySelectorAll(".service-card");

  const noResults = document.getElementById("noResults");

  let visibleCount = 0;

  cards.forEach((card) => {
    const serviceName = card.getAttribute("data-name").toLowerCase();

    if (serviceName.includes(input)) {
      card.style.display = "";

      visibleCount++;
    } else {
      card.style.display = "none";

      card.removeAttribute("open");
    }
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

function openQueryEmail(serviceName, documents) {
  const businessEmail = "synthhubonline@gmail.com";

  const subject = "service Query - " + serviceName;

  const body = `Hello, 
I would like to raise an application for this service. 


Service Name: ${serviceName} 
Documents Uploading: ${documents.join(", ")} 
 

My Name: 
My Phone Number: 

 
Thank you.`;

  window.location.href =
    "mailto:" +
    businessEmail +
    "?subject=" +
    encodeURIComponent(subject) +
    "&body=" +
    encodeURIComponent(body);
}

function openQueryWhatsApp(serviceName, documents) {
  const whatsappNumber = "9980445902";

  const message = `Hello, 
I would like to raise an application for this service. 


Service Name: ${serviceName} 
Documents Uploading: ${documents.join(", ")} 

 
My Name: 
My Phone Number: 

 
Thank you.`;

  window.open(
    "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(message),

    "_blank",
  );
}

const serviceSearch = document.getElementById("serviceSearch");
const queryMenus = document.querySelectorAll(".query-menu");
const serviceCards = document.querySelectorAll(".service-card");
const serviceContainer = document.getElementById("serviceContainer");

serviceSearch.addEventListener("keyup", filterservices);

serviceCards.forEach((card) => {
  card.addEventListener("toggle", function () {
    if (this.open) {
      serviceCards.forEach((otherCard) => {
        if (otherCard !== this) {
          otherCard.removeAttribute("open");
        }
      });
    }
  });
});

serviceContainer.addEventListener("click", function (event) {
  const option = event.target.closest(".query-option");

  if (!option) {
    return;
  }

  event.preventDefault();

  const queryMenu = option.closest(".query-menu");
  const serviceName = queryMenu.dataset.service;
  const documents = JSON.parse(queryMenu.dataset.documents || "[]");
  const action = option.dataset.action;

  if (action === "whatsapp") {
    openQueryWhatsApp(serviceName, documents);
  }

  if (action === "email") {
    openQueryEmail(serviceName, documents);
  }
});

queryMenus.forEach((menu) => {
  menu.addEventListener("toggle", function () {
    if (this.open) {
      queryMenus.forEach((otherMenu) => {
        if (otherMenu !== this) {
          otherMenu.removeAttribute("open");
        }
      });
    }
  });
});

document.addEventListener("click", function (event) {
  queryMenus.forEach((menu) => {
    if (!menu.contains(event.target)) {
      menu.removeAttribute("open");
    }
  });
});
