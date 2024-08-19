const DataNav = [
    {
        id: 1,
        name: "Dashbord",
        root: "/dashboard",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 0.01);transform: ;msFilter:;">
        <path fill="#fff" d="M4 13h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1zm-1 7a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v4zm10 0a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v7zm1-10h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1z">
        </path>
        </svg>`
    },
    {
        id: 2,
        name: "Liste d'acte",
        root: "/acte-etat-civil",
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 0.01);transform: ;msFilter:;">
        <circle fill="#fff" cx="12" cy="6" r="2"></circle>
        <path fill="#fff" d="M14 9h-4a1 1 0 0 0-.8.4l-3 4 1.6 1.2L9 13v7h2v-4h2v4h2v-7l1.2 1.6 1.6-1.2-3-4A1 1 0 0 0 14 9z">
        </path>
        </svg>`
    },
    {
        id: 4,
        name: "Liste fonkotany",
        root: "/fonkotany",
        svg: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" fill="transparent"/>
  <g >
    <rect x="25" y="40" width="50" height="40" />
    <polygon points="50,20 25,40 75,40"/>
    <rect x="40" y="55" width="10" height="25"/>
    <rect x="60" y="55" width="10" height="15"/>
  </g>
</svg>
        `
    },
    {
        id: 5,
        name: "Commune",
        root: "/commune",
        svg: `<svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fillRule="evenodd" clipRule="evenodd" d="M2 22V2h20v20H2zm18-2V4H4v16h16zm-6-7.586l-4-4L8.707 10l4 4L14 10.707 16.707 13.414 14 16.121V13.414z" fill="#ffffff"/>
</svg>`
    },
    {
        id: 6,
        name: "District",
        root: "/district",
        svg: `<svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="100" height="100" rx="10" fill="transparent"/>
  <path d="M50 10 L90 50 L50 90 L10 50 Z"/>
</svg>
        `
    },
    {
        id: 7,
        name: "Region",
        root: "/region",
        svg: ` <svg width="64" height="64" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="white" d="M9 2h6a1 1 0 0 1 1 1v2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4V3a1 1 0 0 1 1-1zm1 4V4h4v2h-4zM5 7v12h14V7H5z"/>
</svg>
        `
    },
    {
        id: 8,
        name: "Travail",
        root: "/travail",
        svg: `
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 0.01);transform: ;msFilter:;">
        <path fill="#fff" d="M20 6h-3V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v2H4c-1.103 0-2 .897-2 2v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2zM6 8h2v11H6V8zm12 11h-2V8h2v11zM15 4v2H9V4h6z">
        </path>
        </svg>
    `
    },
    {
        id: 9,
        name: "Utilisateur",
        root: "/user",
        svg:  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: #fff;transform: ;msFilter:;">
        <path d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm1.5 1H8c-3.309 0-6 2.691-6 6v1h15v-1c0-3.309-2.691-6-6-6z"></path><path d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"></path>
        </svg>
          `
    }
];

export default DataNav;