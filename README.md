# Virtual Application Desk

This project is a simple static service listing website for SynthHub Online. It displays available application services, required documents for each service, a search box to filter services, and quick actions to send details through WhatsApp or email.

## Project structure

```text
virtual-application-desk/
├── virtual-application-desk.html
├── styles.css
├── script.js
└── images/
```

## Files

### `virtual-application-desk.html`
Contains the full page structure:
- Header banner
- Search input
- Services section
- Expandable service cards
- Contact footer

### `styles.css`
Contains all page styling:
- Layout
- Card design
- Search box styles
- Footer styles
- Responsive behavior
- Service image fit and card column layout

### `script.js`
Contains all interactive behavior:
- Search filtering
- Single-card open behavior
- Query menu open/close logic
- Centralized WhatsApp and email actions
- Event listeners for UI interactions

## Features

- Search services by name
- Expand one service card at a time
- View required documents for each service
- Send service details through WhatsApp
- Send service details through email
- Responsive layout for desktop, tablet, and mobile
- No inline CSS
- No inline JavaScript event handlers

## How to run

Since this is a static website, no installation is required.

### Option 1: Open directly
Open `virtual-application-desk.html` in a browser.

### Option 2: Run with Live Server
If you are using VS Code:
1. Install the **Live Server** extension.
2. Open the project folder.
3. Right-click `virtual-application-desk.html`.
4. Click **Open with Live Server**.

Using Live Server is better when checking image paths and script updates.

## Important folder note

Keep the `images` folder in the same directory level as `virtual-application-desk.html`.

Example:

```text
virtual-application-desk/
├── virtual-application-desk.html
├── styles.css
├── script.js
└── images/
    ├── SH Banner.png
    ├── Aadhaar Logo.png
    ├── Pancard Logo.png
    └── ...other images
```

If the image folder is missing or placed somewhere else, the service images and banner will not load.

## Customization

### Change contact details
Edit `script.js`:
- `businessEmail`
- `whatsappNumber`

Edit `virtual-application-desk.html` footer if you also want to change the visible contact information.

### Add a new service card
To add a new service:
1. Copy one existing `<details class="service-card">...</details>` block.
2. Update `data-name` with the searchable service name.
3. Update the title, image, price, and document list.
4. Set the query menu attributes:
   - `data-service`
   - `data-documents`

Example:

```html
<details class="service-card" data-name="New Service">
  <summary class="card-summary">
    <span class="service-code">₹500</span>
    <img src="./images/new-service.png" alt="New Service" class="service-image" />
    <div class="service-title">New Service</div>
  </summary>

  <div class="documents">
    <h3>Documents</h3>
    <ul>
      <li>ID proof</li>
      <li>Address proof</li>
    </ul>

    <details
      class="query-menu"
      data-service="New Service"
      data-documents='["ID proof", "Address proof"]'
    >
      <summary class="query-toggle">Send Documents</summary>
      <div class="query-options">
        <a href="#" class="query-option" data-action="whatsapp">Send via WhatsApp</a>
        <a href="#" class="query-option" data-action="email">Send via Email</a>
      </div>
    </details>
  </div>
</details>
```

## Current behavior notes

- Service search filters cards using the `data-name` value.
- WhatsApp and email actions are handled from one centralized script.
- Service cards are split into separate HTML, CSS, and JS files.
- The layout has been adjusted so opening one card does not visually stretch the other cards in the same row.

## Recommended improvements

Possible future improvements:
- Add SEO meta tags
- Add accessibility labels and skip link
- Move service data to a JavaScript array and render cards dynamically
- Add form validation before opening WhatsApp or email
- Add animation for opening and closing cards

## Tech used

- HTML5
- CSS3
- Vanilla JavaScript

## Author

Built for SynthHub Online.
