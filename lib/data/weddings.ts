export interface WeddingImage {
  url: string;
  width: number;
  height: number;
  alt: string;
}

export interface Wedding {
  slug: string;
  title: string;
  location: string;
  couple: string;
  date: string;
  story: string;
  images: WeddingImage[];
  featured?: boolean;
  category?: string;
}

export const weddings: Wedding[] = [
  {
    "slug": "wedding-helsinki-summer",
    "title": "Summer Wedding in Helsinki",
    "location": "Helsinki, Finland",
    "couple": "Maria & Thomas",
    "date": "July 15, 2023",
    "story": "A beautiful summer day in the heart of Helsinki, celebrating love with a vibrant city backdrop.",
    "featured": true,
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bcda5e34-4608-4f5f-98f3-4a5c3c202c29/2AG01741-3.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 1"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd17bb30-b34a-4d1f-8a71-0467a0a1b8e2/22-08-2020-DSC_0665.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 2"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd249b6f-21c5-495f-854d-5bf032bd8145/SAI04076.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 3"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd260e69-f71d-43cf-a9c7-1635f33041f3/SAI01553-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 4"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd3a54ef-172d-4b7a-9336-7ee6cdce2c54/SAI04432.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 5"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd6a32b8-e986-46b5-9dad-b900a25b998a/DSC09911.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 6"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bda24d47-31e7-466d-9bb3-21e9c21dbacf/A7307990.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 7"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bdb6bfb8-6c39-493b-a62a-4f96000a5d0c/SAI01429-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 8"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bdf7c178-aa26-468b-9306-e36cf6299425/A7302145-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 9"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be060712-d7bd-4b55-bee7-e88bd7e3d762/DSC09478.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 10"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be34e5c4-1e82-4602-a5e0-a3241a41ebf3/A7308504.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 11"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be406076-02ae-4be3-88a8-a7aca4a3e0eb/SAI04856.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 12"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be4bd636-fcd5-45e4-8251-10d2dca69f4c/SAI01280-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 13"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be5bbcc4-847b-4342-aece-c08a986e6675/DSC04911.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 14"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/beca88e1-1dd7-4b59-9196-d14dec253e98/DSC09696-Enhanced-NR.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 15"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bed31d70-2c28-46b3-acff-2ed6e34f8e3d/A7308639.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 16"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bee8f87e-a449-4f65-add4-3cc1d3173f3b/SAI04608.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 17"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bef61496-ee0d-48c4-81b1-83ba769eba1a/DSC01453.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 18"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/befd292f-cc77-46df-b358-6bb6ca837eef/2AG02013-3.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 19"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf049a41-4acf-4c98-a68c-db92e671476e/DSC01277.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 20"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf2c0e14-1ef4-40a1-84ce-0bc245e0b006/A7307966.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 21"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf369287-72a8-4b6d-adf9-8b492bd69c3c/A7302314.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 22"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf74d009-28e7-42d4-8da9-39915873b489/DSC01870.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 23"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf76f4c2-578f-446a-b6fc-99653b69e962/DSC00271-Enhanced-NR.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 24"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf9a979e-578c-4501-af19-ea774458caca/SAI01409-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 25"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bfff2240-1d49-4690-ba26-2b7df53e1795/SAI01353-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 26"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c03417d8-ed66-4edd-a7b4-7c29efca47b3/SAI01545-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 27"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0354707-49c8-4e6e-88ca-bff43de8beed/SAI05714.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 28"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c069e843-583b-4ea1-86ef-6372a3a21896/SAI05929.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 29"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0743ea1-9b80-4d76-91ee-ed26695570b7/SAI01266-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 30"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0a3a4ac-2ef7-40c4-bf99-feeed2cf77ed/SAI04986.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 31"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0bb53cd-856c-4d55-8cd7-12f209235c04/A7308536.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 32"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1055067-7df0-4c13-bd53-82968d1f13b8/SAI03241.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 33"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c11c2a10-a9e1-44e4-9030-de828c249d19/Lotta%2bLiina%2b%26%2bLauri-12.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 34"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c12a1376-24d3-4f01-a9ea-f355cc9e8970/DSC04778-Enhanced-NR.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 35"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c12bea1c-d645-4b05-aab6-31fec4cac616/DSC03327.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 36"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c132191c-9d05-4ccb-84dc-8e823fd4764a/DSC03468.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 37"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c17386af-f613-4743-8a06-7cb62deb8de2/A7306314.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 38"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c17a1604-836e-4e3f-bb36-b3d06e4d25d4/SAI06016.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 39"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c192cca5-2389-4493-adbb-6a0560bf3868/DSC04260.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Maria & Thomas Wedding - Helsinki, Finland - Photo 40"
      }
    ]
  },
  {
    "slug": "wedding-espoo-beach",
    "title": "Beachside Celebration in Espoo",
    "location": "Espoo, Finland",
    "couple": "Laura & Miika",
    "date": "August 12, 2023",
    "story": "An intimate ceremony on the shores of Espoo, where the sea breeze and golden hour light created a magical atmosphere.",
    "featured": true,
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1d2b132-5429-4588-add1-14a74a37c518/2AG02034-3.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 1"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1d8268a-20e8-4ff2-a89a-7c80ee1a6634/DSC_0961.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 2"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c23a8338-dfb8-4064-ab7b-a2f07802e44b/DSC_1027.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 3"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c28900b7-9f7c-45d8-a67e-f3a8fb0ea3d7/A7305018.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 4"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c31536b7-d4cd-4c5b-b541-ca8656f1c055/A7305331.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 5"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c31f8fbe-0517-4e23-a42e-b3893a78b13b/SAI01272-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 6"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c3279110-5980-45c3-954b-f3e2b5daf2a7/SAI01273-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 7"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c33d01df-59f4-4cee-9951-13b816430478/A7305989.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 8"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c343523a-d743-4d17-ac49-f47dcca80c8f/A7308061.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 9"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c46189b1-9f8c-493b-8241-342c5d572d0b/A7308449.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 10"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c492133d-e0d6-4135-8efe-da495a83bf40/SAI03985.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 11"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4932eb3-9364-4c3b-8c88-796f3dcd93be/DSC_1376.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 12"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4a51ee5-cc6c-4a11-8f90-572e81ebb7fa/DSC03585.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 13"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4ff8b53-9a96-48e4-8cde-dc5bb43fc81a/DSC05490.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 14"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5625dbf-9fee-478d-aa64-48449323586e/Lotta%2bLiina%2b%26%2bLauri-29.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 15"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c59a8c9a-0364-462d-a093-9d8db6d5d502/DSC03263-Enhanced-NR.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 16"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5c52402-c57d-4dc7-aab4-7559c070501e/SAI04951.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 17"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5e32987-6d6f-4bb7-b4e4-254f5daafee5/SAI01537-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 18"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c62ca9cf-50f0-4e5a-8e09-7091f30b9993/1AG02561.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 19"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c66ec6b6-55e9-4472-8e8f-4f643e115e9e/2AG01249-3.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 20"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c6b5c933-3923-4a23-9e09-0f2cf90c42d4/SAI04602.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 21"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c7027318-db37-463c-b2e6-28ed9a76becf/DSC09938.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 22"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c7179402-d16d-47d6-8382-eb775275625e/DSC01984.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 23"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c76dd24d-4631-4a1a-a52d-d28b45c6997b/SAI04459.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 24"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c775b212-79e5-4334-a75a-6343855cf86a/DSC_1146.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 25"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c77b869f-e2bc-44d2-922b-7ae4ce2718ee/DSC_0959.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 26"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c79be3fa-8473-4695-bd0d-610376a7e064/DSC_0666-2-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 27"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c820edb2-2295-43ed-b9bd-9a6a9ded1e00/DSC01842.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 28"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c828de43-e483-406f-b499-ab35cddb7d64/DSC_8139.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 29"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c852747e-78c0-4770-a85e-4c9341fedf39/SAI06227.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 30"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c86c0e0b-da49-40aa-892b-9fbc0e1021aa/A7306420.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 31"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c8a37000-3af8-46d9-9ff7-aba7a2ee6e3b/A7306508.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 32"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c92a0231-fe12-4508-a67f-272b39b3a3ce/A7306168.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 33"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c92ab2be-05dd-4cd6-b7ec-12381fbedce9/DSC09688.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 34"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c980d762-f6ad-4242-9706-e872744cd507/SAI01443-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 35"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c98255e4-cbcd-41b5-8ec7-af3769e66ab6/SAI01694-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 36"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ca693dc7-60c3-4191-b418-e83d55b6a354/A7306615.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 37"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb355774-1027-4488-be67-6460b5800607/DSC01917.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 38"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb45ce62-649c-4843-b19c-3da6baed178d/SAI03184-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 39"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb689237-47bb-4cbf-9e69-34d11ea3d715/DSC04329.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Laura & Miika Wedding - Espoo, Finland - Photo 40"
      }
    ]
  },
  {
    "slug": "wedding-finnish-lake",
    "title": "Lakeside Romance at Lake Saimaa",
    "location": "Lake Saimaa, Finland",
    "couple": "Anna & Juho",
    "date": "September 5, 2023",
    "story": "A serene lakeside wedding surrounded by the tranquility of Finnish nature and breathtaking views of Lake Saimaa.",
    "featured": true,
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb7297ce-3f9c-4a30-8be3-0ad525357bab/2AG01476-3.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 1"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb7cdf4f-49d1-411a-adbb-1bd76b91b823/A7306256.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 2"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb8a9521-86ed-4254-ba74-d259d0cbcc7d/SAI04503.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 3"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cba73aef-2cee-49c2-a721-bdb03c6f61f2/A7307974.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 4"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cbb51608-5aa1-4c30-b0fc-378c90f555be/DSC09637.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 5"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc44ec94-4ba8-460b-9c2b-381ae2d7b071/DSC09698.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 6"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc5e84a7-35aa-4c7a-996b-c37457a166a2/A7306371.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 7"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cd292b94-54f0-4b96-8bee-2bbe1b80f27d/A7302125-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 8"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cd50c943-4b8f-406d-a230-c64ed76ee055/DSC09714.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 9"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cdefdb60-23c8-4276-862f-0f3467e47b38/SAI01740-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 10"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce07c742-c020-406e-90ad-6bc9e0cf955c/DSC03253.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 11"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce1687a0-dce9-4b77-980e-94b1dd0b9cfd/SAI04881.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 12"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce291d99-b752-4958-97ca-89cd62cf3d8d/DSC09727.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 13"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce52db48-44f1-48d0-a074-73361cb70139/SAI04125.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 14"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce6622b3-5920-4f03-a95d-819fe452b32b/A7304897.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 15"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cf1245eb-dffd-4f4e-9e0f-e6e53d8d070a/DSC04396-Enhanced-NR.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 16"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cf8797f0-d565-4a5a-a2f7-d5ab820c9913/A7306478.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 17"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cf9e7fa8-5741-4217-ab42-162ab4518fb3/DSC01546.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 18"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfa464cb-3c23-4532-b06a-f157a687ed35/SAI01586-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 19"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfad2814-ee27-4743-85fa-d7a7dca5b032/DSC05647.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 20"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfcf2cf6-c5c4-46bc-8931-e6877624c243/SAI04065.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 21"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfe0dfc2-15ea-4929-9a89-103a4b72588e/DSC09380.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 22"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d00162b1-b342-4328-908e-5cf3741b61b5/1AG02652.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 23"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0687e85-6e8b-40d7-a73f-7ec7a08a3d56/A7305054.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 24"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d09e2255-131d-41ee-a61a-78b8050515ca/SAI01478-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 25"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0b3262c-0bf7-4e43-b9e3-bfc55dcf42c0/SAI05916.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 26"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0c265b7-f38e-492c-b9d1-dc252aceacc8/SAI01621-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 27"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0d0f184-5919-4d1a-9264-fa2fa07c6b4b/A7304982.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 28"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0e14be2-2051-4d96-b22b-ac8fadb4709c/A7307838.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 29"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0f1a237-e312-4130-80b3-82311464f88b/A7306851.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 30"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0f74c7b-b865-4b94-8ff0-3e2c633fd880/DSC06119.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 31"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0fbc446-b03f-42b9-8746-1d298fee83fd/1AG02949.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 32"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d11f0735-1691-4c93-b980-cecf20f976bf/SAI01555-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 33"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d1369b6f-0f02-4962-9209-10ad2b3e0b44/A7307592.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 34"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d189a193-3c78-4c6a-ad4b-7ab2c74dde52/SAI01692-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 35"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d2116a53-e76e-4d49-8dc0-70642ce650f1/DSC01901.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 36"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d26d8db2-0e6e-429b-a93c-41a087c0f8ae/SAI05911.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 37"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d2789200-45c4-47dc-9a50-40c42929dc1e/DSC_0665-2-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 38"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d27b4f58-b722-4419-af27-323ab15cb524/A7304702.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 39"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d27ce0f0-2acc-4e24-a9d7-029e56624c83/DSC_1282.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Anna & Juho Wedding - Lake Saimaa, Finland - Photo 40"
      }
    ]
  },
  {
    "slug": "toni-elina",
    "title": "Toni & Elina",
    "location": "Tampere, Finland",
    "couple": "Toni & Elina",
    "date": "June 24, 2023",
    "story": "A breathtaking wedding celebration in Tampere, Finland, where the couple celebrated their love in a stunning lakeside setting.",
    "featured": true,
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06a12517-d328-43dc-960e-8d9cc5e282a6/SAI01269-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Stunning Bride & Groom Portrait"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7f874fa-8dbf-4d21-bb6e-626467ff75c5/SAI01738-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Elegant Wedding Ceremony Moment"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d954de8-7ee1-417f-8624-ff8ef7007040/SAI01736-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Cinematic Couple Portrait"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ac1721b-6e06-4767-bcc1-d150a06f7d62/Art+MidAge...png",
        "width": 832,
        "height": 1248,
        "alt": "Artistic Wedding Detail"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b291d72a-a655-4192-9c7b-9b6772e3d026/SAI01337-2.jpg",
        "width": 3763,
        "height": 5007,
        "alt": "Intimate Moment during Celebration"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/548088f6-dfd9-4e7d-93f3-0fbc09fe11ee/SAI01729-2.jpg",
        "width": 3668,
        "height": 4961,
        "alt": "Breathtaking Venue Scene"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7c6a3d9-b971-4774-b855-c2cfd9ff5400/SAI01734-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d7affda6-4846-4fb2-b983-1f68e9e7321d/SAI01731-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35a12d23-d0f0-418c-aaaa-f2e96c10bc44/SAI01575-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/020b7b0e-2ad2-479d-b56a-181d514ef368/SAI01583-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ecae1c7-1b8a-4648-ac21-dbcc156a1580/SAI01584-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b07a7933-fa6c-4645-8fa1-f6b7a5f85106/SAI01585-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfa464cb-3c23-4532-b06a-f157a687ed35/SAI01586-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fa3fd2d3-4489-4d08-b5f1-84e804e11ab6/SAI01588-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f53528d4-da04-4842-b7d2-f91fa86e5c5d/SAI01590-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f0cb6ee-0ff4-4b16-b487-59341e55193f/SAI01591-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b13a6067-f5a9-4741-b105-c6b3a713311c/SAI01596-2.jpg",
        "width": 5580,
        "height": 3877,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70bd6ec9-1d2e-4919-b567-faa2947e44de/SAI01649-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6e9fc6ca-9d72-4563-ba55-6cb87d56f188/SAI01598-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d1c7485-7fe5-46e2-a307-5febb8e16ca0/SAI01602-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26d21960-3748-49b1-92d0-5fc067d600b6/SAI01605-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/830eeb13-a1a3-4e2e-a0ef-d1304e7958c7/SAI01606-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a877bdb1-40d4-4438-aafe-71e7f6829acf/SAI01607-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0bb49019-d8b5-4b1d-8528-6939ac434cd1/SAI01615-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fd028a26-491b-4cba-b42a-b931522ca626/SAI01572-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bfe18c3-25bb-4352-a2b4-c8411683cd4a/SAI01616-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9eb90f7f-f086-4fdc-a19e-c67a86feeba8/SAI01619-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72e7cff6-fcbf-4267-92bc-74cca9e2ff85/SAI01620-2.jpg",
        "width": 5794,
        "height": 3863,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0c265b7-f38e-492c-b9d1-dc252aceacc8/SAI01621-2.jpg",
        "width": 4107,
        "height": 3925,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8441e3e4-b3ab-4437-990f-ad7c4c759e24/SAI01624-2.jpg",
        "width": 5768,
        "height": 3209,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7ebe6359-ab13-440b-b8e3-1f78d6011a62/SAI01627-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bacbad34-3662-4a85-968f-bef5671caecc/SAI01628-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/05ecda52-863d-4c6c-b2aa-7196583d6341/SAI01632-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a75db93-7956-4e9c-bac6-73b793aaf5de/SAI01634-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b784d81-239e-45ac-9e89-6cfaca7d3ed1/SAI01637-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afc4932f-94c8-41a9-aaa7-2941a76cde56/SAI01639-2.jpg",
        "width": 5867,
        "height": 3911,
        "alt": "Emotional Wedding Vows"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/647300cf-2d34-44ef-aaea-d4684ca3aed0/SAI01642-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Joyful Celebration Moment"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6d57a11-80a9-46df-a64c-3e83d439215a/SAI01643-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Exquisite Bridal Detail"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/71ac2c1c-7dc8-4509-b3aa-5435acf95de0/SAI01644-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Dramatic Wedding Exit"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b4be2796-e5b6-408c-b780-f39e57c00bfd/SAI01654-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Intimate Couple Whisper"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f396b26d-2a42-4a5a-9a28-2d1115c87630/SAI01658-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Bridal Gown Detail"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f40c98f2-7119-439a-9112-a97497f5aa7d/SAI01661-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/04d79b48-c487-4fbe-9197-5104aba6328c/SAI01664-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5be5bcb-3c56-4eb8-acf0-96e531e5d459/SAI01670-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44b723dd-f8e0-47fa-b65d-40fe38804503/SAI01677-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3bd9afc6-e23c-4c07-b417-233193786591/SAI01679-2.jpg",
        "width": 5463,
        "height": 3603,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7941df3a-0282-41fc-9cbc-15a719f3f36a/SAI01681-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b690cfd8-ce1d-46fe-86f6-49df98d08928/SAI01688-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d189a193-3c78-4c6a-ad4b-7ab2c74dde52/SAI01692-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c98255e4-cbcd-41b5-8ec7-af3769e66ab6/SAI01694-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ace23d06-c569-4e1c-afb8-540f37b782b5/SAI01704-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b517062b-af30-42aa-aad8-c0008a36c81d/SAI01710-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f05380a-0b43-4a38-90b3-fb74eefef96c/SAI01713-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b0a0acd3-7ef2-42dc-8d98-bc70a7f4c58a/SAI01720-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/550aab59-42b2-45f5-b61f-88aeb0ddd8e7/SAI01726-2.jpg",
        "width": 5775,
        "height": 3538,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a26448d7-a015-40d9-a16d-15e40bc173d1/SAI01727-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55d5ea6c-9123-45e6-8393-ec47e24295b2/SAI01732-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9c71ce88-1664-4bc2-9e67-1cb37502656d/SAI01735-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4bf07630-f0a0-493b-90fb-905b3a3cc9c7/SAI01739-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cdefdb60-23c8-4276-862f-0f3467e47b38/SAI01740-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2af1b073-ef79-4c95-a197-f34cce06956a/SAI01743-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70d176b9-f757-480a-8756-fee2ce467145/SAI01262-2.jpg",
        "width": 3816,
        "height": 5988,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/af76194c-b736-4344-b62b-288a9322021b/SAI01263-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24ae9158-08cc-43f9-9b74-60fe08ad0d19/SAI01265-2.jpg",
        "width": 3461,
        "height": 4885,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0743ea1-9b80-4d76-91ee-ed26695570b7/SAI01266-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f1461bf5-2b5a-450c-877c-be843483c4fc/SAI01267-2.jpg",
        "width": 3841,
        "height": 5963,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/304e7637-951c-41f7-a2c4-db32acc27cb3/SAI01268-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06a12517-d328-43dc-960e-8d9cc5e282a6/SAI01269-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/12303297-6b45-4e3b-b228-99e5ad34b4c2/SAI01270-2.jpg",
        "width": 5736,
        "height": 3824,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aeb2f781-27b3-40eb-858b-12cd1e140718/SAI01271-2.jpg",
        "width": 3841,
        "height": 5142,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c31f8fbe-0517-4e23-a42e-b3893a78b13b/SAI01272-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c3279110-5980-45c3-954b-f3e2b5daf2a7/SAI01273-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fa990cf8-d416-40d6-9ef8-bd0c19b97588/SAI01274-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a667e91f-6274-4970-af74-e1caf41dabfb/SAI01275-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0540c71-8669-4118-983c-cb2b52bdc18b/SAI01276-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ecc1709-990b-4592-8de3-f3996f209006/SAI01278-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be4bd636-fcd5-45e4-8251-10d2dca69f4c/SAI01280-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ed9f3a98-cc37-43fc-be8e-1ce969b71a23/SAI01281-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53d76974-73ce-4b3e-bdea-da62d060a32e/SAI01282-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc95200b-86dc-4493-b3fc-d4b01ab1481f/SAI01283-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0fb9d83-b6e6-4177-b5b3-a1c87e068373/SAI01285-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d96ffbf5-506a-4b0d-83a8-1737d6d9b4b4/SAI01287-2.jpg",
        "width": 4227,
        "height": 3714,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/17e0e8f8-6c26-46fd-8a6d-3a1223db7e4e/SAI01288-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84f62eb7-ef8d-44d1-963b-64301327fae0/SAI01289-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/59a855ad-970a-4d3b-a488-00c2a7beed34/SAI01291-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bc7880dd-8a57-450e-b41e-39a75437ebfd/SAI01292-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/49dfd672-ce06-4041-ab84-3da95f6e7b9e/SAI01294-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3e0f64e2-0d13-4b87-8e59-092cfc186e72/SAI01295-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92a4ca77-7fac-4f4a-905f-ed9a2d8e5925/SAI01296-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93b39400-77b1-4f97-a567-4000fb40f736/SAI01297-2.jpg",
        "width": 5638,
        "height": 3759,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4334d5a8-0c24-437b-9aa8-cd21d434e315/SAI01299-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19f2e756-e3c5-423f-b523-df45b59be5f5/SAI01300-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b415171c-802a-4f9b-a47a-9c5b33adbc74/SAI01302-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c16c245-455e-4dc1-88fc-c29833db2bac/SAI01303-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/644d8fab-f3e1-49a3-b676-75fefe4e77f4/SAI01313-2.jpg",
        "width": 5330,
        "height": 3346,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7568f5cf-2678-43c9-adab-050df246b140/SAI01319-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7536404-a798-4539-882b-d35301a93372/SAI01335-2.jpg",
        "width": 2944,
        "height": 4159,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f07773d3-a48b-45ca-9a24-8bbafe10b378/SAI01336-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f50e00d3-e4fd-49c0-9c0c-808ddc3ebf0d/SAI01343-2.jpg",
        "width": 4657,
        "height": 3417,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9aea5fb4-7db8-4fab-af6c-ed07206012a1/SAI01344-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b3c14f1a-4a04-4e9f-8ca4-bf399bcf3629/SAI01350-2.jpg",
        "width": 5080,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bfff2240-1d49-4690-ba26-2b7df53e1795/SAI01353-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5668926b-a6c8-4f40-a6fc-5fb4cb66718e/SAI01354-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22baedd2-7e07-405a-a8ff-e7a9057ae4a4/SAI01355-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9ad2552-2ff1-4a3a-9836-1896f1b65359/SAI01358-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/81f3777f-f859-42f8-ac95-db50ca05f31a/SAI01360-2.jpg",
        "width": 5124,
        "height": 3253,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b34cdae7-85fd-45c2-98af-cbff9bea6753/SAI01363-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1747fe42-c0b6-4545-934b-f21ad53f05a1/SAI01365-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4706e903-8e15-4bc7-a4f5-632aceafb3a0/SAI01369-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bc385a56-76fc-4211-8ea5-b04965c42f65/SAI01373-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ea64613-48a3-4a28-92b7-35e32e5e8091/SAI01374-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec243038-e1eb-4298-85d1-def05a79f014/SAI01376-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ea1d461f-2db1-4cdf-832d-bc66976b1ec4/SAI01377-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89b345bc-869b-40ad-a1cf-f31c1453b30f/SAI01379-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b4ecdc3f-91e1-47a7-9ff5-14b621a7013f/SAI01381-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56d2ca36-7f12-4861-8df1-f12dc1ea91f1/SAI01382-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06e663c1-66df-4d34-b664-70628daef64c/SAI01385-2.jpg",
        "width": 4513,
        "height": 3529,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36b35c08-42b8-49ab-adf9-f1ee278c871e/SAI01388-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a40c9d0-230b-4283-b741-ba533ebfb46d/SAI01391-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/279672fd-411d-435e-b210-bafc58089f6d/SAI01394-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3804e463-4907-4107-8c16-1336b1dfce00/SAI01396-2.jpg",
        "width": 5991,
        "height": 3994,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98d40cfd-6ec9-43cd-861a-0ac7ca827e16/SAI01402-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e9a0aab-61de-4f38-9543-ae7626c89f96/SAI01405-2.jpg",
        "width": 5567,
        "height": 3578,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e435dc60-7d47-4abc-8899-206ad8cc4eed/SAI01407-2.jpg",
        "width": 5676,
        "height": 3784,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f4a18e7-a7c3-4af2-8890-46ad16567aff/SAI01408-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf9a979e-578c-4501-af19-ea774458caca/SAI01409-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2a60a5d5-d940-4a5f-85e1-64af68ff3a39/SAI01410-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f95f365-fdd7-42ae-a85c-cc4a4490e43d/SAI01411-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/99a24e95-5e8d-4950-b758-c7a41f0cf734/SAI01412-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e647f7d-dca7-47e3-bd22-279b7ad8b6a4/SAI01413-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fa86e5eb-f115-4f34-a354-2417ee97853a/SAI01414-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a75a4c4f-e926-4c74-9fe8-fe9c34312205/SAI01421-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afcd1895-28cc-416b-b740-f06b1a34c8ea/SAI01422-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bdb6bfb8-6c39-493b-a62a-4f96000a5d0c/SAI01429-2.jpg",
        "width": 4896,
        "height": 3664,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0de4586c-7433-4efb-af8b-4045b72fc5d6/SAI01436-2.jpg",
        "width": 3619,
        "height": 2116,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4da7d71d-3d3a-4d8f-b1e2-885366ef893d/SAI01442-2.jpg",
        "width": 5901,
        "height": 3934,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c980d762-f6ad-4242-9706-e872744cd507/SAI01443-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b79cf725-cb2e-4e48-bfb5-e2099753aa93/SAI01445-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a31c048a-8704-4123-8223-7c3b4cee28a6/SAI01456-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f8dc1122-9eb4-45ea-aa8d-e28f08887156/SAI01467-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9fa90d0d-6d0e-41e8-82e7-2cec28dd3e79/SAI01468-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0b284664-a311-40e8-a069-e5e4ce3e5ce1/SAI01473-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3a29f41-b987-4139-ad6e-65238b72fc62/SAI01474-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/04cfe487-92e9-4573-8ef3-684f778b4d6e/SAI01477-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d09e2255-131d-41ee-a61a-78b8050515ca/SAI01478-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e1c831b3-1249-48dc-8bd9-f4e8af6c38e6/SAI01481-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1adb8c0f-7444-4ebe-a9ca-4cc4de281d74/SAI01483-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4b3a3da9-ebd0-4fc1-8fbd-b16e7d9058ce/SAI01488-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/287e3d5b-40e1-456f-be9e-088fa6c5591a/SAI01489-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0b0f4a14-d089-49c4-91ff-ca560fb9263b/SAI01490-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aaba2c48-35ba-4185-a54d-bc0e11d16ead/SAI01491-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2d9d6ff3-ade3-43aa-929e-d5ee96f194d6/SAI01493-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/248f7784-fc9a-4620-a3be-907a2491fc4d/SAI01496-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/29902fd7-0844-4fb7-b1f7-029015851762/SAI01498-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b6a752c4-22f0-40a7-95a7-05db21a40c27/SAI01502-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b97ed538-876e-4b70-a330-9aa9c8fadd9a/SAI01504-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d95a51b3-3281-4c94-a77b-33d3c494b186/SAI01505-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a878791-cd6f-433b-b37a-829675341fda/SAI01507-2.jpg",
        "width": 3443,
        "height": 4612,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a32083c9-60ed-4089-bcf0-cf8288f9cab0/SAI01513-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3e457aa4-48a5-45e1-8d40-4e70127d3430/SAI01514-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a84c514-16d2-4361-bdfc-3ab4769b00df/SAI01515-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/efc48bb9-82d2-4176-ba19-6737351ceac8/SAI01518-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/560ef9fc-1439-44ce-80d3-9df415d86dee/SAI01520-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a923a89-c56e-4085-bc64-ff51134e690c/SAI01521-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9b85f8ad-4937-4195-bcec-c5abfe7f476e/SAI01523-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53fb0488-9f32-414e-a5ff-4c88644acad4/SAI01526-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3da17f4f-622d-46a3-bbec-cbc27468d6d4/SAI01528-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6eacbc62-ad69-45c5-967c-acdf1bb49037/SAI01530-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23062168-7aef-4bd2-a171-b69b8d7d8dc3/SAI01531-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/787caa29-4d91-4033-81ac-6ad2e112d5c5/SAI01535-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5e32987-6d6f-4bb7-b4e4-254f5daafee5/SAI01537-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1d05e617-11d4-4dbf-b8fd-6f06e409e80a/SAI01540-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/86864c9c-c2ec-4a42-93c9-c46ff2292420/SAI01541-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/45c3a337-1f40-4000-b4c7-3ebc106baf4f/SAI01544-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c03417d8-ed66-4edd-a7b4-7c29efca47b3/SAI01545-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1038cbd7-8e93-43ce-878c-3df2a3102b56/SAI01547-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2392b566-d987-4fea-8276-20e68240393d/SAI01549-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd260e69-f71d-43cf-a9c7-1635f33041f3/SAI01553-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/13a6b4ef-0283-463e-a0a1-f529c35caff3/SAI01554-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d11f0735-1691-4c93-b980-cecf20f976bf/SAI01555-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/511a9bcd-b78a-49df-b28a-dc2a184a4466/SAI01558-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/056073bb-cf61-4859-8dfa-3514cbab104a/SAI01559-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab0d9ae1-42a6-4cb9-85d2-b3fa08edeb67/SAI01561-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/50184497-1bff-4448-8b07-634afbd42b3f/SAI01562-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/87d618ce-f672-4218-81ba-310d5f260102/SAI01565-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b6fc313-f417-440a-9715-a9ce06605bfa/SAI01566-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6696a80b-4e0b-41db-aa4e-1a09f9d7ad69/SAI01567-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f474c68f-b58b-4524-b6d4-c09512298af0/SAI01570-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7f874fa-8dbf-4d21-bb6e-626467ff75c5/SAI01738-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d954de8-7ee1-417f-8624-ff8ef7007040/SAI01736-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ac1721b-6e06-4767-bcc1-d150a06f7d62/Art+MidAge...png",
        "width": 832,
        "height": 1248,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b291d72a-a655-4192-9c7b-9b6772e3d026/SAI01337-2.jpg",
        "width": 3763,
        "height": 5007,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/548088f6-dfd9-4e7d-93f3-0fbc09fe11ee/SAI01729-2.jpg",
        "width": 3668,
        "height": 4961,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7c6a3d9-b971-4774-b855-c2cfd9ff5400/SAI01734-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d7affda6-4846-4fb2-b983-1f68e9e7321d/SAI01731-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35a12d23-d0f0-418c-aaaa-f2e96c10bc44/SAI01575-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/020b7b0e-2ad2-479d-b56a-181d514ef368/SAI01583-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ecae1c7-1b8a-4648-ac21-dbcc156a1580/SAI01584-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b07a7933-fa6c-4645-8fa1-f6b7a5f85106/SAI01585-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfa464cb-3c23-4532-b06a-f157a687ed35/SAI01586-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fa3fd2d3-4489-4d08-b5f1-84e804e11ab6/SAI01588-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f53528d4-da04-4842-b7d2-f91fa86e5c5d/SAI01590-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f0cb6ee-0ff4-4b16-b487-59341e55193f/SAI01591-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b13a6067-f5a9-4741-b105-c6b3a713311c/SAI01596-2.jpg",
        "width": 5580,
        "height": 3877,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70bd6ec9-1d2e-4919-b567-faa2947e44de/SAI01649-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6e9fc6ca-9d72-4563-ba55-6cb87d56f188/SAI01598-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d1c7485-7fe5-46e2-a307-5febb8e16ca0/SAI01602-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26d21960-3748-49b1-92d0-5fc067d600b6/SAI01605-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/830eeb13-a1a3-4e2e-a0ef-d1304e7958c7/SAI01606-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a877bdb1-40d4-4438-aafe-71e7f6829acf/SAI01607-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0bb49019-d8b5-4b1d-8528-6939ac434cd1/SAI01615-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fd028a26-491b-4cba-b42a-b931522ca626/SAI01572-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bfe18c3-25bb-4352-a2b4-c8411683cd4a/SAI01616-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9eb90f7f-f086-4fdc-a19e-c67a86feeba8/SAI01619-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72e7cff6-fcbf-4267-92bc-74cca9e2ff85/SAI01620-2.jpg",
        "width": 5794,
        "height": 3863,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0c265b7-f38e-492c-b9d1-dc252aceacc8/SAI01621-2.jpg",
        "width": 4107,
        "height": 3925,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8441e3e4-b3ab-4437-990f-ad7c4c759e24/SAI01624-2.jpg",
        "width": 5768,
        "height": 3209,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7ebe6359-ab13-440b-b8e3-1f78d6011a62/SAI01627-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bacbad34-3662-4a85-968f-bef5671caecc/SAI01628-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/05ecda52-863d-4c6c-b2aa-7196583d6341/SAI01632-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a75db93-7956-4e9c-bac6-73b793aaf5de/SAI01634-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b784d81-239e-45ac-9e89-6cfaca7d3ed1/SAI01637-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afc4932f-94c8-41a9-aaa7-2941a76cde56/SAI01639-2.jpg",
        "width": 5867,
        "height": 3911,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/647300cf-2d34-44ef-aaea-d4684ca3aed0/SAI01642-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6d57a11-80a9-46df-a64c-3e83d439215a/SAI01643-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/71ac2c1c-7dc8-4509-b3aa-5435acf95de0/SAI01644-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b4be2796-e5b6-408c-b780-f39e57c00bfd/SAI01654-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f396b26d-2a42-4a5a-9a28-2d1115c87630/SAI01658-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f40c98f2-7119-439a-9112-a97497f5aa7d/SAI01661-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/04d79b48-c487-4fbe-9197-5104aba6328c/SAI01664-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5be5bcb-3c56-4eb8-acf0-96e531e5d459/SAI01670-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44b723dd-f8e0-47fa-b65d-40fe38804503/SAI01677-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3bd9afc6-e23c-4c07-b417-233193786591/SAI01679-2.jpg",
        "width": 5463,
        "height": 3603,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7941df3a-0282-41fc-9cbc-15a719f3f36a/SAI01681-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b690cfd8-ce1d-46fe-86f6-49df98d08928/SAI01688-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d189a193-3c78-4c6a-ad4b-7ab2c74dde52/SAI01692-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c98255e4-cbcd-41b5-8ec7-af3769e66ab6/SAI01694-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ace23d06-c569-4e1c-afb8-540f37b782b5/SAI01704-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b517062b-af30-42aa-aad8-c0008a36c81d/SAI01710-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f05380a-0b43-4a38-90b3-fb74eefef96c/SAI01713-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b0a0acd3-7ef2-42dc-8d98-bc70a7f4c58a/SAI01720-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/550aab59-42b2-45f5-b61f-88aeb0ddd8e7/SAI01726-2.jpg",
        "width": 5775,
        "height": 3538,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a26448d7-a015-40d9-a16d-15e40bc173d1/SAI01727-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55d5ea6c-9123-45e6-8393-ec47e24295b2/SAI01732-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9c71ce88-1664-4bc2-9e67-1cb37502656d/SAI01735-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4bf07630-f0a0-493b-90fb-905b3a3cc9c7/SAI01739-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cdefdb60-23c8-4276-862f-0f3467e47b38/SAI01740-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2af1b073-ef79-4c95-a197-f34cce06956a/SAI01743-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70d176b9-f757-480a-8756-fee2ce467145/SAI01262-2.jpg",
        "width": 3816,
        "height": 5988,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/af76194c-b736-4344-b62b-288a9322021b/SAI01263-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24ae9158-08cc-43f9-9b74-60fe08ad0d19/SAI01265-2.jpg",
        "width": 3461,
        "height": 4885,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0743ea1-9b80-4d76-91ee-ed26695570b7/SAI01266-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f1461bf5-2b5a-450c-877c-be843483c4fc/SAI01267-2.jpg",
        "width": 3841,
        "height": 5963,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/304e7637-951c-41f7-a2c4-db32acc27cb3/SAI01268-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06a12517-d328-43dc-960e-8d9cc5e282a6/SAI01269-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/12303297-6b45-4e3b-b228-99e5ad34b4c2/SAI01270-2.jpg",
        "width": 5736,
        "height": 3824,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aeb2f781-27b3-40eb-858b-12cd1e140718/SAI01271-2.jpg",
        "width": 3841,
        "height": 5142,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c31f8fbe-0517-4e23-a42e-b3893a78b13b/SAI01272-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c3279110-5980-45c3-954b-f3e2b5daf2a7/SAI01273-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fa990cf8-d416-40d6-9ef8-bd0c19b97588/SAI01274-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a667e91f-6274-4970-af74-e1caf41dabfb/SAI01275-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0540c71-8669-4118-983c-cb2b52bdc18b/SAI01276-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ecc1709-990b-4592-8de3-f3996f209006/SAI01278-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be4bd636-fcd5-45e4-8251-10d2dca69f4c/SAI01280-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ed9f3a98-cc37-43fc-be8e-1ce969b71a23/SAI01281-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53d76974-73ce-4b3e-bdea-da62d060a32e/SAI01282-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc95200b-86dc-4493-b3fc-d4b01ab1481f/SAI01283-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0fb9d83-b6e6-4177-b5b3-a1c87e068373/SAI01285-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d96ffbf5-506a-4b0d-83a8-1737d6d9b4b4/SAI01287-2.jpg",
        "width": 4227,
        "height": 3714,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/17e0e8f8-6c26-46fd-8a6d-3a1223db7e4e/SAI01288-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84f62eb7-ef8d-44d1-963b-64301327fae0/SAI01289-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/59a855ad-970a-4d3b-a488-00c2a7beed34/SAI01291-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bc7880dd-8a57-450e-b41e-39a75437ebfd/SAI01292-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/49dfd672-ce06-4041-ab84-3da95f6e7b9e/SAI01294-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3e0f64e2-0d13-4b87-8e59-092cfc186e72/SAI01295-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92a4ca77-7fac-4f4a-905f-ed9a2d8e5925/SAI01296-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93b39400-77b1-4f97-a567-4000fb40f736/SAI01297-2.jpg",
        "width": 5638,
        "height": 3759,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4334d5a8-0c24-437b-9aa8-cd21d434e315/SAI01299-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19f2e756-e3c5-423f-b523-df45b59be5f5/SAI01300-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b415171c-802a-4f9b-a47a-9c5b33adbc74/SAI01302-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c16c245-455e-4dc1-88fc-c29833db2bac/SAI01303-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/644d8fab-f3e1-49a3-b676-75fefe4e77f4/SAI01313-2.jpg",
        "width": 5330,
        "height": 3346,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7568f5cf-2678-43c9-adab-050df246b140/SAI01319-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7536404-a798-4539-882b-d35301a93372/SAI01335-2.jpg",
        "width": 2944,
        "height": 4159,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f07773d3-a48b-45ca-9a24-8bbafe10b378/SAI01336-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f50e00d3-e4fd-49c0-9c0c-808ddc3ebf0d/SAI01343-2.jpg",
        "width": 4657,
        "height": 3417,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9aea5fb4-7db8-4fab-af6c-ed07206012a1/SAI01344-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b3c14f1a-4a04-4e9f-8ca4-bf399bcf3629/SAI01350-2.jpg",
        "width": 5080,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bfff2240-1d49-4690-ba26-2b7df53e1795/SAI01353-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5668926b-a6c8-4f40-a6fc-5fb4cb66718e/SAI01354-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22baedd2-7e07-405a-a8ff-e7a9057ae4a4/SAI01355-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9ad2552-2ff1-4a3a-9836-1896f1b65359/SAI01358-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/81f3777f-f859-42f8-ac95-db50ca05f31a/SAI01360-2.jpg",
        "width": 5124,
        "height": 3253,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b34cdae7-85fd-45c2-98af-cbff9bea6753/SAI01363-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1747fe42-c0b6-4545-934b-f21ad53f05a1/SAI01365-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4706e903-8e15-4bc7-a4f5-632aceafb3a0/SAI01369-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bc385a56-76fc-4211-8ea5-b04965c42f65/SAI01373-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ea64613-48a3-4a28-92b7-35e32e5e8091/SAI01374-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec243038-e1eb-4298-85d1-def05a79f014/SAI01376-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ea1d461f-2db1-4cdf-832d-bc66976b1ec4/SAI01377-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89b345bc-869b-40ad-a1cf-f31c1453b30f/SAI01379-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b4ecdc3f-91e1-47a7-9ff5-14b621a7013f/SAI01381-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56d2ca36-7f12-4861-8df1-f12dc1ea91f1/SAI01382-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06e663c1-66df-4d34-b664-70628daef64c/SAI01385-2.jpg",
        "width": 4513,
        "height": 3529,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36b35c08-42b8-49ab-adf9-f1ee278c871e/SAI01388-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a40c9d0-230b-4283-b741-ba533ebfb46d/SAI01391-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/279672fd-411d-435e-b210-bafc58089f6d/SAI01394-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3804e463-4907-4107-8c16-1336b1dfce00/SAI01396-2.jpg",
        "width": 5991,
        "height": 3994,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98d40cfd-6ec9-43cd-861a-0ac7ca827e16/SAI01402-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e9a0aab-61de-4f38-9543-ae7626c89f96/SAI01405-2.jpg",
        "width": 5567,
        "height": 3578,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e435dc60-7d47-4abc-8899-206ad8cc4eed/SAI01407-2.jpg",
        "width": 5676,
        "height": 3784,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f4a18e7-a7c3-4af2-8890-46ad16567aff/SAI01408-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf9a979e-578c-4501-af19-ea774458caca/SAI01409-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2a60a5d5-d940-4a5f-85e1-64af68ff3a39/SAI01410-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f95f365-fdd7-42ae-a85c-cc4a4490e43d/SAI01411-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/99a24e95-5e8d-4950-b758-c7a41f0cf734/SAI01412-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e647f7d-dca7-47e3-bd22-279b7ad8b6a4/SAI01413-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fa86e5eb-f115-4f34-a354-2417ee97853a/SAI01414-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a75a4c4f-e926-4c74-9fe8-fe9c34312205/SAI01421-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afcd1895-28cc-416b-b740-f06b1a34c8ea/SAI01422-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bdb6bfb8-6c39-493b-a62a-4f96000a5d0c/SAI01429-2.jpg",
        "width": 4896,
        "height": 3664,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0de4586c-7433-4efb-af8b-4045b72fc5d6/SAI01436-2.jpg",
        "width": 3619,
        "height": 2116,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4da7d71d-3d3a-4d8f-b1e2-885366ef893d/SAI01442-2.jpg",
        "width": 5901,
        "height": 3934,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c980d762-f6ad-4242-9706-e872744cd507/SAI01443-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b79cf725-cb2e-4e48-bfb5-e2099753aa93/SAI01445-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a31c048a-8704-4123-8223-7c3b4cee28a6/SAI01456-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f8dc1122-9eb4-45ea-aa8d-e28f08887156/SAI01467-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9fa90d0d-6d0e-41e8-82e7-2cec28dd3e79/SAI01468-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0b284664-a311-40e8-a069-e5e4ce3e5ce1/SAI01473-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3a29f41-b987-4139-ad6e-65238b72fc62/SAI01474-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/04cfe487-92e9-4573-8ef3-684f778b4d6e/SAI01477-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d09e2255-131d-41ee-a61a-78b8050515ca/SAI01478-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e1c831b3-1249-48dc-8bd9-f4e8af6c38e6/SAI01481-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1adb8c0f-7444-4ebe-a9ca-4cc4de281d74/SAI01483-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4b3a3da9-ebd0-4fc1-8fbd-b16e7d9058ce/SAI01488-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/287e3d5b-40e1-456f-be9e-088fa6c5591a/SAI01489-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0b0f4a14-d089-49c4-91ff-ca560fb9263b/SAI01490-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aaba2c48-35ba-4185-a54d-bc0e11d16ead/SAI01491-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2d9d6ff3-ade3-43aa-929e-d5ee96f194d6/SAI01493-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/248f7784-fc9a-4620-a3be-907a2491fc4d/SAI01496-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/29902fd7-0844-4fb7-b1f7-029015851762/SAI01498-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b6a752c4-22f0-40a7-95a7-05db21a40c27/SAI01502-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b97ed538-876e-4b70-a330-9aa9c8fadd9a/SAI01504-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d95a51b3-3281-4c94-a77b-33d3c494b186/SAI01505-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a878791-cd6f-433b-b37a-829675341fda/SAI01507-2.jpg",
        "width": 3443,
        "height": 4612,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a32083c9-60ed-4089-bcf0-cf8288f9cab0/SAI01513-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3e457aa4-48a5-45e1-8d40-4e70127d3430/SAI01514-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a84c514-16d2-4361-bdfc-3ab4769b00df/SAI01515-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/efc48bb9-82d2-4176-ba19-6737351ceac8/SAI01518-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/560ef9fc-1439-44ce-80d3-9df415d86dee/SAI01520-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a923a89-c56e-4085-bc64-ff51134e690c/SAI01521-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9b85f8ad-4937-4195-bcec-c5abfe7f476e/SAI01523-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53fb0488-9f32-414e-a5ff-4c88644acad4/SAI01526-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3da17f4f-622d-46a3-bbec-cbc27468d6d4/SAI01528-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6eacbc62-ad69-45c5-967c-acdf1bb49037/SAI01530-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23062168-7aef-4bd2-a171-b69b8d7d8dc3/SAI01531-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/787caa29-4d91-4033-81ac-6ad2e112d5c5/SAI01535-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5e32987-6d6f-4bb7-b4e4-254f5daafee5/SAI01537-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1d05e617-11d4-4dbf-b8fd-6f06e409e80a/SAI01540-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/86864c9c-c2ec-4a42-93c9-c46ff2292420/SAI01541-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/45c3a337-1f40-4000-b4c7-3ebc106baf4f/SAI01544-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c03417d8-ed66-4edd-a7b4-7c29efca47b3/SAI01545-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1038cbd7-8e93-43ce-878c-3df2a3102b56/SAI01547-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2392b566-d987-4fea-8276-20e68240393d/SAI01549-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd260e69-f71d-43cf-a9c7-1635f33041f3/SAI01553-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/13a6b4ef-0283-463e-a0a1-f529c35caff3/SAI01554-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d11f0735-1691-4c93-b980-cecf20f976bf/SAI01555-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/511a9bcd-b78a-49df-b28a-dc2a184a4466/SAI01558-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/056073bb-cf61-4859-8dfa-3514cbab104a/SAI01559-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab0d9ae1-42a6-4cb9-85d2-b3fa08edeb67/SAI01561-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/50184497-1bff-4448-8b07-634afbd42b3f/SAI01562-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/87d618ce-f672-4218-81ba-310d5f260102/SAI01565-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b6fc313-f417-440a-9715-a9ce06605bfa/SAI01566-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6696a80b-4e0b-41db-aa4e-1a09f9d7ad69/SAI01567-2.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "Toni & Elina"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f474c68f-b58b-4524-b6d4-c09512298af0/SAI01570-2.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Toni & Elina"
      }
    ]
  },
  {
    "slug": "yvette-dany",
    "location": "Helsinki, Finland",
    "couple": "Yvette & Dany",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "Yvette & Dany",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b97e327c-91da-466e-84ed-af1e1619f792/DSC01717.jpg",
        "width": 6691,
        "height": 4422,
        "alt": "Yvette & Dany"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c527597-399e-4b0a-8290-8149c8b85089/SAI02082.jpg",
        "width": 4873,
        "height": 3729,
        "alt": "SAI02082.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8727b811-66fb-4ca2-babf-e258057820f0/DSC01730.jpg",
        "width": 5251,
        "height": 4281,
        "alt": "DSC01730.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce35715a-5f8c-468b-9c48-b251ae9ca70a/SAI02083.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI02083.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab5ff789-04db-461b-a474-e523b7c3c8a3/SAI02084.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI02084.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8d61506e-3d03-4a9e-8ac7-ad28d1b2a061/SAI02089.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI02089.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee95baf0-a009-497c-97f5-8ac192b0aa65/DSC01681.jpg",
        "width": 5359,
        "height": 4308,
        "alt": "DSC01681.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1e216db8-7adb-4fec-9677-51d03455c88f/DSC01697.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC01697.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e03fb725-a89a-4174-b19b-7fa44b7b1c62/DSC01717.jpg",
        "width": 6691,
        "height": 4422,
        "alt": "DSC01717.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d9e3f92-e294-49a9-be50-d0491058c46a/DSC01739.jpg",
        "width": 4308,
        "height": 6242,
        "alt": "DSC01739.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e4e5db14-0976-4490-837b-8a99295fc5a1/DSC01742.jpg",
        "width": 4093,
        "height": 6949,
        "alt": "DSC01742.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f527b264-caae-4ef9-b727-648d98b687d0/DSC01764.jpg",
        "width": 4803,
        "height": 3709,
        "alt": "DSC01764.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/17b351eb-c8ba-4140-b31d-496eb6021cc6/DSC01775.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC01775.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/27582607-d215-43c2-9295-9b56563a87e8/DSC01784.jpg",
        "width": 3944,
        "height": 7008,
        "alt": "DSC01784.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f25c600-8bda-4f19-b42f-42fcce62c951/DSC01815.jpg",
        "width": 4220,
        "height": 6120,
        "alt": "DSC01815.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f5147a0-67b0-4627-8051-449ad50339de/DSC01818.jpg",
        "width": 5882,
        "height": 3841,
        "alt": "DSC01818.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fbe92da8-2d44-4f73-8366-3ef6b4e7f1ac/DSC01825.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC01825.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8df2d332-82a6-4629-9c47-f9808bb30ae3/DSC01826.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC01826.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2d307981-4ec8-4dd8-b68a-7f7f23b09de9/DSC01829.jpg",
        "width": 5875,
        "height": 4114,
        "alt": "DSC01829.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/80d6b6c5-1fcc-47b1-9e34-69c5be351475/DSC01906.jpg",
        "width": 4375,
        "height": 6739,
        "alt": "DSC01906.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6dcbb589-0a71-486d-9599-b1d0d6f23703/DSC01908.jpg",
        "width": 4601,
        "height": 6343,
        "alt": "DSC01908.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/db6c9f36-ed49-4de4-93b7-525156fcaac9/DSC01910.jpg",
        "width": 4672,
        "height": 6966,
        "alt": "DSC01910.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44df0743-2a82-47f3-b7a0-7a2787026560/DSC01914.jpg",
        "width": 4662,
        "height": 6499,
        "alt": "DSC01914.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7641685-6ce5-4fdb-9880-d1422f7b01fe/DSC01917.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "DSC01917.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b68f150-1e5b-4829-9b9e-1ff4bdccd9a3/DSC01930.jpg",
        "width": 4916,
        "height": 3944,
        "alt": "DSC01930.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72d25f66-caaf-4899-9c13-863df8768829/DSC01931.jpg",
        "width": 4981,
        "height": 3944,
        "alt": "DSC01931.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1439f7c3-4df8-402d-8c21-36bd7448736a/DSC01936.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC01936.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd10ef9a-b2d2-4152-99ed-f991117f3c13/DSC01944.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC01944.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2f8e25b-ee80-43b4-aa78-de476e468176/DSC01947.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC01947.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e1ba104b-d30f-4f7a-81b6-ef3b9dd0483c/DSC02210.jpg",
        "width": 4163,
        "height": 5636,
        "alt": "DSC02210.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f809c177-65ad-40df-a098-5a30902f2c29/DSC01954.jpg",
        "width": 5585,
        "height": 3209,
        "alt": "DSC01954.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ed0e3c5-5f67-4de9-8587-1e1bb7e03762/DSC01956.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "DSC01956.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f15ade9f-bf82-407a-97e5-4d3cb2b51e2a/DSC01959.jpg",
        "width": 3728,
        "height": 2718,
        "alt": "DSC01959.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/43734df5-ca6f-482c-9e07-c72a1f3aac59/DSC01972.jpg",
        "width": 4153,
        "height": 5113,
        "alt": "DSC01972.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0b4ee9f5-896f-4a43-9b87-e84daa12ef95/DSC01973.jpg",
        "width": 3549,
        "height": 4308,
        "alt": "DSC01973.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5c147dad-7eac-4e19-bd8d-914833225d0a/DSC01980.jpg",
        "width": 5905,
        "height": 3525,
        "alt": "DSC01980.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77a6e1d9-ca3b-4e63-9901-a3dd3705680e/DSC01985.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC01985.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3d61a662-ad82-4d72-9152-399feefdd501/DSC01991.jpg",
        "width": 6263,
        "height": 3714,
        "alt": "DSC01991.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/298f5e15-8b3d-42b5-bfaa-05ac0df62dd6/DSC01992.jpg",
        "width": 5161,
        "height": 4082,
        "alt": "DSC01992.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34ff8ecd-00ae-468a-b284-edf6656f07cf/DSC01993.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC01993.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92634ba1-89c8-42b3-9433-b3412f23bed8/DSC01994.jpg",
        "width": 5349,
        "height": 4204,
        "alt": "DSC01994.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3be123c7-8d94-4934-9189-b4f4acc4d8a3/DSC01999.jpg",
        "width": 5905,
        "height": 4308,
        "alt": "DSC01999.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4309241a-d6aa-4d41-89c9-c89b4634d1ee/DSC02011.jpg",
        "width": 2521,
        "height": 3516,
        "alt": "DSC02011.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2089f692-db7f-447c-9d97-a4ae36e67467/DSC02024.jpg",
        "width": 3992,
        "height": 4672,
        "alt": "DSC02024.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b30a7b8-4969-446f-8f37-65a22c94bc7d/DSC02029.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02029.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d298385a-a09a-423d-8f63-94f22f71ee59/DSC02032.jpg",
        "width": 3586,
        "height": 4308,
        "alt": "DSC02032.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7487f15a-0eb2-4904-a192-4b3a969483e8/DSC02046.jpg",
        "width": 4576,
        "height": 3312,
        "alt": "DSC02046.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b1177ad2-1cec-4922-9722-01f4275ef958/DSC02071.jpg",
        "width": 5406,
        "height": 3944,
        "alt": "DSC02071.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/143f24b3-59d5-463a-91d6-4cf185ef2b32/DSC02080.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02080.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/63380974-9dbb-4680-9b87-060fe611f0f5/DSC02095.jpg",
        "width": 6311,
        "height": 4308,
        "alt": "DSC02095.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89400279-5935-49be-bb03-412a0b30350c/DSC02104.jpg",
        "width": 4227,
        "height": 6428,
        "alt": "DSC02104.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf041e04-43c8-416a-b480-e414bdcf8672/DSC02108.jpg",
        "width": 5886,
        "height": 4198,
        "alt": "DSC02108.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1a26bb2f-639d-47f4-abd0-21359250c94c/DSC02114.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02114.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a1bc818-de55-40df-a618-111e488cc63d/DSC02119.jpg",
        "width": 3626,
        "height": 4505,
        "alt": "DSC02119.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/093dab58-d899-4469-b9bf-02e42243d458/DSC02124.jpg",
        "width": 5377,
        "height": 3755,
        "alt": "DSC02124.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e5407a0e-563c-469f-a496-33e876a763d9/DSC02149.jpg",
        "width": 5085,
        "height": 4010,
        "alt": "DSC02149.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c90f579a-bfc4-4ba3-8d39-bbbaa71843cc/DSC02158.jpg",
        "width": 3559,
        "height": 5325,
        "alt": "DSC02158.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f8479f3-4d8d-473f-94ef-67e58fdda5a0/DSC02178.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02178.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2d6a8531-a4a4-4a0e-91de-5d5f7ca9f5f8/DSC02181.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02181.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b74880f-a68c-43e1-9580-9e412599d4d7/DSC02186.jpg",
        "width": 5189,
        "height": 3944,
        "alt": "DSC02186.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ea5ef960-7263-4ef9-a860-ea3df1593a79/DSC02201.jpg",
        "width": 5547,
        "height": 4506,
        "alt": "DSC02201.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/313c70c4-c76c-43ec-a3b5-fbf7575b57bf/DSC02267.jpg",
        "width": 5717,
        "height": 3727,
        "alt": "DSC02267.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e277cccd-95f7-4c0e-afd3-1982a394d535/DSC02268.jpg",
        "width": 4906,
        "height": 3969,
        "alt": "DSC02268.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93b57ae6-b890-4329-aa5b-54ef1dacc2f8/DSC02269.jpg",
        "width": 6235,
        "height": 3969,
        "alt": "DSC02269.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/17a50af4-a9a5-4248-b452-c18589a76b14/DSC02272.jpg",
        "width": 3521,
        "height": 3818,
        "alt": "DSC02272.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec45bbcf-8322-4c57-8bdd-ccf441a98831/DSC02293.jpg",
        "width": 5276,
        "height": 4087,
        "alt": "DSC02293.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5e99934-fce9-4077-9282-9ec60255ef4b/DSC02295.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02295.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6497a925-b1f2-4f12-88dd-2f155ceebf53/DSC02296.jpg",
        "width": 3285,
        "height": 4308,
        "alt": "DSC02296.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62c68e45-70c9-466f-8f65-1a99e1705166/DSC02305.jpg",
        "width": 3718,
        "height": 5466,
        "alt": "DSC02305.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bfd5486c-3a50-4b07-896e-f172761722f4/DSC02311.jpg",
        "width": 3743,
        "height": 5919,
        "alt": "DSC02311.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0ad9ccb-2f80-4025-ad9a-4fd158975f11/DSC02317.jpg",
        "width": 4163,
        "height": 6089,
        "alt": "DSC02317.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8bce79da-571e-4ab4-b31c-54807c0dde2f/DSC02314.jpg",
        "width": 4489,
        "height": 6471,
        "alt": "DSC02314.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88e47c82-6fc4-4ac9-85f4-2db0e4670785/DSC02319.jpg",
        "width": 2806,
        "height": 3911,
        "alt": "DSC02319.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f53b7ee4-3f4e-427c-82fc-d71a3bb00819/DSC02324.jpg",
        "width": 2792,
        "height": 3642,
        "alt": "DSC02324.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8d74e125-c880-4831-934a-9fc3f9cfa445/DSC02325.jpg",
        "width": 4365,
        "height": 6160,
        "alt": "DSC02325.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/02abe7a4-a53f-4918-a900-c9381543232e/DSC02336.jpg",
        "width": 5113,
        "height": 3280,
        "alt": "DSC02336.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0adf5e29-750b-402b-91d8-714fa7299f58/DSC02370.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "DSC02370.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f95ce5c2-18e6-46b8-8cb9-2f4a545ed0b6/DSC02372.jpg",
        "width": 4672,
        "height": 5933,
        "alt": "DSC02372.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d825c4aa-650a-4cfc-8b9b-999b9b916e86/DSC02378.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02378.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a082130b-fd5b-4b53-8b76-adbfdd241436/DSC02384.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02384.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8fb42369-8f72-4d60-a9da-0b77a95c5c25/DSC02394.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02394.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5475603-356a-4717-b189-4c05c67b1b1f/DSC02401.jpg",
        "width": 3884,
        "height": 5452,
        "alt": "DSC02401.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec953de1-551c-42c5-89a4-d83060d75da1/DSC02402.jpg",
        "width": 2228,
        "height": 3362,
        "alt": "DSC02402.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a3f9c3b-b8da-4538-9684-f958784e90d2/DSC02409.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02409.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b29b06a-858d-4ea3-b1f4-8a33cd2aa769/DSC02418.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02418.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26dfa767-589f-4dab-bb14-eda8ba27c97d/DSC02420.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02420.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc6a3142-452e-4fd1-91e7-1a4dc19dd71e/DSC02426.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02426.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/97f3f15c-bf9b-48fa-8fd0-7420c2c27f20/DSC02427.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02427.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/229413b3-0db7-47ed-aa38-16ef92df2a60/DSC02428.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02428.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/651fc59f-6c23-4cba-9c6a-deecd3702a64/DSC02430.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02430.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/811defdb-2f74-47ea-a02d-670c3d8ec38c/DSC02449.jpg",
        "width": 4974,
        "height": 2798,
        "alt": "DSC02449.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1498193-b525-4355-b2ab-3df9e54ab48d/DSC02451.jpg",
        "width": 5830,
        "height": 3761,
        "alt": "DSC02451.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/998d0457-19ec-4045-af70-3355de6925d8/DSC02458.jpg",
        "width": 5462,
        "height": 3652,
        "alt": "DSC02458.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f71be1b2-d4bf-47a5-8760-a567ccda0be5/DSC02460.jpg",
        "width": 4916,
        "height": 3375,
        "alt": "DSC02460.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3f8bb5d-1f3e-46cd-b333-d84369519e05/DSC02465.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02465.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b4e86065-cfe2-464f-8c10-3e7fe97fcd25/DSC02470.jpg",
        "width": 1810,
        "height": 3034,
        "alt": "DSC02470.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0dbeb4e7-650d-4989-9647-fa91ddb56d3c/DSC02473.jpg",
        "width": 4120,
        "height": 2318,
        "alt": "DSC02473.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/04b154ce-0a9f-47aa-95f1-7adfa18f765e/DSC02474.jpg",
        "width": 4312,
        "height": 3312,
        "alt": "DSC02474.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2c67db2-70ff-43e3-a233-b139eccaf6e5/DSC02476.jpg",
        "width": 5179,
        "height": 3793,
        "alt": "DSC02476.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aad51654-b275-4ecf-8d4d-cf7d39ae1e0d/DSC02477.jpg",
        "width": 7008,
        "height": 3388,
        "alt": "DSC02477.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b6c9f8c-e1cd-47eb-b770-0d3b1e6b5bba/DSC02481.jpg",
        "width": 5509,
        "height": 3099,
        "alt": "DSC02481.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5ec07815-3dbb-4982-9046-0f83673541bd/DSC02493.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02493.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34a8eb0f-cbe3-494f-b5af-b07d9f6bcfbb/DSC02509.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02509.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/41f96643-40bd-4208-ab11-c397cca9fac2/DSC02516.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02516.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a569886c-da2a-4f05-b128-b23865b272bd/DSC02571.jpg",
        "width": 4584,
        "height": 6104,
        "alt": "DSC02571.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/25faf68c-0177-4f7c-8bbf-89cc8e13c824/DSC02572.jpg",
        "width": 5558,
        "height": 3205,
        "alt": "DSC02572.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cd4a243e-29ab-4906-abbb-0b6b6ce3a9ee/DSC02573.jpg",
        "width": 6855,
        "height": 3614,
        "alt": "DSC02573.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c17b9c8b-636c-499f-87c5-06b06544ab10/DSC02578.jpg",
        "width": 4672,
        "height": 5691,
        "alt": "DSC02578.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/45b3a64c-04b8-494b-b17a-903629717530/DSC02581.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02581.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b8f9355a-e4da-4265-818d-bb10af890787/DSC02588.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02588.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61293543-2d55-4105-bf4d-feb3c5e71b61/DSC02597.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02597.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc8bba3f-40e3-429f-bf9e-529fa9f18a8e/DSC02601.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "DSC02601.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/347b2c8c-f15e-4905-a1e1-033e4baf52a2/DSC02628.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02628.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b3b80549-cfac-48da-a82f-7093a016f554/DSC02629.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "DSC02629.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7128f998-6a0c-474d-806f-d4b09803bbf0/DSC02630.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "DSC02630.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b1e6abd9-7fa3-413e-956f-ae5ee0e71a50/DSC02631.jpg",
        "width": 5334,
        "height": 3644,
        "alt": "DSC02631.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c233af10-dee1-4e09-ba01-f53ac22f8363/DSC02632.jpg",
        "width": 6334,
        "height": 4124,
        "alt": "DSC02632.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e0bcf42-4c96-4b9f-95d7-d2fc1c87407d/DSC02633.jpg",
        "width": 5252,
        "height": 3607,
        "alt": "DSC02633.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72cf06f4-87dc-431f-8de7-db8131cb021c/DSC02636.jpg",
        "width": 3946,
        "height": 2637,
        "alt": "DSC02636.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ea2feb53-fa0f-4b6f-b865-8dc889b60715/DSC02641.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02641.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fffe649c-5cb7-48b6-8f86-428d7b387e92/DSC02644.jpg",
        "width": 4650,
        "height": 3781,
        "alt": "DSC02644.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c910208-e541-4d3f-9277-98395207bf2b/DSC02649.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02649.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/627df7ce-e893-4b10-9d70-55f74c2c3c91/DSC02659.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02659.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ea998fb-dcad-42eb-9586-d465bbcbe938/DSC02662.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC02662.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1cb5f475-7099-40b9-8c21-97a8a765cfa0/DSC02663.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "DSC02663.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1828f22e-e3ee-4968-8369-db90ad151dfe/DSC02668.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "DSC02668.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89c60a7b-7d87-4306-8405-6181fd939d28/SAI01763.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI01763.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f51a9084-edd0-4ad7-8a61-5b52e7b69e97/SAI01764.jpg",
        "width": 3274,
        "height": 4511,
        "alt": "SAI01764.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5cbe0c62-c5eb-4c45-864a-ff36c7899d15/SAI01767.jpg",
        "width": 3734,
        "height": 4789,
        "alt": "SAI01767.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58063353-6f56-4e5a-a493-6c53d65d007a/SAI01774.jpg",
        "width": 3685,
        "height": 5116,
        "alt": "SAI01774.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94efc65a-a4dc-4d3f-ac9c-5071bb176a66/SAI01785.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01785.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/20b3b6fc-c1a7-462f-87f6-003c2bf4a64c/SAI01786.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01786.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a381d11f-646e-43dc-9c7b-db40d4ac79c6/SAI01797.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01797.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23942235-a239-49b8-8fed-e096ff79663a/SAI01798.jpg",
        "width": 5137,
        "height": 4000,
        "alt": "SAI01798.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e4384237-d430-4847-a083-52b51c601c88/SAI01803.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI01803.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/559cd8fe-3a08-468d-afa8-a4e74565a154/SAI01804.jpg",
        "width": 4919,
        "height": 3249,
        "alt": "SAI01804.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/59bc957e-789f-46cf-a568-ec8ae9c6da5b/SAI01806.jpg",
        "width": 3637,
        "height": 4789,
        "alt": "SAI01806.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/889a4e49-5ec8-4bfd-a91f-75dba2d6dd90/SAI01808.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01808.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9aa7cee4-899a-4ff8-b269-0e7602cd046f/SAI01810.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01810.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2c46288a-d666-4df4-9238-6144f0104d7b/SAI01811.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01811.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/685639ad-dbd3-4496-bc58-69d1984c4fc1/SAI01812.jpg",
        "width": 3442,
        "height": 5381,
        "alt": "SAI01812.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/01151164-af13-479b-8767-72ff60e1055d/SAI01814.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01814.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc26f81e-06cb-41df-a6bd-c3cf67ad8967/SAI01817.jpg",
        "width": 5258,
        "height": 4000,
        "alt": "SAI01817.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b326a311-5cf7-4761-843a-ab7de7816bd3/SAI01818.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01818.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c2070719-37e3-4500-9db9-98b64e8ad2d9/SAI01819.jpg",
        "width": 5290,
        "height": 3362,
        "alt": "SAI01819.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6fc41fd1-36c5-457e-a450-d8c3407b8d2a/SAI01823.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI01823.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5ee809e5-26c9-4714-94a0-82d090068bc5/SAI01824.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI01824.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e849ae78-b929-4a40-818f-03b37856e070/SAI01825.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI01825.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/042798ab-fa4e-4d22-a4a6-d38490e6e7fc/SAI01832.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01832.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8495dd07-a868-4c68-98bf-6578e4a577f8/SAI01834.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI01834.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/882de434-ccd0-401d-9e8b-c10e309759d9/SAI01837.jpg",
        "width": 4000,
        "height": 5455,
        "alt": "Sun-drenched Wedding Portrait"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19ebf75f-d2ad-42df-9308-ae948003fd03/SAI01902.jpg",
        "width": 5702,
        "height": 3354,
        "alt": "Artistic Groom Detail"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0cfca7f9-5893-4d9d-bead-84cb75cb43eb/SAI01906.jpg",
        "width": 5028,
        "height": 3387,
        "alt": "Cinematic Reception Lighting"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5877329-fea2-49f4-bdfd-d45776d700da/SAI01908.jpg",
        "width": 5545,
        "height": 3387,
        "alt": "Joyful Toasts and Speeches"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/37009a2f-7587-4a79-b4ca-fe60007ede11/SAI01911.jpg",
        "width": 1296,
        "height": 1732,
        "alt": "Elegant Table Settings"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/933cbf17-537e-42fe-ae47-9e9f892d6df1/SAI01916.jpg",
        "width": 5698,
        "height": 3508,
        "alt": "Heartfelt Wedding Toast"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/87111408-6cfa-4db4-8f52-f92e34a4672b/SAI01921.jpg",
        "width": 4000,
        "height": 5588,
        "alt": "SAI01921.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2b455aa-be94-4569-b18d-d5c1b8d154be/SAI01923.jpg",
        "width": 4000,
        "height": 5080,
        "alt": "SAI01923.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/67451b8a-0050-416a-8d17-37b0bae0d3a6/SAI01933.jpg",
        "width": 5636,
        "height": 3509,
        "alt": "SAI01933.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2337ca89-6acd-44c4-bb59-a82b9e1803af/SAI01937.jpg",
        "width": 3751,
        "height": 5813,
        "alt": "SAI01937.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b1c6d96-e888-4cdb-a7f4-955cfa33f239/SAI01939.jpg",
        "width": 5906,
        "height": 3937,
        "alt": "SAI01939.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c50dc68e-b61a-4a68-b980-5ad33a659d1c/SAI01970.jpg",
        "width": 3030,
        "height": 3572,
        "alt": "SAI01970.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a588d31-5b5b-4afd-8467-84d7324baab2/SAI01971.jpg",
        "width": 4257,
        "height": 3573,
        "alt": "SAI01971.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a92910da-82de-43d9-b3ff-357001dec210/SAI01972.jpg",
        "width": 6000,
        "height": 3572,
        "alt": "SAI01972.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7d19322c-7d96-4396-8a47-c3bd83dc25f3/SAI01977.jpg",
        "width": 6000,
        "height": 3572,
        "alt": "SAI01977.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/767b8cde-204b-4ba7-b979-a6a100409397/SAI02039.jpg",
        "width": 4000,
        "height": 5528,
        "alt": "SAI02039.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d35cad9-7271-49e0-9adf-435d1b20dc31/SAI02040.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI02040.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/effe955f-7ef4-457f-a740-3fa10d4488ec/SAI02042.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI02042.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f376339-71b3-4072-94da-f78f9738b8f6/SAI02043.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI02043.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1076f8b3-8e75-43ac-8ce1-adff4b4b04aa/SAI02045.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI02045.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aeb87dea-5678-43ef-93df-713b4ba53d6d/SAI02053.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI02053.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5fe6ff75-5b01-48bb-a0d4-fb2c4acdcae8/SAI02057.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI02057.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dafa72e4-b67d-47bd-9494-d7c4b6a3fcb4/SAI02058.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI02058.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f85d976a-ac5b-417d-936e-01e0437b2f99/SAI02062.jpg",
        "width": 3135,
        "height": 4138,
        "alt": "SAI02062.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/30c4a900-643f-4ec4-9ccc-30d3eac965ca/SAI02063.jpg",
        "width": 3423,
        "height": 4964,
        "alt": "SAI02063.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e31e12f-4634-4b24-ba55-1dce8ff92cc6/SAI02064.jpg",
        "width": 3632,
        "height": 4911,
        "alt": "SAI02064.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79d6b7d7-37fb-487b-97b0-37b0a8d56a8d/SAI02065.jpg",
        "width": 3200,
        "height": 4793,
        "alt": "SAI02065.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/64f8e3c8-5aeb-445f-83a9-370b61854694/SAI02067.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI02067.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ffc3e5ae-3771-411e-ba38-034deb7d48d8/SAI02075.jpg",
        "width": 4000,
        "height": 6000,
        "alt": "SAI02075.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7ac9310a-afd6-462f-a437-087134d0056d/SAI02077.jpg",
        "width": 3606,
        "height": 5331,
        "alt": "SAI02077.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ba41eee3-9d0f-4649-9c40-67e804e5cf10/SAI02078.jpg",
        "width": 3764,
        "height": 5449,
        "alt": "SAI02078.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a819ab2d-288e-4b08-b3a8-08782827e14f/SAI02081.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "SAI02081.jpg"
      }
    ]
  },
  {
    "slug": "project-two-ky966-8xweg",
    "location": "Helsinki, Finland",
    "couple": "Project & Two & Ky966 & 8xweg",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "O & N",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16428cb4-d09f-4f28-b219-e7092bd8184b/DSC09836.jpg",
        "width": 6919,
        "height": 3894,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9cfd8972-9d6e-4db8-af95-f205d80dfc25/DSC09513.jpg",
        "width": 3840,
        "height": 3954,
        "alt": "DSC09513.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53bd2da8-ffe0-4c5e-b4cf-a433693ffbc5/DSC09424.jpg",
        "width": 4737,
        "height": 4308,
        "alt": "DSC09424.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b6f7f326-5272-4e12-bb0f-d915a26d3759/DSC09980.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09980.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/db5bcb65-66b3-48b0-a6d9-6a553d36ac0a/DSC00340.jpg",
        "width": 4173,
        "height": 6623,
        "alt": "DSC00340.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de9988fa-feac-4016-829e-5e056d90c259/DSC09752.jpg",
        "width": 3944,
        "height": 7008,
        "alt": "DSC09752.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f272df40-fd8c-4c48-b1d6-99fb170d0b86/DSC09373.jpg",
        "width": 5769,
        "height": 3882,
        "alt": "DSC09373.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfe0dfc2-15ea-4929-9a89-103a4b72588e/DSC09380.jpg",
        "width": 2326,
        "height": 3794,
        "alt": "DSC09380.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a6bd93be-c2c8-4da2-93b4-8a4e6ade54bf/DSC00324-Enhanced-NR-2.jpg",
        "width": 4672,
        "height": 6828,
        "alt": "DSC00324-Enhanced-NR-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/31f7baf1-5dcd-4b12-94f2-6f6ede8a8181/DSC09439.jpg",
        "width": 3014,
        "height": 3955,
        "alt": "DSC09439.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aebe50dd-2b86-4b2b-91e7-cca1182f4809/DSC09590.jpg",
        "width": 4183,
        "height": 6163,
        "alt": "DSC09590.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0c29dae7-8d33-4e54-bac0-f34ee3a4feb3/DSC09592.jpg",
        "width": 6048,
        "height": 4308,
        "alt": "DSC09592.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/632ca6c8-d024-42cd-a38f-8e16028df22c/DSC09476.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09476.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be060712-d7bd-4b55-bee7-e88bd7e3d762/DSC09478.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09478.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0061803-9936-4b94-a875-084ce59f3d2f/DSC09497.jpg",
        "width": 4498,
        "height": 6660,
        "alt": "DSC09497.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36899ac1-644f-429d-a873-9005c2f7cf2b/DSC09501.jpg",
        "width": 4019,
        "height": 5173,
        "alt": "DSC09501.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/256cff4d-5045-4817-971c-c43715d58a55/DSC09555.jpg",
        "width": 6918,
        "height": 3944,
        "alt": "DSC09555.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0cea6613-e6f1-4cf7-8da8-f06e0deb49c8/DSC09565.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09565.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b4aff12-012f-4eee-b3cb-70c424f949af/DSC09628.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09628.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22b685a2-f148-453b-81d4-559c883b02fa/DSC09629.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09629.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cbb51608-5aa1-4c30-b0fc-378c90f555be/DSC09637.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09637.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc81b884-d554-4e7b-b884-d638821e2cda/DSC09675.jpg",
        "width": 6916,
        "height": 3892,
        "alt": "DSC09675.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c92ab2be-05dd-4cd6-b7ec-12381fbedce9/DSC09688.jpg",
        "width": 6751,
        "height": 3944,
        "alt": "DSC09688.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/beca88e1-1dd7-4b59-9196-d14dec253e98/DSC09696-Enhanced-NR.jpg",
        "width": 4481,
        "height": 6491,
        "alt": "DSC09696-Enhanced-NR.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc44ec94-4ba8-460b-9c2b-381ae2d7b071/DSC09698.jpg",
        "width": 4624,
        "height": 7008,
        "alt": "DSC09698.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a56bc1a6-d758-4f78-8438-221041efe615/DSC09708.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09708.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68cbb1fb-3286-47fc-b8b8-f063e0602497/DSC09709.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09709.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cd50c943-4b8f-406d-a230-c64ed76ee055/DSC09714.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09714.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce291d99-b752-4958-97ca-89cd62cf3d8d/DSC09727.jpg",
        "width": 7008,
        "height": 4589,
        "alt": "DSC09727.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56a5ec2b-f68d-461e-bf31-6dd5c8d3f265/DSC09740.jpg",
        "width": 4672,
        "height": 6948,
        "alt": "DSC09740.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e203db01-7e65-4fc9-895e-cff770db3ea9/DSC09744.jpg",
        "width": 4237,
        "height": 6281,
        "alt": "DSC09744.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6534b5d4-3c0e-49f4-91c6-889b0420082f/DSC09750.jpg",
        "width": 4205,
        "height": 6308,
        "alt": "DSC09750.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b36eee43-54b2-4b5f-851f-05b0a1dad681/DSC09800.jpg",
        "width": 5033,
        "height": 3810,
        "alt": "DSC09800.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/59ef7c39-1986-486a-aa59-a40497be8d1d/DSC09801.jpg",
        "width": 4612,
        "height": 5915,
        "alt": "DSC09801.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f94e5a1-660d-48ff-982b-f1a86f4cf31f/DSC09817.jpg",
        "width": 1779,
        "height": 2256,
        "alt": "DSC09817.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e6bc94e3-b854-4bfd-81c2-5456a4f12fa9/DSC09880.jpg",
        "width": 4669,
        "height": 6888,
        "alt": "DSC09880.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2d74247b-5ebb-4356-9419-a0bd7217be70/DSC09819.jpg",
        "width": 2349,
        "height": 3023,
        "alt": "DSC09819.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16428cb4-d09f-4f28-b219-e7092bd8184b/DSC09836.jpg",
        "width": 6919,
        "height": 3894,
        "alt": "DSC09836.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bab813f-9f33-4198-864f-9bfb29f2b172/DSC09871.jpg",
        "width": 6728,
        "height": 4190,
        "alt": "DSC09871.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b2a242af-0cbb-40a9-b869-39a792c470e2/DSC09889.jpg",
        "width": 6587,
        "height": 4672,
        "alt": "DSC09889.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/022eadb9-b217-495c-ae2b-24a1ff3dc515/DSC09896-Edit.jpg",
        "width": 3168,
        "height": 3021,
        "alt": "DSC09896-Edit.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f24907fb-1c9a-4f5f-9adb-b67910e5ef95/DSC09905.jpg",
        "width": 4413,
        "height": 6015,
        "alt": "DSC09905.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd6a32b8-e986-46b5-9dad-b900a25b998a/DSC09911.jpg",
        "width": 4218,
        "height": 6482,
        "alt": "DSC09911.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f7c6c07e-3423-4c75-b74f-06e65df48f3e/DSC09927.jpg",
        "width": 4624,
        "height": 6692,
        "alt": "DSC09927.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/31737727-e165-4a83-8fbd-b566559b7c00/DSC09992.jpg",
        "width": 6427,
        "height": 3967,
        "alt": "DSC09992.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b8277ac-7d47-49ea-8999-e1a8dc710af9/DSC09929.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "DSC09929.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ad4beaa5-db4f-413c-a58b-952fece7000c/DSC09937.jpg",
        "width": 4338,
        "height": 6722,
        "alt": "DSC09937.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c7027318-db37-463c-b2e6-28ed9a76becf/DSC09938.jpg",
        "width": 4428,
        "height": 6737,
        "alt": "DSC09938.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76205dc2-07de-40d0-aa27-c5376ca50131/DSC09944.jpg",
        "width": 4383,
        "height": 6752,
        "alt": "DSC09944.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dd4d7757-6de4-48ef-97e1-496f7ef10aff/DSC09949.jpg",
        "width": 4639,
        "height": 6361,
        "alt": "DSC09949.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9952794e-0262-4594-bb44-179bc30063f2/DSC09951.jpg",
        "width": 4308,
        "height": 6963,
        "alt": "DSC09951.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f66c352b-763e-4b9d-be22-22ac27c4ad3c/DSC09957.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09957.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3b8f27c-c0e1-454e-9fab-4c149d339ef3/DSC09962.jpg",
        "width": 4669,
        "height": 6587,
        "alt": "DSC09962.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8eef8bb1-5dd5-47b7-b453-1d177050c79d/DSC09963.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "DSC09963.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0cd6e922-b71a-43cc-a0cb-88c7d57dda93/DSC09982.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC09982.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b783e2d7-ce69-4d94-8f1b-34d7d2128af6/DSC09991.jpg",
        "width": 6372,
        "height": 3919,
        "alt": "DSC09991.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2841e7ed-e34e-4492-9178-9da3ded8d87d/DSC09347.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "DSC09347.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4209d835-c2e7-4980-8784-8c23ebb5255c/DSC09994.jpg",
        "width": 6858,
        "height": 4572,
        "alt": "DSC09994.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f604dd1-30c7-4579-abcb-c927da7179ac/DSC00006.jpg",
        "width": 6868,
        "height": 4536,
        "alt": "DSC00006.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c752819-f5c6-484e-91ee-05c6f28498e3/DSC00330.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC00330.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9a4663e1-cf84-4212-ad83-11e0e2eeaba1/DSC00017.jpg",
        "width": 4476,
        "height": 6226,
        "alt": "DSC00017.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/685a9ad8-799d-4911-8e9a-60670fe71dcd/DSC00042.jpg",
        "width": 4083,
        "height": 5264,
        "alt": "DSC00042.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2c35e21f-b256-41a0-99a2-b3fb2f8fc382/DSC00099.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC00099.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6987bc27-eac3-49c5-a908-359c629f623c/DSC00110.jpg",
        "width": 4443,
        "height": 6767,
        "alt": "DSC00110.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3890881e-7046-446b-8f80-4a781298778d/DSC00115.jpg",
        "width": 4636,
        "height": 6166,
        "alt": "DSC00115.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6228693e-c99e-418d-a5d6-15f12abee906/DSC00117.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC00117.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ebdd846-8425-4594-b3ea-30e22f90f5eb/DSC00138-Enhanced-NR.jpg",
        "width": 4441,
        "height": 4308,
        "alt": "DSC00138-Enhanced-NR.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d69fdc24-d6d8-4031-8e85-fca8e0e538b5/DSC00141-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC00141-Enhanced-NR.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a01cd6d-449b-4091-b415-78a3484cda0d/DSC00144.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC00144.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf76f4c2-578f-446a-b6fc-99653b69e962/DSC00271-Enhanced-NR.jpg",
        "width": 4672,
        "height": 6808,
        "alt": "DSC00271-Enhanced-NR.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58d114a0-4a00-4022-928c-0b5f70ac1065/DSC00283-Enhanced-NR.jpg",
        "width": 4349,
        "height": 5781,
        "alt": "DSC00283-Enhanced-NR.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f59f29d5-3c80-4729-a123-6b307f586b5b/DSC00304.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "DSC00304.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9cfd8972-9d6e-4db8-af95-f205d80dfc25/DSC09513.jpg",
        "width": 3840,
        "height": 3954,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53bd2da8-ffe0-4c5e-b4cf-a433693ffbc5/DSC09424.jpg",
        "width": 4737,
        "height": 4308,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b6f7f326-5272-4e12-bb0f-d915a26d3759/DSC09980.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/db5bcb65-66b3-48b0-a6d9-6a553d36ac0a/DSC00340.jpg",
        "width": 4173,
        "height": 6623,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de9988fa-feac-4016-829e-5e056d90c259/DSC09752.jpg",
        "width": 3944,
        "height": 7008,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f272df40-fd8c-4c48-b1d6-99fb170d0b86/DSC09373.jpg",
        "width": 5769,
        "height": 3882,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfe0dfc2-15ea-4929-9a89-103a4b72588e/DSC09380.jpg",
        "width": 2326,
        "height": 3794,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a6bd93be-c2c8-4da2-93b4-8a4e6ade54bf/DSC00324-Enhanced-NR-2.jpg",
        "width": 4672,
        "height": 6828,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/31f7baf1-5dcd-4b12-94f2-6f6ede8a8181/DSC09439.jpg",
        "width": 3014,
        "height": 3955,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aebe50dd-2b86-4b2b-91e7-cca1182f4809/DSC09590.jpg",
        "width": 4183,
        "height": 6163,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0c29dae7-8d33-4e54-bac0-f34ee3a4feb3/DSC09592.jpg",
        "width": 6048,
        "height": 4308,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/632ca6c8-d024-42cd-a38f-8e16028df22c/DSC09476.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be060712-d7bd-4b55-bee7-e88bd7e3d762/DSC09478.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0061803-9936-4b94-a875-084ce59f3d2f/DSC09497.jpg",
        "width": 4498,
        "height": 6660,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36899ac1-644f-429d-a873-9005c2f7cf2b/DSC09501.jpg",
        "width": 4019,
        "height": 5173,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/256cff4d-5045-4817-971c-c43715d58a55/DSC09555.jpg",
        "width": 6918,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0cea6613-e6f1-4cf7-8da8-f06e0deb49c8/DSC09565.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b4aff12-012f-4eee-b3cb-70c424f949af/DSC09628.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22b685a2-f148-453b-81d4-559c883b02fa/DSC09629.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cbb51608-5aa1-4c30-b0fc-378c90f555be/DSC09637.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc81b884-d554-4e7b-b884-d638821e2cda/DSC09675.jpg",
        "width": 6916,
        "height": 3892,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c92ab2be-05dd-4cd6-b7ec-12381fbedce9/DSC09688.jpg",
        "width": 6751,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/beca88e1-1dd7-4b59-9196-d14dec253e98/DSC09696-Enhanced-NR.jpg",
        "width": 4481,
        "height": 6491,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc44ec94-4ba8-460b-9c2b-381ae2d7b071/DSC09698.jpg",
        "width": 4624,
        "height": 7008,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a56bc1a6-d758-4f78-8438-221041efe615/DSC09708.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68cbb1fb-3286-47fc-b8b8-f063e0602497/DSC09709.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cd50c943-4b8f-406d-a230-c64ed76ee055/DSC09714.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce291d99-b752-4958-97ca-89cd62cf3d8d/DSC09727.jpg",
        "width": 7008,
        "height": 4589,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56a5ec2b-f68d-461e-bf31-6dd5c8d3f265/DSC09740.jpg",
        "width": 4672,
        "height": 6948,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e203db01-7e65-4fc9-895e-cff770db3ea9/DSC09744.jpg",
        "width": 4237,
        "height": 6281,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6534b5d4-3c0e-49f4-91c6-889b0420082f/DSC09750.jpg",
        "width": 4205,
        "height": 6308,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b36eee43-54b2-4b5f-851f-05b0a1dad681/DSC09800.jpg",
        "width": 5033,
        "height": 3810,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/59ef7c39-1986-486a-aa59-a40497be8d1d/DSC09801.jpg",
        "width": 4612,
        "height": 5915,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f94e5a1-660d-48ff-982b-f1a86f4cf31f/DSC09817.jpg",
        "width": 1779,
        "height": 2256,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e6bc94e3-b854-4bfd-81c2-5456a4f12fa9/DSC09880.jpg",
        "width": 4669,
        "height": 6888,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2d74247b-5ebb-4356-9419-a0bd7217be70/DSC09819.jpg",
        "width": 2349,
        "height": 3023,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16428cb4-d09f-4f28-b219-e7092bd8184b/DSC09836.jpg",
        "width": 6919,
        "height": 3894,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bab813f-9f33-4198-864f-9bfb29f2b172/DSC09871.jpg",
        "width": 6728,
        "height": 4190,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b2a242af-0cbb-40a9-b869-39a792c470e2/DSC09889.jpg",
        "width": 6587,
        "height": 4672,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/022eadb9-b217-495c-ae2b-24a1ff3dc515/DSC09896-Edit.jpg",
        "width": 3168,
        "height": 3021,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f24907fb-1c9a-4f5f-9adb-b67910e5ef95/DSC09905.jpg",
        "width": 4413,
        "height": 6015,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd6a32b8-e986-46b5-9dad-b900a25b998a/DSC09911.jpg",
        "width": 4218,
        "height": 6482,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f7c6c07e-3423-4c75-b74f-06e65df48f3e/DSC09927.jpg",
        "width": 4624,
        "height": 6692,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/31737727-e165-4a83-8fbd-b566559b7c00/DSC09992.jpg",
        "width": 6427,
        "height": 3967,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b8277ac-7d47-49ea-8999-e1a8dc710af9/DSC09929.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ad4beaa5-db4f-413c-a58b-952fece7000c/DSC09937.jpg",
        "width": 4338,
        "height": 6722,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c7027318-db37-463c-b2e6-28ed9a76becf/DSC09938.jpg",
        "width": 4428,
        "height": 6737,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76205dc2-07de-40d0-aa27-c5376ca50131/DSC09944.jpg",
        "width": 4383,
        "height": 6752,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dd4d7757-6de4-48ef-97e1-496f7ef10aff/DSC09949.jpg",
        "width": 4639,
        "height": 6361,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9952794e-0262-4594-bb44-179bc30063f2/DSC09951.jpg",
        "width": 4308,
        "height": 6963,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f66c352b-763e-4b9d-be22-22ac27c4ad3c/DSC09957.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3b8f27c-c0e1-454e-9fab-4c149d339ef3/DSC09962.jpg",
        "width": 4669,
        "height": 6587,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8eef8bb1-5dd5-47b7-b453-1d177050c79d/DSC09963.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0cd6e922-b71a-43cc-a0cb-88c7d57dda93/DSC09982.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b783e2d7-ce69-4d94-8f1b-34d7d2128af6/DSC09991.jpg",
        "width": 6372,
        "height": 3919,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2841e7ed-e34e-4492-9178-9da3ded8d87d/DSC09347.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4209d835-c2e7-4980-8784-8c23ebb5255c/DSC09994.jpg",
        "width": 6858,
        "height": 4572,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f604dd1-30c7-4579-abcb-c927da7179ac/DSC00006.jpg",
        "width": 6868,
        "height": 4536,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c752819-f5c6-484e-91ee-05c6f28498e3/DSC00330.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9a4663e1-cf84-4212-ad83-11e0e2eeaba1/DSC00017.jpg",
        "width": 4476,
        "height": 6226,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/685a9ad8-799d-4911-8e9a-60670fe71dcd/DSC00042.jpg",
        "width": 4083,
        "height": 5264,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2c35e21f-b256-41a0-99a2-b3fb2f8fc382/DSC00099.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6987bc27-eac3-49c5-a908-359c629f623c/DSC00110.jpg",
        "width": 4443,
        "height": 6767,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3890881e-7046-446b-8f80-4a781298778d/DSC00115.jpg",
        "width": 4636,
        "height": 6166,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6228693e-c99e-418d-a5d6-15f12abee906/DSC00117.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ebdd846-8425-4594-b3ea-30e22f90f5eb/DSC00138-Enhanced-NR.jpg",
        "width": 4441,
        "height": 4308,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d69fdc24-d6d8-4031-8e85-fca8e0e538b5/DSC00141-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a01cd6d-449b-4091-b415-78a3484cda0d/DSC00144.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf76f4c2-578f-446a-b6fc-99653b69e962/DSC00271-Enhanced-NR.jpg",
        "width": 4672,
        "height": 6808,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58d114a0-4a00-4022-928c-0b5f70ac1065/DSC00283-Enhanced-NR.jpg",
        "width": 4349,
        "height": 5781,
        "alt": "O & N"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f59f29d5-3c80-4729-a123-6b307f586b5b/DSC00304.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & N"
      }
    ]
  },
  {
    "slug": "salonen",
    "location": "Helsinki, Finland",
    "couple": "Salonen",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "Salonen",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bccfc875-9489-45b0-ae4d-b4fa92c8e665/DSC03383.jpg",
        "width": 1555,
        "height": 2096,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c52b1c1-21e2-4635-9fd3-f8600b98dcd8/DSC03596.jpg",
        "width": 4456,
        "height": 6835,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f50fb3a2-c0da-4e53-99b8-34388c9ef462/DSC03549.jpg",
        "width": 6980,
        "height": 4331,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fbccef4d-f797-4428-b7f5-6d77c0cc3e4c/DSC03602.jpg",
        "width": 3967,
        "height": 5869,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88c318a0-2f07-4e8b-9cdd-2cb013b2dcc3/DSC03400.jpg",
        "width": 6689,
        "height": 4459,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4a51ee5-cc6c-4a11-8f90-572e81ebb7fa/DSC03585.jpg",
        "width": 4644,
        "height": 6880,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/82c7231d-5f27-450d-8112-1b6f6e0f02aa/DSC03566.jpg",
        "width": 6980,
        "height": 4407,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/814d23a1-1172-4b47-921e-13d24dced37e/DSC03402.jpg",
        "width": 6434,
        "height": 3457,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5bf9207b-2638-4e4e-92de-51eb86c405e2/DSC03591.jpg",
        "width": 5688,
        "height": 4386,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c0478e5-291a-4372-be22-1fe9e9702e1b/DSC03600.jpg",
        "width": 5597,
        "height": 4035,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/83a32771-9b67-4962-8723-e669d1785e4e/DSC03540.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b02b2edf-aa6a-410a-aeb2-59248d90082c/DSC03447.jpg",
        "width": 4188,
        "height": 6134,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4fcb879a-f20c-4e8f-af77-4d0b4b87e48b/DSC03543.jpg",
        "width": 6600,
        "height": 4065,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7c5c9671-45ca-45ca-8514-4ad40d24f880/DSC03545.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d66f3d6-dcf5-47e2-892a-71e7604a6b98/DSC03553.jpg",
        "width": 6980,
        "height": 4255,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d32695f9-10d0-4d5b-8255-7264b9dc3ddb/DSC03464.jpg",
        "width": 4846,
        "height": 4153,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/febbe762-797b-420c-a274-2ab3bbb7d098/DSC03336.jpg",
        "width": 3474,
        "height": 4653,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36332ea4-43b8-449b-bcd6-b1b38ff12296/DSC03580.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fcd24d40-5519-4cc5-b838-5a5d64bf3872/DSC03584.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/43f48475-cb98-44e7-abb9-42e60e1153f6/DSC03588.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a52591e0-00d2-4406-8916-5d10ccd61c67/DSC03592.jpg",
        "width": 4456,
        "height": 6835,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1cac547d-dbe5-4ad2-ac1e-893c261c91c7/DSC03601.jpg",
        "width": 5816,
        "height": 4035,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19375e3e-8ff5-4ff9-a495-4dfd6dc4107c/DSC03595.jpg",
        "width": 4195,
        "height": 6740,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/827a5c1d-313c-4917-9797-fdd87a48a7f5/DSC03605.jpg",
        "width": 4375,
        "height": 6576,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/257df39f-383b-40e9-8887-d1263a0513db/DSC03534.jpg",
        "width": 3679,
        "height": 4791,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23157525-159c-4490-b2ae-b26e8d5f2e11/DSC03611.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2c8fce7b-3953-4d0c-8695-b52241792b1b/DSC03618.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/da5d7793-43c7-480b-b8a6-47fe833a03f3/DSC03203.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77a62d00-4d5e-40d2-8ba0-879c272d9206/DSC03619.jpg",
        "width": 3975,
        "height": 3231,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9634438b-5a92-4cdb-b547-a88bc3dafa71/DSC03191.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4d7cbbe3-d989-49ef-bb8a-b9c5cf205e7e/DSC03193.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/40b1a215-58af-4206-8dab-8bba0cc8786a/DSC03230.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce07c742-c020-406e-90ad-6bc9e0cf955c/DSC03253.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c59a8c9a-0364-462d-a093-9d8db6d5d502/DSC03263-Enhanced-NR.jpg",
        "width": 6135,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1a34f8ea-7f6d-409a-8e3a-cd51847e07a9/DSC03269-Enhanced-NR.jpg",
        "width": 4558,
        "height": 6837,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/60afaa3f-57dc-4806-b355-0d58a9f1a4f7/DSC03291-Enhanced-NR.jpg",
        "width": 2635,
        "height": 3320,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/15743e6c-26f4-4945-ba26-696be5919cd2/DSC03297.jpg",
        "width": 5760,
        "height": 3556,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a130309e-781b-48f9-bb5b-464fe09f69f9/DSC03299-Enhanced-NR.jpg",
        "width": 4491,
        "height": 5854,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c12bea1c-d645-4b05-aab6-31fec4cac616/DSC03327.jpg",
        "width": 4375,
        "height": 4514,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90752ba7-a5b0-4854-bade-cb1dd867af04/DSC03351-Enhanced-NR.jpg",
        "width": 4532,
        "height": 6798,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5eba2796-7cb2-45c1-9c5d-dd896c980533/DSC03380.jpg",
        "width": 6243,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18c72ca2-4867-4b88-a028-e81b571cdd66/DSC03382.jpg",
        "width": 6820,
        "height": 4547,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9917b03-9265-4d08-98dc-31d51eda8664/DSC03385.jpg",
        "width": 6879,
        "height": 4586,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1cb71f12-a401-4c6f-a07f-a67545b08fe6/DSC03387.jpg",
        "width": 4130,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/07fb1fc8-461c-40e3-8c4f-00efa671fa00/DSC03395.jpg",
        "width": 6791,
        "height": 4318,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e125001-3434-42c7-bb7b-cfaded711f00/DSC03398.jpg",
        "width": 5759,
        "height": 3314,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7e393cd4-0a8c-4407-baa3-43c626604e47/DSC03401.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88b124d8-2e2f-45db-87e8-b9bc5548bce6/DSC03410.jpg",
        "width": 2475,
        "height": 1860,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c719e02-b585-493a-a715-d08a41e85158/DSC03425.jpg",
        "width": 4052,
        "height": 5116,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35ecf48b-c974-4e88-acef-35b88a352fc2/DSC03436.jpg",
        "width": 5776,
        "height": 3998,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/63b5427f-e095-4452-99cb-09cf19d9e575/DSC03437.jpg",
        "width": 1540,
        "height": 1985,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec897509-a482-4e54-8596-630e6cd45371/DSC03452.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34a53d52-0afe-4d42-a47c-ce3ab6208e36/DSC03457.jpg",
        "width": 3371,
        "height": 2182,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44aa3768-4a5a-4fc5-baa8-e06f293b69a8/DSC03462.jpg",
        "width": 6676,
        "height": 4451,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c132191c-9d05-4ccb-84dc-8e823fd4764a/DSC03468.jpg",
        "width": 3925,
        "height": 5869,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec5516ce-f057-4103-a5f1-10fa0c3367d4/DSC03475.jpg",
        "width": 4451,
        "height": 6676,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84880409-c529-4bf4-8c5d-61a4725c4c97/DSC03519.jpg",
        "width": 4425,
        "height": 6893,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b49fe49-d09a-488d-94bf-ccdc3f786195/DSC03521.jpg",
        "width": 5798,
        "height": 3832,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5dffb111-291d-4c06-ae46-0cc1c258568b/DSC03524.jpg",
        "width": 5117,
        "height": 4451,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23c36733-2bae-4165-ad30-ebfbc5f45ef8/DSC03526.jpg",
        "width": 6036,
        "height": 4265,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bccfc875-9489-45b0-ae4d-b4fa92c8e665/DSC03383.jpg",
        "width": 1555,
        "height": 2096,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c52b1c1-21e2-4635-9fd3-f8600b98dcd8/DSC03596.jpg",
        "width": 4456,
        "height": 6835,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f50fb3a2-c0da-4e53-99b8-34388c9ef462/DSC03549.jpg",
        "width": 6980,
        "height": 4331,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fbccef4d-f797-4428-b7f5-6d77c0cc3e4c/DSC03602.jpg",
        "width": 3967,
        "height": 5869,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88c318a0-2f07-4e8b-9cdd-2cb013b2dcc3/DSC03400.jpg",
        "width": 6689,
        "height": 4459,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4a51ee5-cc6c-4a11-8f90-572e81ebb7fa/DSC03585.jpg",
        "width": 4644,
        "height": 6880,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/82c7231d-5f27-450d-8112-1b6f6e0f02aa/DSC03566.jpg",
        "width": 6980,
        "height": 4407,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/814d23a1-1172-4b47-921e-13d24dced37e/DSC03402.jpg",
        "width": 6434,
        "height": 3457,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5bf9207b-2638-4e4e-92de-51eb86c405e2/DSC03591.jpg",
        "width": 5688,
        "height": 4386,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c0478e5-291a-4372-be22-1fe9e9702e1b/DSC03600.jpg",
        "width": 5597,
        "height": 4035,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/83a32771-9b67-4962-8723-e669d1785e4e/DSC03540.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b02b2edf-aa6a-410a-aeb2-59248d90082c/DSC03447.jpg",
        "width": 4188,
        "height": 6134,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4fcb879a-f20c-4e8f-af77-4d0b4b87e48b/DSC03543.jpg",
        "width": 6600,
        "height": 4065,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7c5c9671-45ca-45ca-8514-4ad40d24f880/DSC03545.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d66f3d6-dcf5-47e2-892a-71e7604a6b98/DSC03553.jpg",
        "width": 6980,
        "height": 4255,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d32695f9-10d0-4d5b-8255-7264b9dc3ddb/DSC03464.jpg",
        "width": 4846,
        "height": 4153,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/febbe762-797b-420c-a274-2ab3bbb7d098/DSC03336.jpg",
        "width": 3474,
        "height": 4653,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36332ea4-43b8-449b-bcd6-b1b38ff12296/DSC03580.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fcd24d40-5519-4cc5-b838-5a5d64bf3872/DSC03584.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/43f48475-cb98-44e7-abb9-42e60e1153f6/DSC03588.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a52591e0-00d2-4406-8916-5d10ccd61c67/DSC03592.jpg",
        "width": 4456,
        "height": 6835,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1cac547d-dbe5-4ad2-ac1e-893c261c91c7/DSC03601.jpg",
        "width": 5816,
        "height": 4035,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19375e3e-8ff5-4ff9-a495-4dfd6dc4107c/DSC03595.jpg",
        "width": 4195,
        "height": 6740,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/827a5c1d-313c-4917-9797-fdd87a48a7f5/DSC03605.jpg",
        "width": 4375,
        "height": 6576,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/257df39f-383b-40e9-8887-d1263a0513db/DSC03534.jpg",
        "width": 3679,
        "height": 4791,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23157525-159c-4490-b2ae-b26e8d5f2e11/DSC03611.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2c8fce7b-3953-4d0c-8695-b52241792b1b/DSC03618.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/da5d7793-43c7-480b-b8a6-47fe833a03f3/DSC03203.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77a62d00-4d5e-40d2-8ba0-879c272d9206/DSC03619.jpg",
        "width": 3975,
        "height": 3231,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9634438b-5a92-4cdb-b547-a88bc3dafa71/DSC03191.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4d7cbbe3-d989-49ef-bb8a-b9c5cf205e7e/DSC03193.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/40b1a215-58af-4206-8dab-8bba0cc8786a/DSC03230.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce07c742-c020-406e-90ad-6bc9e0cf955c/DSC03253.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c59a8c9a-0364-462d-a093-9d8db6d5d502/DSC03263-Enhanced-NR.jpg",
        "width": 6135,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1a34f8ea-7f6d-409a-8e3a-cd51847e07a9/DSC03269-Enhanced-NR.jpg",
        "width": 4558,
        "height": 6837,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/60afaa3f-57dc-4806-b355-0d58a9f1a4f7/DSC03291-Enhanced-NR.jpg",
        "width": 2635,
        "height": 3320,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/15743e6c-26f4-4945-ba26-696be5919cd2/DSC03297.jpg",
        "width": 5760,
        "height": 3556,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a130309e-781b-48f9-bb5b-464fe09f69f9/DSC03299-Enhanced-NR.jpg",
        "width": 4491,
        "height": 5854,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c12bea1c-d645-4b05-aab6-31fec4cac616/DSC03327.jpg",
        "width": 4375,
        "height": 4514,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90752ba7-a5b0-4854-bade-cb1dd867af04/DSC03351-Enhanced-NR.jpg",
        "width": 4532,
        "height": 6798,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5eba2796-7cb2-45c1-9c5d-dd896c980533/DSC03380.jpg",
        "width": 6243,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18c72ca2-4867-4b88-a028-e81b571cdd66/DSC03382.jpg",
        "width": 6820,
        "height": 4547,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9917b03-9265-4d08-98dc-31d51eda8664/DSC03385.jpg",
        "width": 6879,
        "height": 4586,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1cb71f12-a401-4c6f-a07f-a67545b08fe6/DSC03387.jpg",
        "width": 4130,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/07fb1fc8-461c-40e3-8c4f-00efa671fa00/DSC03395.jpg",
        "width": 6791,
        "height": 4318,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e125001-3434-42c7-bb7b-cfaded711f00/DSC03398.jpg",
        "width": 5759,
        "height": 3314,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7e393cd4-0a8c-4407-baa3-43c626604e47/DSC03401.jpg",
        "width": 7008,
        "height": 4672,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88b124d8-2e2f-45db-87e8-b9bc5548bce6/DSC03410.jpg",
        "width": 2475,
        "height": 1860,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c719e02-b585-493a-a715-d08a41e85158/DSC03425.jpg",
        "width": 4052,
        "height": 5116,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35ecf48b-c974-4e88-acef-35b88a352fc2/DSC03436.jpg",
        "width": 5776,
        "height": 3998,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/63b5427f-e095-4452-99cb-09cf19d9e575/DSC03437.jpg",
        "width": 1540,
        "height": 1985,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec897509-a482-4e54-8596-630e6cd45371/DSC03452.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34a53d52-0afe-4d42-a47c-ce3ab6208e36/DSC03457.jpg",
        "width": 3371,
        "height": 2182,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44aa3768-4a5a-4fc5-baa8-e06f293b69a8/DSC03462.jpg",
        "width": 6676,
        "height": 4451,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c132191c-9d05-4ccb-84dc-8e823fd4764a/DSC03468.jpg",
        "width": 3925,
        "height": 5869,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec5516ce-f057-4103-a5f1-10fa0c3367d4/DSC03475.jpg",
        "width": 4451,
        "height": 6676,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84880409-c529-4bf4-8c5d-61a4725c4c97/DSC03519.jpg",
        "width": 4425,
        "height": 6893,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b49fe49-d09a-488d-94bf-ccdc3f786195/DSC03521.jpg",
        "width": 5798,
        "height": 3832,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5dffb111-291d-4c06-ae46-0cc1c258568b/DSC03524.jpg",
        "width": 5117,
        "height": 4451,
        "alt": "Salonen"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23c36733-2bae-4165-ad30-ebfbc5f45ef8/DSC03526.jpg",
        "width": 6036,
        "height": 4265,
        "alt": "Salonen"
      }
    ]
  },
  {
    "slug": "m-d",
    "location": "Helsinki, Finland",
    "couple": "M & D",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "M & D",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a0ff91f6-27b5-4af1-b60e-6c9ee7aa038d/DSC01975.jpg",
        "width": 4308,
        "height": 6584,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3db9a984-93d1-4c66-a681-308c29a9800b/DSC02015.jpg",
        "width": 3931,
        "height": 5513,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/035273cd-fab2-48c2-96c7-05546d6611b8/DSC01912.jpg",
        "width": 4232,
        "height": 5841,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c820edb2-2295-43ed-b9bd-9a6a9ded1e00/DSC01842.jpg",
        "width": 4608,
        "height": 2592,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/80380f1e-ae9e-4439-be7a-1151c272e5f7/DSC01207.jpg",
        "width": 3887,
        "height": 4722,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7db96274-6e84-4b1a-a7e2-d00ef8e58436/DSC02248-Enhanced-NR.jpg",
        "width": 4444,
        "height": 6220,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b1b5860-4b6d-4aa2-a189-756db6c9c820/DSC01973.jpg",
        "width": 4308,
        "height": 6690,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9b354fb3-382f-4405-8a0a-ec0f55d86e72/DSC01833.jpg",
        "width": 2936,
        "height": 2254,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92640017-931d-44af-b2ea-743124c23205/DSC01841.jpg",
        "width": 4511,
        "height": 2898,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3765ef03-e5cf-4f5d-99e2-216950351d2c/DSC01891.jpg",
        "width": 6917,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/abc79bac-4ed3-4645-92d2-c8410aa01c20/DSC01886.jpg",
        "width": 4608,
        "height": 2592,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d2116a53-e76e-4d49-8dc0-70642ce650f1/DSC01901.jpg",
        "width": 6870,
        "height": 4578,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23869b31-46a7-480c-9010-7b4f3bc3411c/DSC01910.jpg",
        "width": 5835,
        "height": 2624,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb355774-1027-4488-be67-6460b5800607/DSC01917.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/020ecb38-6b2f-4e03-b4af-8ada4831dfbf/DSC01924.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b5aef20-cedc-4a71-bc6d-c8e4cf9b48d9/DSC01926.jpg",
        "width": 3072,
        "height": 4000,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/214ca351-f1fc-4997-9927-5cba4c8e6139/DSC01933.jpg",
        "width": 4308,
        "height": 6235,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/21d9951b-036f-45f6-ba79-cb8a98190a19/DSC01952.jpg",
        "width": 4459,
        "height": 6235,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88de4971-e625-4450-a04e-7e7b8fa068ff/DSC01965.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf74d009-28e7-42d4-8da9-39915873b489/DSC01870.jpg",
        "width": 4608,
        "height": 2592,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f9b7dcd-9f7a-4247-9750-58255ecbfd98/DSC01969-Enhanced-NR.jpg",
        "width": 4308,
        "height": 6750,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b9a6f54f-334e-469a-a0dc-6f4ab8109557/DSC01970.jpg",
        "width": 2409,
        "height": 4282,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c7179402-d16d-47d6-8382-eb775275625e/DSC01984.jpg",
        "width": 4232,
        "height": 5720,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1a26762c-1fe9-4c2c-9a4b-f341322a916e/DSC01990.jpg",
        "width": 4308,
        "height": 6644,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69f0b3f0-222f-4882-adf9-fcc3c0aab5b2/DSC02006.jpg",
        "width": 4308,
        "height": 6493,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09bc08d6-998a-43b5-8a61-e0b698652f59/DSC02010-Enhanced-NR.jpg",
        "width": 4565,
        "height": 6326,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b00763eb-2479-4ccc-a4fa-8d4fe53480d5/DSC02011.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79beb87d-c5a4-47bc-baad-5727eb7b65bd/DSC02037-Enhanced-NR.jpg",
        "width": 6261,
        "height": 3899,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88b78cfd-fd2e-411f-b3cb-d5bf9633d756/DSC02042.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f58aba5a-eb90-4104-af24-c4bf1528f0da/DSC02045.jpg",
        "width": 6140,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b4b6087-98b4-402f-82a4-060218b8b36a/DSC02056.jpg",
        "width": 5463,
        "height": 3621,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec49c111-2a4b-4486-b614-5c05887ebe11/DSC02060.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f654a711-c283-49f1-98f5-d547f579ba93/DSC02064.jpg",
        "width": 3786,
        "height": 5704,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a34b4686-fa6e-4dc9-be52-2896630e2fb6/DSC02107-Enhanced-NR.jpg",
        "width": 4414,
        "height": 6478,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f1cb599c-589f-4154-a5a9-92a0ada665de/DSC02127.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/49e2608b-4df4-4569-aa2c-72cbabe44dd6/DSC02133.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ff8f415-57d0-49df-9c2f-75543bf661c1/DSC02148.jpg",
        "width": 6923,
        "height": 4256,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bc0f4c3-5deb-4642-ac4f-c826a869a997/DSC02203.jpg",
        "width": 5665,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1202d0f3-8b12-41db-b9bf-c91cb43d73e0/DSC02215-Enhanced-NR.jpg",
        "width": 6818,
        "height": 4229,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6bf504ef-0944-4993-b1f5-fe8829a3c383/DSC02228-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e756293-cdfe-4947-a9e4-b90331206ae0/DSC02236-Enhanced-NR.jpg",
        "width": 4626,
        "height": 5932,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/846bbf26-49f0-4c90-80d3-2dfff840f535/DSC02267-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/29b63738-4c26-427b-8fcf-7718a803972a/DSC02313.jpg",
        "width": 5170,
        "height": 4156,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be5bbcc4-847b-4342-aece-c08a986e6675/DSC04911.jpg",
        "width": 4388,
        "height": 5308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e28dabc-b0e2-479c-be49-e7ffe937fe52/DSC04917.jpg",
        "width": 6715,
        "height": 3378,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d474eba-576a-4b60-9491-d26692479b57/DSC04914.jpg",
        "width": 5217,
        "height": 4388,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a593607e-5ca3-42a5-b8cf-ff462f752adc/DSC04920.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de1472a9-9d9e-4316-8522-d35db435ed4b/DSC04921.jpg",
        "width": 3944,
        "height": 7008,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/efb85a89-ca5a-406b-b69d-8655aea462a7/DSC02313-Enhanced-NR.jpg",
        "width": 5110,
        "height": 4076,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06483d29-199d-43d8-8a08-b447f665abad/DSC01816.jpg",
        "width": 4470,
        "height": 2712,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2da84360-977b-4dad-b033-81aae78e4d8d/DSC04923.jpg",
        "width": 4196,
        "height": 6874,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/45e3dec0-1249-4d4b-ac9c-8351938e09c6/DSC04925.jpg",
        "width": 6008,
        "height": 4298,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a681d5a6-36d4-487f-80b9-8d950aa2e7d1/DSC04926.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/082b7ec9-c363-413d-8352-a74fc51d0072/DSC04930.jpg",
        "width": 4445,
        "height": 6372,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24b9eb06-da73-41a4-bef7-ac05337e2a1b/DSC04932.jpg",
        "width": 6886,
        "height": 4276,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc4944fe-c593-432b-ad74-14ea6587a726/DSC04933.jpg",
        "width": 6018,
        "height": 3602,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e3970f48-3307-40dd-a806-4c0ff141e544/DSC04934.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ccc31f9-19c1-4388-98b1-929a6c31a49c/DSC04941.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24f52632-bba3-4fc3-b2e9-5aff64f1e479/DSC04954.jpg",
        "width": 7008,
        "height": 4096,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e36e3324-ae00-4cc8-8f57-725c6c0e5d0e/DSC04956.jpg",
        "width": 6980,
        "height": 4532,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6b96b70-83b7-42a4-8b08-c2e2a7c3d296/DSC01158.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b3d394aa-8e15-4844-8eba-9c39adfce586/DSC01203.jpg",
        "width": 4308,
        "height": 6435,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34419caa-81a2-4c13-84e5-a37d1f805aab/DSC01207-Enhanced-NR.jpg",
        "width": 3721,
        "height": 5113,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b7e40667-bbc5-4e95-93c4-48a6d10c48d4/DSC01257.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fe8f36ea-a00b-4c01-9916-9aca80646790/DSC01239.jpg",
        "width": 3628,
        "height": 4572,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eabf3a21-ad49-4dca-b4a4-d0731de96ac4/DSC01257-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a0daf50-0c4d-4229-ae97-1de8913bbf87/DSC01267.jpg",
        "width": 4339,
        "height": 6205,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf049a41-4acf-4c98-a68c-db92e671476e/DSC01277.jpg",
        "width": 6902,
        "height": 3966,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a213a382-2760-4531-b811-ee0276850129/DSC01277-Enhanced-NR.jpg",
        "width": 2109,
        "height": 2824,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6f5b2ac-ef61-46a9-baec-2ced9a584733/DSC01291-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d653e536-3e0a-4138-8a8b-4dcd6b4df25b/DSC01320.jpg",
        "width": 6918,
        "height": 4612,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/259fc9ca-b843-4c4f-b681-7fff1e8b5c3f/DSC01343.jpg",
        "width": 6884,
        "height": 4589,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e1cb1cab-8977-4762-a337-0551ba0c94ad/DSC01359.jpg",
        "width": 6884,
        "height": 4589,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3066d273-6d61-4e60-a153-432a9713a4d6/DSC01368.jpg",
        "width": 4254,
        "height": 6349,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23fb57c9-d817-4c2c-b0b6-3c084be48d7e/DSC01375.jpg",
        "width": 4566,
        "height": 2961,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b0e652d5-53ad-4a04-b2aa-392490f68633/DSC01415.jpg",
        "width": 4656,
        "height": 6168,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a159163-c7c5-4c87-9290-30a13f7cdd10/DSC01428.jpg",
        "width": 5821,
        "height": 4038,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e3dc4d50-831c-45dc-805b-b7fd4c88b58b/DSC01417.jpg",
        "width": 6168,
        "height": 4383,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb79953d-20e9-4599-8854-94ed34bc28fb/DSC01441.jpg",
        "width": 4176,
        "height": 5188,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc6c9cf4-48ca-4077-87d7-e9438d42fe8a/DSC01434.jpg",
        "width": 5821,
        "height": 4038,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bef61496-ee0d-48c4-81b1-83ba769eba1a/DSC01453.jpg",
        "width": 4160,
        "height": 5413,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0917914c-105e-47a2-9cea-e04808db2dd7/DSC01460.jpg",
        "width": 4160,
        "height": 5413,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dd1fc67a-6ab2-48b0-a14f-94b4402b8d31/DSC01461.jpg",
        "width": 5413,
        "height": 4388,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/39d8a2d7-4750-4c39-badf-6d0e66cba343/DSC01467.jpg",
        "width": 4463,
        "height": 5685,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0e8c0839-45fc-48d6-be48-296b223176c8/DSC01473.jpg",
        "width": 4107,
        "height": 4567,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6e4b5706-a75a-4127-a07b-720de6fcc4d7/DSC01493.jpg",
        "width": 5602,
        "height": 4340,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e64b9ba1-8b2f-4168-9f84-dc09d46b78aa/DSC01497.jpg",
        "width": 4623,
        "height": 6560,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e73f593-ce27-43c0-a1d1-2d0dd5647f0c/DSC01502.jpg",
        "width": 3714,
        "height": 4832,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/462a2a60-0a03-48d1-ac82-87eb11ee1fce/DSC01545.jpg",
        "width": 4621,
        "height": 6743,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cf9e7fa8-5741-4217-ab42-162ab4518fb3/DSC01546.jpg",
        "width": 5803,
        "height": 3800,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e957af41-4287-4bbb-8cda-a270ce4bf098/DSC01548.jpg",
        "width": 3288,
        "height": 3141,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0fcaab61-4c43-490e-9344-c651f6630271/DSC01570.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a099d10d-2330-40cc-9701-40c09a526e97/DSC01600.jpg",
        "width": 6665,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/12749d1a-2117-42a7-ab8d-8b92702bb72a/DSC01611.jpg",
        "width": 7008,
        "height": 4550,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77bc1b41-167d-41a2-bc8c-585147e65c2a/DSC01626.jpg",
        "width": 4672,
        "height": 6750,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a86a192-652a-4921-b0cc-1e0ab30aebf0/DSC01633.jpg",
        "width": 6140,
        "height": 4236,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/05eff334-e933-4205-ac96-0b6fd118f09d/DSC01635.jpg",
        "width": 6968,
        "height": 4236,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/86d2f744-c232-4826-9230-21336754ba85/DSC01646.jpg",
        "width": 4223,
        "height": 2903,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4749e752-f06f-4945-b32e-7cc5cbd9136d/DSC01651.jpg",
        "width": 4608,
        "height": 2592,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fee7c9dc-63d9-4fdd-9af4-3f30e083a9a8/DSC01679.jpg",
        "width": 4308,
        "height": 6538,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fbc0f2c4-ad35-41a3-910e-c6e87281fe97/DSC01745.jpg",
        "width": 6538,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f1b0ad3-4b19-4f8a-bf5a-6cdf4fd30780/DSC01751.jpg",
        "width": 5559,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06db2b63-7330-4967-9232-2b2502a4c2da/DSC01752.jpg",
        "width": 4536,
        "height": 5297,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f382bf1-0a5f-4203-ae23-1e71359dceb6/DSC01759.jpg",
        "width": 6997,
        "height": 4236,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/258bc988-fa9b-4703-b248-ba6d6d9ad3ae/DSC01760.jpg",
        "width": 6836,
        "height": 3847,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4d1fb198-cebb-4bae-b96d-016eeb4c4494/DSC01769.jpg",
        "width": 6314,
        "height": 4236,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b0ce5d9-5c19-4169-a807-ce02a87889e0/DSC01786.jpg",
        "width": 6314,
        "height": 4236,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a0ff91f6-27b5-4af1-b60e-6c9ee7aa038d/DSC01975.jpg",
        "width": 4308,
        "height": 6584,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3db9a984-93d1-4c66-a681-308c29a9800b/DSC02015.jpg",
        "width": 3931,
        "height": 5513,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/035273cd-fab2-48c2-96c7-05546d6611b8/DSC01912.jpg",
        "width": 4232,
        "height": 5841,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c820edb2-2295-43ed-b9bd-9a6a9ded1e00/DSC01842.jpg",
        "width": 4608,
        "height": 2592,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/80380f1e-ae9e-4439-be7a-1151c272e5f7/DSC01207.jpg",
        "width": 3887,
        "height": 4722,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7db96274-6e84-4b1a-a7e2-d00ef8e58436/DSC02248-Enhanced-NR.jpg",
        "width": 4444,
        "height": 6220,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b1b5860-4b6d-4aa2-a189-756db6c9c820/DSC01973.jpg",
        "width": 4308,
        "height": 6690,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9b354fb3-382f-4405-8a0a-ec0f55d86e72/DSC01833.jpg",
        "width": 2936,
        "height": 2254,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92640017-931d-44af-b2ea-743124c23205/DSC01841.jpg",
        "width": 4511,
        "height": 2898,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3765ef03-e5cf-4f5d-99e2-216950351d2c/DSC01891.jpg",
        "width": 6917,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/abc79bac-4ed3-4645-92d2-c8410aa01c20/DSC01886.jpg",
        "width": 4608,
        "height": 2592,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d2116a53-e76e-4d49-8dc0-70642ce650f1/DSC01901.jpg",
        "width": 6870,
        "height": 4578,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23869b31-46a7-480c-9010-7b4f3bc3411c/DSC01910.jpg",
        "width": 5835,
        "height": 2624,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb355774-1027-4488-be67-6460b5800607/DSC01917.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/020ecb38-6b2f-4e03-b4af-8ada4831dfbf/DSC01924.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b5aef20-cedc-4a71-bc6d-c8e4cf9b48d9/DSC01926.jpg",
        "width": 3072,
        "height": 4000,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/214ca351-f1fc-4997-9927-5cba4c8e6139/DSC01933.jpg",
        "width": 4308,
        "height": 6235,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/21d9951b-036f-45f6-ba79-cb8a98190a19/DSC01952.jpg",
        "width": 4459,
        "height": 6235,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88de4971-e625-4450-a04e-7e7b8fa068ff/DSC01965.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf74d009-28e7-42d4-8da9-39915873b489/DSC01870.jpg",
        "width": 4608,
        "height": 2592,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f9b7dcd-9f7a-4247-9750-58255ecbfd98/DSC01969-Enhanced-NR.jpg",
        "width": 4308,
        "height": 6750,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b9a6f54f-334e-469a-a0dc-6f4ab8109557/DSC01970.jpg",
        "width": 2409,
        "height": 4282,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c7179402-d16d-47d6-8382-eb775275625e/DSC01984.jpg",
        "width": 4232,
        "height": 5720,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1a26762c-1fe9-4c2c-9a4b-f341322a916e/DSC01990.jpg",
        "width": 4308,
        "height": 6644,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69f0b3f0-222f-4882-adf9-fcc3c0aab5b2/DSC02006.jpg",
        "width": 4308,
        "height": 6493,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09bc08d6-998a-43b5-8a61-e0b698652f59/DSC02010-Enhanced-NR.jpg",
        "width": 4565,
        "height": 6326,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b00763eb-2479-4ccc-a4fa-8d4fe53480d5/DSC02011.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79beb87d-c5a4-47bc-baad-5727eb7b65bd/DSC02037-Enhanced-NR.jpg",
        "width": 6261,
        "height": 3899,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88b78cfd-fd2e-411f-b3cb-d5bf9633d756/DSC02042.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f58aba5a-eb90-4104-af24-c4bf1528f0da/DSC02045.jpg",
        "width": 6140,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b4b6087-98b4-402f-82a4-060218b8b36a/DSC02056.jpg",
        "width": 5463,
        "height": 3621,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec49c111-2a4b-4486-b614-5c05887ebe11/DSC02060.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f654a711-c283-49f1-98f5-d547f579ba93/DSC02064.jpg",
        "width": 3786,
        "height": 5704,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a34b4686-fa6e-4dc9-be52-2896630e2fb6/DSC02107-Enhanced-NR.jpg",
        "width": 4414,
        "height": 6478,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f1cb599c-589f-4154-a5a9-92a0ada665de/DSC02127.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/49e2608b-4df4-4569-aa2c-72cbabe44dd6/DSC02133.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ff8f415-57d0-49df-9c2f-75543bf661c1/DSC02148.jpg",
        "width": 6923,
        "height": 4256,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bc0f4c3-5deb-4642-ac4f-c826a869a997/DSC02203.jpg",
        "width": 5665,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1202d0f3-8b12-41db-b9bf-c91cb43d73e0/DSC02215-Enhanced-NR.jpg",
        "width": 6818,
        "height": 4229,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6bf504ef-0944-4993-b1f5-fe8829a3c383/DSC02228-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e756293-cdfe-4947-a9e4-b90331206ae0/DSC02236-Enhanced-NR.jpg",
        "width": 4626,
        "height": 5932,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/846bbf26-49f0-4c90-80d3-2dfff840f535/DSC02267-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/29b63738-4c26-427b-8fcf-7718a803972a/DSC02313.jpg",
        "width": 5170,
        "height": 4156,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be5bbcc4-847b-4342-aece-c08a986e6675/DSC04911.jpg",
        "width": 4388,
        "height": 5308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e28dabc-b0e2-479c-be49-e7ffe937fe52/DSC04917.jpg",
        "width": 6715,
        "height": 3378,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d474eba-576a-4b60-9491-d26692479b57/DSC04914.jpg",
        "width": 5217,
        "height": 4388,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a593607e-5ca3-42a5-b8cf-ff462f752adc/DSC04920.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de1472a9-9d9e-4316-8522-d35db435ed4b/DSC04921.jpg",
        "width": 3944,
        "height": 7008,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/efb85a89-ca5a-406b-b69d-8655aea462a7/DSC02313-Enhanced-NR.jpg",
        "width": 5110,
        "height": 4076,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06483d29-199d-43d8-8a08-b447f665abad/DSC01816.jpg",
        "width": 4470,
        "height": 2712,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2da84360-977b-4dad-b033-81aae78e4d8d/DSC04923.jpg",
        "width": 4196,
        "height": 6874,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/45e3dec0-1249-4d4b-ac9c-8351938e09c6/DSC04925.jpg",
        "width": 6008,
        "height": 4298,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a681d5a6-36d4-487f-80b9-8d950aa2e7d1/DSC04926.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/082b7ec9-c363-413d-8352-a74fc51d0072/DSC04930.jpg",
        "width": 4445,
        "height": 6372,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24b9eb06-da73-41a4-bef7-ac05337e2a1b/DSC04932.jpg",
        "width": 6886,
        "height": 4276,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc4944fe-c593-432b-ad74-14ea6587a726/DSC04933.jpg",
        "width": 6018,
        "height": 3602,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e3970f48-3307-40dd-a806-4c0ff141e544/DSC04934.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ccc31f9-19c1-4388-98b1-929a6c31a49c/DSC04941.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24f52632-bba3-4fc3-b2e9-5aff64f1e479/DSC04954.jpg",
        "width": 7008,
        "height": 4096,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e36e3324-ae00-4cc8-8f57-725c6c0e5d0e/DSC04956.jpg",
        "width": 6980,
        "height": 4532,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6b96b70-83b7-42a4-8b08-c2e2a7c3d296/DSC01158.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b3d394aa-8e15-4844-8eba-9c39adfce586/DSC01203.jpg",
        "width": 4308,
        "height": 6435,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34419caa-81a2-4c13-84e5-a37d1f805aab/DSC01207-Enhanced-NR.jpg",
        "width": 3721,
        "height": 5113,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b7e40667-bbc5-4e95-93c4-48a6d10c48d4/DSC01257.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fe8f36ea-a00b-4c01-9916-9aca80646790/DSC01239.jpg",
        "width": 3628,
        "height": 4572,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eabf3a21-ad49-4dca-b4a4-d0731de96ac4/DSC01257-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a0daf50-0c4d-4229-ae97-1de8913bbf87/DSC01267.jpg",
        "width": 4339,
        "height": 6205,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf049a41-4acf-4c98-a68c-db92e671476e/DSC01277.jpg",
        "width": 6902,
        "height": 3966,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a213a382-2760-4531-b811-ee0276850129/DSC01277-Enhanced-NR.jpg",
        "width": 2109,
        "height": 2824,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6f5b2ac-ef61-46a9-baec-2ced9a584733/DSC01291-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d653e536-3e0a-4138-8a8b-4dcd6b4df25b/DSC01320.jpg",
        "width": 6918,
        "height": 4612,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/259fc9ca-b843-4c4f-b681-7fff1e8b5c3f/DSC01343.jpg",
        "width": 6884,
        "height": 4589,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e1cb1cab-8977-4762-a337-0551ba0c94ad/DSC01359.jpg",
        "width": 6884,
        "height": 4589,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3066d273-6d61-4e60-a153-432a9713a4d6/DSC01368.jpg",
        "width": 4254,
        "height": 6349,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23fb57c9-d817-4c2c-b0b6-3c084be48d7e/DSC01375.jpg",
        "width": 4566,
        "height": 2961,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b0e652d5-53ad-4a04-b2aa-392490f68633/DSC01415.jpg",
        "width": 4656,
        "height": 6168,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a159163-c7c5-4c87-9290-30a13f7cdd10/DSC01428.jpg",
        "width": 5821,
        "height": 4038,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e3dc4d50-831c-45dc-805b-b7fd4c88b58b/DSC01417.jpg",
        "width": 6168,
        "height": 4383,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb79953d-20e9-4599-8854-94ed34bc28fb/DSC01441.jpg",
        "width": 4176,
        "height": 5188,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc6c9cf4-48ca-4077-87d7-e9438d42fe8a/DSC01434.jpg",
        "width": 5821,
        "height": 4038,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bef61496-ee0d-48c4-81b1-83ba769eba1a/DSC01453.jpg",
        "width": 4160,
        "height": 5413,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0917914c-105e-47a2-9cea-e04808db2dd7/DSC01460.jpg",
        "width": 4160,
        "height": 5413,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dd1fc67a-6ab2-48b0-a14f-94b4402b8d31/DSC01461.jpg",
        "width": 5413,
        "height": 4388,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/39d8a2d7-4750-4c39-badf-6d0e66cba343/DSC01467.jpg",
        "width": 4463,
        "height": 5685,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0e8c0839-45fc-48d6-be48-296b223176c8/DSC01473.jpg",
        "width": 4107,
        "height": 4567,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6e4b5706-a75a-4127-a07b-720de6fcc4d7/DSC01493.jpg",
        "width": 5602,
        "height": 4340,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e64b9ba1-8b2f-4168-9f84-dc09d46b78aa/DSC01497.jpg",
        "width": 4623,
        "height": 6560,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e73f593-ce27-43c0-a1d1-2d0dd5647f0c/DSC01502.jpg",
        "width": 3714,
        "height": 4832,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/462a2a60-0a03-48d1-ac82-87eb11ee1fce/DSC01545.jpg",
        "width": 4621,
        "height": 6743,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cf9e7fa8-5741-4217-ab42-162ab4518fb3/DSC01546.jpg",
        "width": 5803,
        "height": 3800,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e957af41-4287-4bbb-8cda-a270ce4bf098/DSC01548.jpg",
        "width": 3288,
        "height": 3141,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0fcaab61-4c43-490e-9344-c651f6630271/DSC01570.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a099d10d-2330-40cc-9701-40c09a526e97/DSC01600.jpg",
        "width": 6665,
        "height": 3944,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/12749d1a-2117-42a7-ab8d-8b92702bb72a/DSC01611.jpg",
        "width": 7008,
        "height": 4550,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77bc1b41-167d-41a2-bc8c-585147e65c2a/DSC01626.jpg",
        "width": 4672,
        "height": 6750,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a86a192-652a-4921-b0cc-1e0ab30aebf0/DSC01633.jpg",
        "width": 6140,
        "height": 4236,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/05eff334-e933-4205-ac96-0b6fd118f09d/DSC01635.jpg",
        "width": 6968,
        "height": 4236,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/86d2f744-c232-4826-9230-21336754ba85/DSC01646.jpg",
        "width": 4223,
        "height": 2903,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4749e752-f06f-4945-b32e-7cc5cbd9136d/DSC01651.jpg",
        "width": 4608,
        "height": 2592,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fee7c9dc-63d9-4fdd-9af4-3f30e083a9a8/DSC01679.jpg",
        "width": 4308,
        "height": 6538,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fbc0f2c4-ad35-41a3-910e-c6e87281fe97/DSC01745.jpg",
        "width": 6538,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f1b0ad3-4b19-4f8a-bf5a-6cdf4fd30780/DSC01751.jpg",
        "width": 5559,
        "height": 4308,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06db2b63-7330-4967-9232-2b2502a4c2da/DSC01752.jpg",
        "width": 4536,
        "height": 5297,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f382bf1-0a5f-4203-ae23-1e71359dceb6/DSC01759.jpg",
        "width": 6997,
        "height": 4236,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/258bc988-fa9b-4703-b248-ba6d6d9ad3ae/DSC01760.jpg",
        "width": 6836,
        "height": 3847,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4d1fb198-cebb-4bae-b96d-016eeb4c4494/DSC01769.jpg",
        "width": 6314,
        "height": 4236,
        "alt": "M & D"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b0ce5d9-5c19-4169-a807-ce02a87889e0/DSC01786.jpg",
        "width": 6314,
        "height": 4236,
        "alt": "M & D"
      }
    ]
  },
  {
    "slug": "project-two-ky966-8ww3w",
    "location": "Helsinki, Finland",
    "couple": "Project & Two & Ky966 & 8ww3w",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "L & A",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6819cbe2-4d5a-430f-afd7-6107c30462ab/DSC04175.jpg",
        "width": 4488,
        "height": 4010,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ee40578-168b-4845-8496-2a3c73cf8fd8/DSC04134.jpg",
        "width": 3989,
        "height": 6782,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/497c69ea-5800-4938-9682-f4ad55e7558f/DSC05584.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90e05ebc-2afa-42dd-91d4-0f7782b94dd5/DSC04141.jpg",
        "width": 4672,
        "height": 6928,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a92ec788-d972-4ae7-a2dd-4c56e0a9a0f2/DSC04720.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94cdc87c-79fc-459a-b533-5a6650317877/DSC05096.jpg",
        "width": 6711,
        "height": 3702,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a139bfe2-edc2-4c1e-b946-17067dcc0342/DSC04074.jpg",
        "width": 4181,
        "height": 6403,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2fa5867f-30a7-4f56-8cbc-7c6f400733f4/DSC04035.jpg",
        "width": 5263,
        "height": 3871,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6fe748ea-9003-49bc-9082-e7554ffd41d3/DSC04047.jpg",
        "width": 4672,
        "height": 6675,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9069594-14f1-42b8-8570-b27196ab840d/DSC04207.jpg",
        "width": 3673,
        "height": 4166,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19d4d324-08fc-4b8b-bf4d-e34969d1f369/DSC04056.jpg",
        "width": 4459,
        "height": 6116,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2ae489cd-9e53-45f3-8f5b-c788ddfd4a39/DSC04079.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/42987fc0-1872-4dac-8c31-2bc7f4e0f46a/DSC04154.jpg",
        "width": 6668,
        "height": 4228,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b67e913-0d05-4fd3-9d4d-aea793f17e45/DSC04172.jpg",
        "width": 5703,
        "height": 4587,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/13ab0338-a20e-4856-ad21-9ccb6b04b71e/DSC04171.jpg",
        "width": 3611,
        "height": 5411,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/85dcab0f-b925-41b0-a577-755895699dd0/DSC04205.jpg",
        "width": 4906,
        "height": 4095,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5acada49-7ff2-4e2b-a021-b518541ab8b6/DSC04216.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/158e949f-9bfc-4ece-be0f-02890365ed3e/DSC04224.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/741d059f-cd79-4d8c-abf4-3e11c44fbfaa/DSC04227.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/57c3cb10-5953-480c-a590-3620ed0e8bdd/DSC04231.jpg",
        "width": 4672,
        "height": 6236,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ff6cfc3-c621-490d-9658-ffff0e36ac0f/DSC04236.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6180dfbd-5142-4af3-a500-a1a4a2b31560/DSC04276.jpg",
        "width": 5331,
        "height": 4237,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c192cca5-2389-4493-adbb-6a0560bf3868/DSC04260.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb689237-47bb-4cbf-9e69-34d11ea3d715/DSC04329.jpg",
        "width": 6360,
        "height": 4308,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ed5b61e9-2b2e-46b5-811a-55e6132e8fe6/DSC04374-Enhanced-NR.jpg",
        "width": 5490,
        "height": 3643,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cf1245eb-dffd-4f4e-9e0f-e6e53d8d070a/DSC04396-Enhanced-NR.jpg",
        "width": 6799,
        "height": 3826,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c6a068d-a6ae-4939-9c56-f16e5e15b75d/DSC04459-Enhanced-NR.jpg",
        "width": 5649,
        "height": 4297,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e61ea101-bb5a-4f64-a9a2-30b08f1e9f97/DSC04461.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f91d30d-0406-42a8-bd74-915932965c6a/DSC04703.jpg",
        "width": 4441,
        "height": 6586,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e52cb52f-daeb-407f-9650-6d3b3d49c681/DSC04713.jpg",
        "width": 4579,
        "height": 6316,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a87592fa-770a-4b68-98fe-e7a693ba1381/DSC04715.jpg",
        "width": 4428,
        "height": 6617,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2b7347f-ce61-433e-84a2-df72a986ae6e/DSC04718.jpg",
        "width": 4248,
        "height": 6572,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0418d25b-1f23-413a-8e6b-8ed4abf3e019/DSC04721.jpg",
        "width": 6367,
        "height": 4595,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b7e0f63-83c7-481c-b179-be125db6c4bf/DSC04723.jpg",
        "width": 6477,
        "height": 4308,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/64a4e255-4089-4d98-a2aa-ae971164fd25/DSC04726.jpg",
        "width": 4562,
        "height": 4472,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/794839d3-eae8-4c67-b12f-f8a18cdb3374/DSC04728.jpg",
        "width": 5253,
        "height": 4081,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dceed783-0bf0-4909-be9a-17de97a1044e/DSC04711.jpg",
        "width": 4350,
        "height": 6525,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/59308c10-4d1d-4624-a8c7-6e6c23b1b15d/DSC04731.jpg",
        "width": 4218,
        "height": 5835,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68a0340b-f38d-422c-b28b-f980f6112318/DSC04751-Enhanced-NR.jpg",
        "width": 4396,
        "height": 6414,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/071481fa-c452-47d7-94e0-03417e921735/DSC04768.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/33064bd0-a441-4a73-8648-bb98ad1454f8/DSC04770-Enhanced-NR.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c12a1376-24d3-4f01-a9ea-f355cc9e8970/DSC04778-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e36111dd-4530-4c1d-90a2-e657215f4a40/DSC04887.jpg",
        "width": 4265,
        "height": 5110,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8cc1eaf8-8434-482f-bdc4-86e6699e5c0b/DSC04818.jpg",
        "width": 6396,
        "height": 3352,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7fff6a5a-440a-4cc1-bf42-d46532e83eee/DSC04850.jpg",
        "width": 6182,
        "height": 3180,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f4a4d532-dd78-4961-8ed9-faa364399b16/DSC04983.jpg",
        "width": 6747,
        "height": 4515,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/db1fefe8-251c-4629-9ad8-38355798fc04/DSC05000.jpg",
        "width": 4672,
        "height": 6888,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a01f0c0d-4600-4b16-9c6d-dcd27fdac235/DSC05048.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b478d3b-5bd4-44e0-8643-77ed291db285/DSC05044.jpg",
        "width": 5504,
        "height": 4064,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8d3c1ca9-4880-479b-83a6-ad598c49b605/DSC05056.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4af11e62-f701-480a-9aff-20cda842d539/DSC05073.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/730555da-ea2f-4027-9a3c-6d29c425cd55/DSC05080-Enhanced-NR.jpg",
        "width": 6691,
        "height": 3982,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90204d07-a300-4b19-8c0f-e81acb617e9e/DSC05090.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6bcd2a8-1615-46ac-90a9-ed4d75c8560d/DSC05111.jpg",
        "width": 4672,
        "height": 6321,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/808c65bb-d634-4306-8987-dc19fa466938/DSC05214.jpg",
        "width": 6689,
        "height": 4069,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b7cc5461-548b-4fe8-9125-6fb215bdd93f/DSC05249.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/91c963b9-6d26-43c4-ba4a-556c1b07fbc1/DSC05248.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a4f9f981-7a30-4f3f-a86c-79382c1dd93c/DSC05305.jpg",
        "width": 6025,
        "height": 4408,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/940b4754-9059-4cb9-bca4-51af78612b30/DSC05317.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/035fb47d-74b4-49e8-83a3-631a262c6ef5/DSC05318-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f55d18e2-e74e-47fb-9aa5-5e76d2bc3456/DSC05391.jpg",
        "width": 4669,
        "height": 6660,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e062ac7-6e76-473f-bb79-70c2d422d0e4/DSC05438.jpg",
        "width": 4308,
        "height": 6858,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1f99958f-78d8-4a64-81af-403c7f365532/DSC05439.jpg",
        "width": 6386,
        "height": 4521,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7994e57b-eb2f-4ffd-9f3b-302e2d347e8c/DSC05454.jpg",
        "width": 4408,
        "height": 6612,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f5b161a-24d5-4245-8520-6805c759e5c8/DSC05469.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7d016349-207e-4e63-bb82-726d25f87a81/DSC05479.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a0de4b2c-f771-4ee9-9719-9c6e2c752181/DSC05488-Enhanced-NR.jpg",
        "width": 3772,
        "height": 3971,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f33b755f-dfa5-405a-a6f2-3da647cafb0b/DSC05515.jpg",
        "width": 4173,
        "height": 3700,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4ff8b53-9a96-48e4-8cde-dc5bb43fc81a/DSC05490.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88584ae5-d077-4491-8090-66f0f016f4cb/DSC05546.jpg",
        "width": 4428,
        "height": 6602,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26c95196-1f9f-4089-b492-68402d41ad43/DSC05549-Enhanced-NR.jpg",
        "width": 4175,
        "height": 5850,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18d34bf5-ee42-4c22-a669-8920652d6325/DSC05589.jpg",
        "width": 5375,
        "height": 3870,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ac28dcda-8f78-4754-b8a7-0d8886985585/DSC05594.jpg",
        "width": 6287,
        "height": 3943,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3fc23294-1db2-43ad-91e3-b9154010e2fd/DSC05592.jpg",
        "width": 6849,
        "height": 3714,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b39ef6a-3dce-4e53-8690-f2b901c0f624/DSC05585.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6819cbe2-4d5a-430f-afd7-6107c30462ab/DSC04175.jpg",
        "width": 4488,
        "height": 4010,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ee40578-168b-4845-8496-2a3c73cf8fd8/DSC04134.jpg",
        "width": 3989,
        "height": 6782,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/497c69ea-5800-4938-9682-f4ad55e7558f/DSC05584.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90e05ebc-2afa-42dd-91d4-0f7782b94dd5/DSC04141.jpg",
        "width": 4672,
        "height": 6928,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a92ec788-d972-4ae7-a2dd-4c56e0a9a0f2/DSC04720.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94cdc87c-79fc-459a-b533-5a6650317877/DSC05096.jpg",
        "width": 6711,
        "height": 3702,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a139bfe2-edc2-4c1e-b946-17067dcc0342/DSC04074.jpg",
        "width": 4181,
        "height": 6403,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2fa5867f-30a7-4f56-8cbc-7c6f400733f4/DSC04035.jpg",
        "width": 5263,
        "height": 3871,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6fe748ea-9003-49bc-9082-e7554ffd41d3/DSC04047.jpg",
        "width": 4672,
        "height": 6675,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9069594-14f1-42b8-8570-b27196ab840d/DSC04207.jpg",
        "width": 3673,
        "height": 4166,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19d4d324-08fc-4b8b-bf4d-e34969d1f369/DSC04056.jpg",
        "width": 4459,
        "height": 6116,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2ae489cd-9e53-45f3-8f5b-c788ddfd4a39/DSC04079.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/42987fc0-1872-4dac-8c31-2bc7f4e0f46a/DSC04154.jpg",
        "width": 6668,
        "height": 4228,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b67e913-0d05-4fd3-9d4d-aea793f17e45/DSC04172.jpg",
        "width": 5703,
        "height": 4587,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/13ab0338-a20e-4856-ad21-9ccb6b04b71e/DSC04171.jpg",
        "width": 3611,
        "height": 5411,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/85dcab0f-b925-41b0-a577-755895699dd0/DSC04205.jpg",
        "width": 4906,
        "height": 4095,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5acada49-7ff2-4e2b-a021-b518541ab8b6/DSC04216.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/158e949f-9bfc-4ece-be0f-02890365ed3e/DSC04224.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/741d059f-cd79-4d8c-abf4-3e11c44fbfaa/DSC04227.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/57c3cb10-5953-480c-a590-3620ed0e8bdd/DSC04231.jpg",
        "width": 4672,
        "height": 6236,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ff6cfc3-c621-490d-9658-ffff0e36ac0f/DSC04236.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6180dfbd-5142-4af3-a500-a1a4a2b31560/DSC04276.jpg",
        "width": 5331,
        "height": 4237,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c192cca5-2389-4493-adbb-6a0560bf3868/DSC04260.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb689237-47bb-4cbf-9e69-34d11ea3d715/DSC04329.jpg",
        "width": 6360,
        "height": 4308,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ed5b61e9-2b2e-46b5-811a-55e6132e8fe6/DSC04374-Enhanced-NR.jpg",
        "width": 5490,
        "height": 3643,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cf1245eb-dffd-4f4e-9e0f-e6e53d8d070a/DSC04396-Enhanced-NR.jpg",
        "width": 6799,
        "height": 3826,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c6a068d-a6ae-4939-9c56-f16e5e15b75d/DSC04459-Enhanced-NR.jpg",
        "width": 5649,
        "height": 4297,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e61ea101-bb5a-4f64-a9a2-30b08f1e9f97/DSC04461.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f91d30d-0406-42a8-bd74-915932965c6a/DSC04703.jpg",
        "width": 4441,
        "height": 6586,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e52cb52f-daeb-407f-9650-6d3b3d49c681/DSC04713.jpg",
        "width": 4579,
        "height": 6316,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a87592fa-770a-4b68-98fe-e7a693ba1381/DSC04715.jpg",
        "width": 4428,
        "height": 6617,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2b7347f-ce61-433e-84a2-df72a986ae6e/DSC04718.jpg",
        "width": 4248,
        "height": 6572,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0418d25b-1f23-413a-8e6b-8ed4abf3e019/DSC04721.jpg",
        "width": 6367,
        "height": 4595,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b7e0f63-83c7-481c-b179-be125db6c4bf/DSC04723.jpg",
        "width": 6477,
        "height": 4308,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/64a4e255-4089-4d98-a2aa-ae971164fd25/DSC04726.jpg",
        "width": 4562,
        "height": 4472,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/794839d3-eae8-4c67-b12f-f8a18cdb3374/DSC04728.jpg",
        "width": 5253,
        "height": 4081,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dceed783-0bf0-4909-be9a-17de97a1044e/DSC04711.jpg",
        "width": 4350,
        "height": 6525,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/59308c10-4d1d-4624-a8c7-6e6c23b1b15d/DSC04731.jpg",
        "width": 4218,
        "height": 5835,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68a0340b-f38d-422c-b28b-f980f6112318/DSC04751-Enhanced-NR.jpg",
        "width": 4396,
        "height": 6414,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/071481fa-c452-47d7-94e0-03417e921735/DSC04768.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/33064bd0-a441-4a73-8648-bb98ad1454f8/DSC04770-Enhanced-NR.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c12a1376-24d3-4f01-a9ea-f355cc9e8970/DSC04778-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e36111dd-4530-4c1d-90a2-e657215f4a40/DSC04887.jpg",
        "width": 4265,
        "height": 5110,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8cc1eaf8-8434-482f-bdc4-86e6699e5c0b/DSC04818.jpg",
        "width": 6396,
        "height": 3352,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7fff6a5a-440a-4cc1-bf42-d46532e83eee/DSC04850.jpg",
        "width": 6182,
        "height": 3180,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f4a4d532-dd78-4961-8ed9-faa364399b16/DSC04983.jpg",
        "width": 6747,
        "height": 4515,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/db1fefe8-251c-4629-9ad8-38355798fc04/DSC05000.jpg",
        "width": 4672,
        "height": 6888,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a01f0c0d-4600-4b16-9c6d-dcd27fdac235/DSC05048.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b478d3b-5bd4-44e0-8643-77ed291db285/DSC05044.jpg",
        "width": 5504,
        "height": 4064,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8d3c1ca9-4880-479b-83a6-ad598c49b605/DSC05056.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4af11e62-f701-480a-9aff-20cda842d539/DSC05073.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/730555da-ea2f-4027-9a3c-6d29c425cd55/DSC05080-Enhanced-NR.jpg",
        "width": 6691,
        "height": 3982,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90204d07-a300-4b19-8c0f-e81acb617e9e/DSC05090.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6bcd2a8-1615-46ac-90a9-ed4d75c8560d/DSC05111.jpg",
        "width": 4672,
        "height": 6321,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/808c65bb-d634-4306-8987-dc19fa466938/DSC05214.jpg",
        "width": 6689,
        "height": 4069,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b7cc5461-548b-4fe8-9125-6fb215bdd93f/DSC05249.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/91c963b9-6d26-43c4-ba4a-556c1b07fbc1/DSC05248.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a4f9f981-7a30-4f3f-a86c-79382c1dd93c/DSC05305.jpg",
        "width": 6025,
        "height": 4408,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/940b4754-9059-4cb9-bca4-51af78612b30/DSC05317.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/035fb47d-74b4-49e8-83a3-631a262c6ef5/DSC05318-Enhanced-NR.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f55d18e2-e74e-47fb-9aa5-5e76d2bc3456/DSC05391.jpg",
        "width": 4669,
        "height": 6660,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e062ac7-6e76-473f-bb79-70c2d422d0e4/DSC05438.jpg",
        "width": 4308,
        "height": 6858,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1f99958f-78d8-4a64-81af-403c7f365532/DSC05439.jpg",
        "width": 6386,
        "height": 4521,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7994e57b-eb2f-4ffd-9f3b-302e2d347e8c/DSC05454.jpg",
        "width": 4408,
        "height": 6612,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f5b161a-24d5-4245-8520-6805c759e5c8/DSC05469.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7d016349-207e-4e63-bb82-726d25f87a81/DSC05479.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a0de4b2c-f771-4ee9-9719-9c6e2c752181/DSC05488-Enhanced-NR.jpg",
        "width": 3772,
        "height": 3971,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f33b755f-dfa5-405a-a6f2-3da647cafb0b/DSC05515.jpg",
        "width": 4173,
        "height": 3700,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4ff8b53-9a96-48e4-8cde-dc5bb43fc81a/DSC05490.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88584ae5-d077-4491-8090-66f0f016f4cb/DSC05546.jpg",
        "width": 4428,
        "height": 6602,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26c95196-1f9f-4089-b492-68402d41ad43/DSC05549-Enhanced-NR.jpg",
        "width": 4175,
        "height": 5850,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18d34bf5-ee42-4c22-a669-8920652d6325/DSC05589.jpg",
        "width": 5375,
        "height": 3870,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ac28dcda-8f78-4754-b8a7-0d8886985585/DSC05594.jpg",
        "width": 6287,
        "height": 3943,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3fc23294-1db2-43ad-91e3-b9154010e2fd/DSC05592.jpg",
        "width": 6849,
        "height": 3714,
        "alt": "L & A"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b39ef6a-3dce-4e53-8690-f2b901c0f624/DSC05585.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "L & A"
      }
    ]
  },
  {
    "slug": "helmi-joona",
    "location": "Helsinki, Finland",
    "couple": "Helmi & Joona",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "HELMI & JOONA",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4bf06cd7-e473-4287-9fbe-d19ee63d608d/SAI05779.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI05779.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7aee6c3-01a2-45e1-8a2d-6a873baa3fff/SAI05795.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05795.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a30c727f-1326-433d-9328-98ed59b8d72e/SAI05771.jpg",
        "width": 1405,
        "height": 2135,
        "alt": "SAI05771.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53c9ea3b-ae8d-40c1-b038-361675e35b5a/SAI06083.jpg",
        "width": 1635,
        "height": 1834,
        "alt": "SAI06083.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/52025a90-0ac3-4a84-9591-861e1129cec5/DSC06124.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "DSC06124.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/784b8364-db83-4f1a-9dde-c99f2d641bfa/SAI06111.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI06111.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2e2d3de-177d-4684-a366-4f616eeea3ac/SAI05695.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05695.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9478678-7337-4221-93a7-fd91f9cdbe24/SAI06107.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI06107.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e82978a7-7012-43de-8e57-461582de9e00/SAI06093.jpg",
        "width": 1679,
        "height": 1785,
        "alt": "SAI06093.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8601012e-ef08-4b2c-9137-700b91b73a9e/SAI06003.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI06003.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e501ade-cf24-423f-ba5a-d8c03607bf88/SAI05812.jpg",
        "width": 2097,
        "height": 1429,
        "alt": "SAI05812.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92a2ef90-dfc7-414f-94d8-6af7658724bf/SAI05793.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI05793.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b46344a4-59b2-4246-b45a-246152deef14/SAI05769.jpg",
        "width": 2096,
        "height": 1430,
        "alt": "SAI05769.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c852747e-78c0-4770-a85e-4c9341fedf39/SAI06227.jpg",
        "width": 2362,
        "height": 1269,
        "alt": "SAI06227.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6e0fcc4e-5afe-42f8-9eb4-17ddb6a67346/SAI06012.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI06012.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/821fa224-28a3-4872-945d-2f91a7ce2228/SAI05892.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05892.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61266cc6-22b9-48a2-9bb6-b755cb3b97de/SAI06060.jpg",
        "width": 2059,
        "height": 1457,
        "alt": "SAI06060.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69259970-8588-428d-a6e7-719fd83a50a1/SAI05833.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI05833.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7adc6e24-6148-43a5-9c53-9c4a4a6cd9b4/SAI05861.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05861.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ed8d0108-93e5-4fb5-94c2-b730c86ba7ca/WEdding_14_10.jpg",
        "width": 981,
        "height": 1417,
        "alt": "WEdding_14_10.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f17be4e-7da1-4189-953c-219b5f75f601/SAI06004.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI06004.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/680afd49-fa72-475c-ae21-b4c227561a11/SAI05984.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05984.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4847dab1-f67f-49fa-88f1-13431a1820b8/DSC06159.jpg",
        "width": 1423,
        "height": 2108,
        "alt": "DSC06159.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/73bc50c3-3599-4ba8-9474-397b04523041/SAI05980.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05980.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afd22e30-e7e1-4eff-9035-a9d44631c816/SAI05939.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Classic Wedding Portrait"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/17825b0b-cff9-473b-9000-099aa3f33968/SAI05932.jpg",
        "width": 2046,
        "height": 1466,
        "alt": "Elegant Wedding Reception"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a793ec2a-6a55-4bbc-99af-aa2b555bbcea/SAI05930.jpg",
        "width": 1800,
        "height": 1666,
        "alt": "SAI05930.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93e04da2-3651-4dbb-90e8-08e0a99bc2f9/SAI05926.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05926.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b308b8cc-da40-40b3-8152-a8f41278a512/SAI05923.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05923.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8fab1e9b-4d45-4f9d-a50a-a879da5ae2e7/SAI06035.jpg",
        "width": 2166,
        "height": 1385,
        "alt": "SAI06035.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77a668f2-bda6-4de0-a652-55f57574a561/SAI05915.jpg",
        "width": 1478,
        "height": 2028,
        "alt": "SAI05915.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0b3262c-0bf7-4e43-b9e3-bfc55dcf42c0/SAI05916.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI05916.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d26d8db2-0e6e-429b-a93c-41a087c0f8ae/SAI05911.jpg",
        "width": 2037,
        "height": 1472,
        "alt": "SAI05911.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0f74c7b-b865-4b94-8ff0-3e2c633fd880/DSC06119.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "DSC06119.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22068101-eaa3-47b9-b389-2cc424d697d7/DSC06110-Enhanced-NR.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "DSC06110-Enhanced-NR.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7dc5518f-a380-43cc-8b0c-9005ba122e42/SAI05874-Enhanced-NR.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI05874-Enhanced-NR.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75b8793a-245b-4455-8dd9-0270128d7988/SAI05857.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05857.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/95183d34-0312-4995-b833-3f2e9c37202b/SAI05844.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05844.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1d97e4b0-8526-4d5f-bdd7-73c781ffba5a/SAI05825.jpg",
        "width": 1385,
        "height": 2166,
        "alt": "SAI05825.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bc06c40e-b224-41f1-ba03-31984ece0db0/SAI05787.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI05787.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0354707-49c8-4e6e-88ca-bff43de8beed/SAI05714.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05714.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/63cceaf7-5eb0-4c62-a08d-c93905ea1ed1/DSC06101.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "DSC06101.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/518feea9-83fb-432c-975a-da54eb208f37/DSC06116.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "DSC06116.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ae561c48-9dac-46de-9733-c72862cf84a4/SAI05983.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05983.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aae22aec-8333-47be-a29e-40fe8404a8e3/SAI06101.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI06101.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a3920b0-607c-4e47-a91e-da82e92da20a/SAI06082.jpg",
        "width": 2287,
        "height": 1311,
        "alt": "SAI06082.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d65da66-aa00-466f-9e15-7c88b9dbeef8/SAI06072.jpg",
        "width": 2190,
        "height": 1369,
        "alt": "SAI06072.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/74a45e9f-e751-4345-ab07-5955c1624d59/SAI06066.jpg",
        "width": 1451,
        "height": 2067,
        "alt": "SAI06066.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/08a2eb85-f8dc-44d7-8513-697c2fd5e2e9/SAI06004.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI06004.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aaccf1fc-86fa-4c29-85bb-fa32e25b5e05/SAI06055.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI06055.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/12b1a136-7bc5-43b8-b44a-ccd83d704625/SAI06050.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI06050.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/60353332-f441-44fc-a4f2-198b730ca5ed/SAI06043.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI06043.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9485dbe-d38f-44ba-ba14-2338028c5d3c/SAI06028.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI06028.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/990f1a26-8cd5-4546-9e6a-8d15c327b4d0/SAI06021.jpg",
        "width": 1541,
        "height": 1945,
        "alt": "SAI06021.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93efac04-58b2-4f10-ac01-6f353b9ba5f6/SAI06027.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "SAI06027.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c17a1604-836e-4e3f-bb36-b3d06e4d25d4/SAI06016.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI06016.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/99cf9076-c90d-4a82-8980-135f0397106a/SAI06013.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI06013.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b417e536-fded-492e-9db9-b86f02a2bb47/DSC06151.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "DSC06151.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c069e843-583b-4ea1-86ef-6372a3a21896/SAI05929.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05929.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e77d1897-a6e2-4cca-adb6-ddb88386bea4/DSC06110-Enhanced-NR.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "DSC06110-Enhanced-NR.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/edfd2a8e-4ee8-4c95-a1cf-957c29f73376/SAI05865.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05865.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9fd77b2d-7613-45f6-bb55-9e5f6673dd34/SAI05851.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "SAI05851.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4bf06cd7-e473-4287-9fbe-d19ee63d608d/SAI05779.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7aee6c3-01a2-45e1-8a2d-6a873baa3fff/SAI05795.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a30c727f-1326-433d-9328-98ed59b8d72e/SAI05771.jpg",
        "width": 1405,
        "height": 2135,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53c9ea3b-ae8d-40c1-b038-361675e35b5a/SAI06083.jpg",
        "width": 1635,
        "height": 1834,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/52025a90-0ac3-4a84-9591-861e1129cec5/DSC06124.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/784b8364-db83-4f1a-9dde-c99f2d641bfa/SAI06111.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2e2d3de-177d-4684-a366-4f616eeea3ac/SAI05695.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9478678-7337-4221-93a7-fd91f9cdbe24/SAI06107.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e82978a7-7012-43de-8e57-461582de9e00/SAI06093.jpg",
        "width": 1679,
        "height": 1785,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8601012e-ef08-4b2c-9137-700b91b73a9e/SAI06003.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e501ade-cf24-423f-ba5a-d8c03607bf88/SAI05812.jpg",
        "width": 2097,
        "height": 1429,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92a2ef90-dfc7-414f-94d8-6af7658724bf/SAI05793.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b46344a4-59b2-4246-b45a-246152deef14/SAI05769.jpg",
        "width": 2096,
        "height": 1430,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c852747e-78c0-4770-a85e-4c9341fedf39/SAI06227.jpg",
        "width": 2362,
        "height": 1269,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6e0fcc4e-5afe-42f8-9eb4-17ddb6a67346/SAI06012.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/821fa224-28a3-4872-945d-2f91a7ce2228/SAI05892.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61266cc6-22b9-48a2-9bb6-b755cb3b97de/SAI06060.jpg",
        "width": 2059,
        "height": 1457,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69259970-8588-428d-a6e7-719fd83a50a1/SAI05833.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7adc6e24-6148-43a5-9c53-9c4a4a6cd9b4/SAI05861.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ed8d0108-93e5-4fb5-94c2-b730c86ba7ca/WEdding_14_10.jpg",
        "width": 981,
        "height": 1417,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f17be4e-7da1-4189-953c-219b5f75f601/SAI06004.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/680afd49-fa72-475c-ae21-b4c227561a11/SAI05984.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4847dab1-f67f-49fa-88f1-13431a1820b8/DSC06159.jpg",
        "width": 1423,
        "height": 2108,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/73bc50c3-3599-4ba8-9474-397b04523041/SAI05980.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afd22e30-e7e1-4eff-9035-a9d44631c816/SAI05939.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/17825b0b-cff9-473b-9000-099aa3f33968/SAI05932.jpg",
        "width": 2046,
        "height": 1466,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a793ec2a-6a55-4bbc-99af-aa2b555bbcea/SAI05930.jpg",
        "width": 1800,
        "height": 1666,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93e04da2-3651-4dbb-90e8-08e0a99bc2f9/SAI05926.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b308b8cc-da40-40b3-8152-a8f41278a512/SAI05923.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8fab1e9b-4d45-4f9d-a50a-a879da5ae2e7/SAI06035.jpg",
        "width": 2166,
        "height": 1385,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77a668f2-bda6-4de0-a652-55f57574a561/SAI05915.jpg",
        "width": 1478,
        "height": 2028,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0b3262c-0bf7-4e43-b9e3-bfc55dcf42c0/SAI05916.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d26d8db2-0e6e-429b-a93c-41a087c0f8ae/SAI05911.jpg",
        "width": 2037,
        "height": 1472,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0f74c7b-b865-4b94-8ff0-3e2c633fd880/DSC06119.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22068101-eaa3-47b9-b389-2cc424d697d7/DSC06110-Enhanced-NR.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7dc5518f-a380-43cc-8b0c-9005ba122e42/SAI05874-Enhanced-NR.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75b8793a-245b-4455-8dd9-0270128d7988/SAI05857.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/95183d34-0312-4995-b833-3f2e9c37202b/SAI05844.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1d97e4b0-8526-4d5f-bdd7-73c781ffba5a/SAI05825.jpg",
        "width": 1385,
        "height": 2166,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bc06c40e-b224-41f1-ba03-31984ece0db0/SAI05787.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0354707-49c8-4e6e-88ca-bff43de8beed/SAI05714.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/63cceaf7-5eb0-4c62-a08d-c93905ea1ed1/DSC06101.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/518feea9-83fb-432c-975a-da54eb208f37/DSC06116.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ae561c48-9dac-46de-9733-c72862cf84a4/SAI05983.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aae22aec-8333-47be-a29e-40fe8404a8e3/SAI06101.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a3920b0-607c-4e47-a91e-da82e92da20a/SAI06082.jpg",
        "width": 2287,
        "height": 1311,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d65da66-aa00-466f-9e15-7c88b9dbeef8/SAI06072.jpg",
        "width": 2190,
        "height": 1369,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/74a45e9f-e751-4345-ab07-5955c1624d59/SAI06066.jpg",
        "width": 1451,
        "height": 2067,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/08a2eb85-f8dc-44d7-8513-697c2fd5e2e9/SAI06004.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aaccf1fc-86fa-4c29-85bb-fa32e25b5e05/SAI06055.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/12b1a136-7bc5-43b8-b44a-ccd83d704625/SAI06050.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/60353332-f441-44fc-a4f2-198b730ca5ed/SAI06043.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9485dbe-d38f-44ba-ba14-2338028c5d3c/SAI06028.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/990f1a26-8cd5-4546-9e6a-8d15c327b4d0/SAI06021.jpg",
        "width": 1541,
        "height": 1945,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93efac04-58b2-4f10-ac01-6f353b9ba5f6/SAI06027.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c17a1604-836e-4e3f-bb36-b3d06e4d25d4/SAI06016.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/99cf9076-c90d-4a82-8980-135f0397106a/SAI06013.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b417e536-fded-492e-9db9-b86f02a2bb47/DSC06151.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c069e843-583b-4ea1-86ef-6372a3a21896/SAI05929.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e77d1897-a6e2-4cca-adb6-ddb88386bea4/DSC06110-Enhanced-NR.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/edfd2a8e-4ee8-4c95-a1cf-957c29f73376/SAI05865.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9fd77b2d-7613-45f6-bb55-9e5f6673dd34/SAI05851.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "HELMI & JOONA"
      }
    ]
  },
  {
    "slug": "lotta-toni",
    "location": "Helsinki, Finland",
    "couple": "Lotta & Toni",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "LOTTA & TONI",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a520f4b6-3535-4a61-ae8e-b066d1ba92ee/A7305934.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ba5279b-60a3-464d-aee8-bd62bb8ac3da/A7306213.jpg",
        "width": 2292,
        "height": 1587,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ad82df24-8c2e-4dad-8a55-99e524533959/A7306061.jpg",
        "width": 1712,
        "height": 1183,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8901a89b-5a9f-437b-a359-03d484f1fb05/A7306103.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7d59886e-68d8-46c3-aded-21793ed2e06e/A7305676.jpg",
        "width": 1122,
        "height": 1115,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8c75a6d-2fbc-4efc-8cda-648284ccabfb/A7305809.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc5e84a7-35aa-4c7a-996b-c37457a166a2/A7306371.jpg",
        "width": 1623,
        "height": 2110,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7293d49-2335-47e2-a24f-e6cc7cde76df/A7306131.jpg",
        "width": 2448,
        "height": 1633,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3be5b8cc-652d-412e-acba-811599117052/A7305675.jpg",
        "width": 1387,
        "height": 2431,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70958924-95c3-4788-b65e-116bd85209c6/A7306281.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e830c4a9-f4fc-4dab-ab1a-3112a5e0809e/A7305690.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4618dd40-6420-4c72-9f23-7c710eb974dc/A7306376.jpg",
        "width": 1558,
        "height": 2243,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab68131a-9aa4-4ee3-aa49-3252a0c6b07c/A7306147.jpg",
        "width": 2452,
        "height": 1636,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89970af0-4552-49e4-9361-bbb14fa33ce4/A7306075.jpg",
        "width": 1602,
        "height": 2391,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79534c7d-4546-4d2a-bffc-fc84f79c037d/A7306077.jpg",
        "width": 1643,
        "height": 2392,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f95fa90-ade5-4822-a965-1f88bd91f613/A7306210.jpg",
        "width": 1963,
        "height": 1524,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8fe21391-2b0c-4987-80c1-a62aaa993402/A7305702.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f2a1ab1-ddeb-4cde-afde-995d49edd521/A7306184.jpg",
        "width": 2533,
        "height": 1690,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a7f41ac-7cf9-44c7-bf0b-675303e97584/A7306141.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/13301486-1724-4ef1-a8c3-aff4cc3d919d/A7306160.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3e212975-fade-4aa4-be8d-0ebb6e3b65c4/A7306161.jpg",
        "width": 2303,
        "height": 1537,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76dfae09-f62c-43df-96a9-85876edb20d4/A7306163.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b01bb17d-7bf9-49a0-9476-786de0cb1fc6/A7306164.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5cac7ed9-b916-4267-9921-5151d6b84d88/A7306166.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3eadf089-3c74-4aa0-bfbf-29985bbf515d/A7306167.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76166621-e2f8-4024-820e-1b41cb46e8f6/A7306088.jpg",
        "width": 1697,
        "height": 2453,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/97568ac1-8fc4-4e97-b206-f7e2db7b2883/A7305691.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c92a0231-fe12-4508-a67f-272b39b3a3ce/A7306168.jpg",
        "width": 2263,
        "height": 1683,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/adc23648-9149-4fe9-8f05-461f01bcbc93/A7306169.jpg",
        "width": 2022,
        "height": 1477,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1c100a26-97b3-4c8a-92c0-5f6d9b29e7db/A7306122.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a631cc4-fdd5-4096-9eaa-3a2b03e69c14/A7306170.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77243b3e-590e-476a-aeb6-3ab19e0b5441/A7306172.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/00627d10-9a42-4e91-9789-b0502aaf49c6/A7306175.jpg",
        "width": 1208,
        "height": 1511,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f737361f-14a8-4a37-9e07-e8f745fcf4b8/A7306177.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f783452e-c809-47ba-b000-6cd8801497de/A7306179.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6cf1024-dfd9-405e-85e4-c8e8351d1d5c/A7306188.jpg",
        "width": 2124,
        "height": 1421,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/51e486a8-3477-41fc-8456-13d3c495c62a/A7306194.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3132ac51-a5b9-4e18-ba85-2652c91b8761/A7306199.jpg",
        "width": 2290,
        "height": 1663,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/552b9d9f-af33-4766-8275-f94bcb7c1fc6/A7306202.jpg",
        "width": 2019,
        "height": 1231,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f1b4e6be-638a-46da-95d8-bff318a0f41d/A7306212.jpg",
        "width": 882,
        "height": 1254,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/485b5d27-b0ec-42ce-9068-8ac14b2374bc/A7306214.jpg",
        "width": 953,
        "height": 1400,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/845c64bd-ef03-4899-9468-7e74aa5a0f57/A7306215.jpg",
        "width": 2139,
        "height": 1588,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3657175-d620-4579-ad58-570b93d673f4/A7306216.jpg",
        "width": 2504,
        "height": 1671,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f83b368-d457-4295-b573-c7c65de080b4/A7306217.jpg",
        "width": 1574,
        "height": 2359,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ae16eb4c-0d8c-432b-8bc7-68b5dd6019df/A7306222.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7395cc39-7e37-47f1-a4f9-29219059e026/A7306225.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/11c5ead5-8bc4-41c2-97bf-e4cd038547fd/A7306240.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7972a615-39ea-4927-94c3-73d12e595894/A7306241.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/08229cab-3233-46e5-883a-29c03a3d08f3/A7305687.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/118a93b2-7f28-4718-806e-88e5d9885e87/A7305713.jpg",
        "width": 1567,
        "height": 2267,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f677bbc-912a-4a46-a092-46ed3e9316df/A7306008.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c29880d-d8ae-479f-b7d8-b3186c588cb3/A7305725.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c33d01df-59f4-4cee-9951-13b816430478/A7305989.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d92a947e-10e3-48b2-a7f9-eaf898f8f0dc/A7305982.jpg",
        "width": 1298,
        "height": 1559,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23e9f738-ed5f-48db-84a7-a20af9851fee/A7305733.jpg",
        "width": 1173,
        "height": 1187,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/532e1123-196f-428a-99ee-d9eb0381eb14/A7305737.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35d9da73-cb4c-4848-95cc-5eed70fec5d6/A7305746.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/953de4c3-945a-4dbc-ac7a-a656922a56de/A7305753.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44e76ba8-1204-42b6-961f-bd7088051067/A7306031.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4d35c283-6bd7-42f6-a09d-46c6162c1ed6/A7305754.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/793f0d83-154f-4594-8119-4fc00d7403d2/A7305764.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e59fb73-dd4b-4184-8d55-c2a1f3571889/A7305769.jpg",
        "width": 1308,
        "height": 1468,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53e037d3-28b6-4f2b-94c1-01fb04d084d8/A7305772.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/258cad26-7720-43c6-a0b5-981977ea4543/A7305985.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebe22171-48a4-4100-a542-84de7a73b6ef/A7306059.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a17d1fbf-3b6b-4024-bb2a-da1f16a8439e/A7305778.jpg",
        "width": 1337,
        "height": 1840,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5846daa-9d42-41f0-a265-fa69ea35d994/A7305785.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a391b89-e60a-4eaf-84c6-518a869e1dd0/A7305786.jpg",
        "width": 2185,
        "height": 976,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4059d68c-5e23-490b-b10d-e98cdef877fa/A7305789.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb5a7f8f-30d7-42e7-8a8b-f824ae5f1a60/A7305806.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62275253-c9f8-49e0-81f1-f8bcd33cf91c/A7305807.jpg",
        "width": 1708,
        "height": 2369,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/15a25f4d-1046-4b47-9ddb-a30766c57041/A7305808.jpg",
        "width": 1251,
        "height": 1751,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ac3dbca2-3773-4d49-914b-be1c759a9b40/A7306011.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d8972a5d-1d73-451f-864f-8e1829af74a6/A7305855.jpg",
        "width": 1303,
        "height": 1678,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b44c9a81-ae95-4f80-859a-8f858283bee8/A7305859.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5eab0829-5b1b-4ce1-a2a7-4cb66ab59b9e/A7306008.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b989e277-23b3-4882-96f7-d3620531257a/A7305862.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a79b3546-6b10-42f3-9aea-3c06d935cb15/A7305866.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d13e4ce-8700-4904-a7b7-79ce153f4f2b/A7305881.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bb00ba84-eb03-4e22-8202-6c0c74eaf9ce/A7305886.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e084c238-522a-4119-b30c-05401388ebcb/A7305900.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5044edc6-85d5-4741-9e30-46f4c8a67abb/A7305909.jpg",
        "width": 1401,
        "height": 2144,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fad6118b-8b1c-44e1-adcd-5d8f7ba417c2/A7305921.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a47c6ca-3d2d-4c6e-84a7-c97a021f6fea/A7305927.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5bfd0b18-c3bd-4ace-bfcf-fee415f39d0d/A7305930.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a067767f-fd2d-468f-9441-783f47e01cc2/A7305965.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/48854277-fcdd-4027-ae68-09f540018f62/A7305981.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c17386af-f613-4743-8a06-7cb62deb8de2/A7306314.jpg",
        "width": 1595,
        "height": 2222,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/280ead91-fc60-40e4-8d43-2ae42e2bc947/A7306317.jpg",
        "width": 1612,
        "height": 2222,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7faa3d79-07da-4fe2-87e3-4f36aa9068fd/A7306394.jpg",
        "width": 1708,
        "height": 2554,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/af47c54e-8ada-490d-9085-8bf087511a48/A7306248.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a356906-1954-4eb6-a392-0a077d454b79/A7306346.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6b7bcd7-c1d6-44a4-9f17-6327b3ab1f7e/A7306272.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/25b2d6d9-b0ff-4c77-9623-645305df4508/A7306249.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f51cca50-fc47-450b-8d28-8c0d14b43bf5/A7306276.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/173802ad-b0a6-42dc-b230-0c32c3d855e3/A7306342.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb7cdf4f-49d1-411a-adbb-1bd76b91b823/A7306256.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b9ad1a1a-d3c4-4028-932f-95aa1d01c06d/A7306262.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/552890ac-646a-428a-b55d-bb8dc096c339/A7306260.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc8516e9-f4df-435f-8526-6624924a13fd/A7306265.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6e73007-f3ee-4815-8591-f053ee61c1fe/A7306328.jpg",
        "width": 1708,
        "height": 2239,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fcf04897-292f-4ae1-837f-8ce82af252d5/A7306397.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18d10620-ffa0-4bef-9086-91e0a6c2c811/A7306261.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d769c50f-d054-444a-8ad5-b3b04118b1d8/A7306250.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3daba7a9-ec87-4f6f-828e-0e9c968d9843/A7306352.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fd2d52af-9f1d-4266-abd2-4f2e5f8dc9c2/A7306242.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c540850-e7ad-493d-b082-f2eed1c2d7c4/A7306359.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4cc0f5b9-daf7-4328-9fe9-93aff295134d/A7306369.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/37b67909-de8d-43eb-bedd-8255648822b6/A7306311.jpg",
        "width": 2450,
        "height": 1635,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b9f103d-5249-4ea3-94f5-5e9c45d89c44/A7306271.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a520f4b6-3535-4a61-ae8e-b066d1ba92ee/A7305934.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ba5279b-60a3-464d-aee8-bd62bb8ac3da/A7306213.jpg",
        "width": 2292,
        "height": 1587,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ad82df24-8c2e-4dad-8a55-99e524533959/A7306061.jpg",
        "width": 1712,
        "height": 1183,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8901a89b-5a9f-437b-a359-03d484f1fb05/A7306103.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7d59886e-68d8-46c3-aded-21793ed2e06e/A7305676.jpg",
        "width": 1122,
        "height": 1115,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8c75a6d-2fbc-4efc-8cda-648284ccabfb/A7305809.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc5e84a7-35aa-4c7a-996b-c37457a166a2/A7306371.jpg",
        "width": 1623,
        "height": 2110,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7293d49-2335-47e2-a24f-e6cc7cde76df/A7306131.jpg",
        "width": 2448,
        "height": 1633,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3be5b8cc-652d-412e-acba-811599117052/A7305675.jpg",
        "width": 1387,
        "height": 2431,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70958924-95c3-4788-b65e-116bd85209c6/A7306281.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e830c4a9-f4fc-4dab-ab1a-3112a5e0809e/A7305690.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4618dd40-6420-4c72-9f23-7c710eb974dc/A7306376.jpg",
        "width": 1558,
        "height": 2243,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab68131a-9aa4-4ee3-aa49-3252a0c6b07c/A7306147.jpg",
        "width": 2452,
        "height": 1636,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89970af0-4552-49e4-9361-bbb14fa33ce4/A7306075.jpg",
        "width": 1602,
        "height": 2391,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79534c7d-4546-4d2a-bffc-fc84f79c037d/A7306077.jpg",
        "width": 1643,
        "height": 2392,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f95fa90-ade5-4822-a965-1f88bd91f613/A7306210.jpg",
        "width": 1963,
        "height": 1524,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8fe21391-2b0c-4987-80c1-a62aaa993402/A7305702.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f2a1ab1-ddeb-4cde-afde-995d49edd521/A7306184.jpg",
        "width": 2533,
        "height": 1690,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a7f41ac-7cf9-44c7-bf0b-675303e97584/A7306141.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/13301486-1724-4ef1-a8c3-aff4cc3d919d/A7306160.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3e212975-fade-4aa4-be8d-0ebb6e3b65c4/A7306161.jpg",
        "width": 2303,
        "height": 1537,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76dfae09-f62c-43df-96a9-85876edb20d4/A7306163.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b01bb17d-7bf9-49a0-9476-786de0cb1fc6/A7306164.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5cac7ed9-b916-4267-9921-5151d6b84d88/A7306166.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3eadf089-3c74-4aa0-bfbf-29985bbf515d/A7306167.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76166621-e2f8-4024-820e-1b41cb46e8f6/A7306088.jpg",
        "width": 1697,
        "height": 2453,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/97568ac1-8fc4-4e97-b206-f7e2db7b2883/A7305691.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c92a0231-fe12-4508-a67f-272b39b3a3ce/A7306168.jpg",
        "width": 2263,
        "height": 1683,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/adc23648-9149-4fe9-8f05-461f01bcbc93/A7306169.jpg",
        "width": 2022,
        "height": 1477,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1c100a26-97b3-4c8a-92c0-5f6d9b29e7db/A7306122.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a631cc4-fdd5-4096-9eaa-3a2b03e69c14/A7306170.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77243b3e-590e-476a-aeb6-3ab19e0b5441/A7306172.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/00627d10-9a42-4e91-9789-b0502aaf49c6/A7306175.jpg",
        "width": 1208,
        "height": 1511,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f737361f-14a8-4a37-9e07-e8f745fcf4b8/A7306177.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f783452e-c809-47ba-b000-6cd8801497de/A7306179.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6cf1024-dfd9-405e-85e4-c8e8351d1d5c/A7306188.jpg",
        "width": 2124,
        "height": 1421,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/51e486a8-3477-41fc-8456-13d3c495c62a/A7306194.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3132ac51-a5b9-4e18-ba85-2652c91b8761/A7306199.jpg",
        "width": 2290,
        "height": 1663,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/552b9d9f-af33-4766-8275-f94bcb7c1fc6/A7306202.jpg",
        "width": 2019,
        "height": 1231,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f1b4e6be-638a-46da-95d8-bff318a0f41d/A7306212.jpg",
        "width": 882,
        "height": 1254,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/485b5d27-b0ec-42ce-9068-8ac14b2374bc/A7306214.jpg",
        "width": 953,
        "height": 1400,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/845c64bd-ef03-4899-9468-7e74aa5a0f57/A7306215.jpg",
        "width": 2139,
        "height": 1588,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3657175-d620-4579-ad58-570b93d673f4/A7306216.jpg",
        "width": 2504,
        "height": 1671,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f83b368-d457-4295-b573-c7c65de080b4/A7306217.jpg",
        "width": 1574,
        "height": 2359,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ae16eb4c-0d8c-432b-8bc7-68b5dd6019df/A7306222.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7395cc39-7e37-47f1-a4f9-29219059e026/A7306225.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/11c5ead5-8bc4-41c2-97bf-e4cd038547fd/A7306240.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7972a615-39ea-4927-94c3-73d12e595894/A7306241.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/08229cab-3233-46e5-883a-29c03a3d08f3/A7305687.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/118a93b2-7f28-4718-806e-88e5d9885e87/A7305713.jpg",
        "width": 1567,
        "height": 2267,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f677bbc-912a-4a46-a092-46ed3e9316df/A7306008.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c29880d-d8ae-479f-b7d8-b3186c588cb3/A7305725.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c33d01df-59f4-4cee-9951-13b816430478/A7305989.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d92a947e-10e3-48b2-a7f9-eaf898f8f0dc/A7305982.jpg",
        "width": 1298,
        "height": 1559,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23e9f738-ed5f-48db-84a7-a20af9851fee/A7305733.jpg",
        "width": 1173,
        "height": 1187,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/532e1123-196f-428a-99ee-d9eb0381eb14/A7305737.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35d9da73-cb4c-4848-95cc-5eed70fec5d6/A7305746.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/953de4c3-945a-4dbc-ac7a-a656922a56de/A7305753.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44e76ba8-1204-42b6-961f-bd7088051067/A7306031.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4d35c283-6bd7-42f6-a09d-46c6162c1ed6/A7305754.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/793f0d83-154f-4594-8119-4fc00d7403d2/A7305764.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e59fb73-dd4b-4184-8d55-c2a1f3571889/A7305769.jpg",
        "width": 1308,
        "height": 1468,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53e037d3-28b6-4f2b-94c1-01fb04d084d8/A7305772.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/258cad26-7720-43c6-a0b5-981977ea4543/A7305985.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebe22171-48a4-4100-a542-84de7a73b6ef/A7306059.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a17d1fbf-3b6b-4024-bb2a-da1f16a8439e/A7305778.jpg",
        "width": 1337,
        "height": 1840,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5846daa-9d42-41f0-a265-fa69ea35d994/A7305785.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a391b89-e60a-4eaf-84c6-518a869e1dd0/A7305786.jpg",
        "width": 2185,
        "height": 976,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4059d68c-5e23-490b-b10d-e98cdef877fa/A7305789.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb5a7f8f-30d7-42e7-8a8b-f824ae5f1a60/A7305806.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62275253-c9f8-49e0-81f1-f8bcd33cf91c/A7305807.jpg",
        "width": 1708,
        "height": 2369,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/15a25f4d-1046-4b47-9ddb-a30766c57041/A7305808.jpg",
        "width": 1251,
        "height": 1751,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ac3dbca2-3773-4d49-914b-be1c759a9b40/A7306011.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d8972a5d-1d73-451f-864f-8e1829af74a6/A7305855.jpg",
        "width": 1303,
        "height": 1678,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b44c9a81-ae95-4f80-859a-8f858283bee8/A7305859.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5eab0829-5b1b-4ce1-a2a7-4cb66ab59b9e/A7306008.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b989e277-23b3-4882-96f7-d3620531257a/A7305862.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a79b3546-6b10-42f3-9aea-3c06d935cb15/A7305866.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d13e4ce-8700-4904-a7b7-79ce153f4f2b/A7305881.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bb00ba84-eb03-4e22-8202-6c0c74eaf9ce/A7305886.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e084c238-522a-4119-b30c-05401388ebcb/A7305900.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5044edc6-85d5-4741-9e30-46f4c8a67abb/A7305909.jpg",
        "width": 1401,
        "height": 2144,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fad6118b-8b1c-44e1-adcd-5d8f7ba417c2/A7305921.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a47c6ca-3d2d-4c6e-84a7-c97a021f6fea/A7305927.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5bfd0b18-c3bd-4ace-bfcf-fee415f39d0d/A7305930.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a067767f-fd2d-468f-9441-783f47e01cc2/A7305965.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/48854277-fcdd-4027-ae68-09f540018f62/A7305981.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c17386af-f613-4743-8a06-7cb62deb8de2/A7306314.jpg",
        "width": 1595,
        "height": 2222,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/280ead91-fc60-40e4-8d43-2ae42e2bc947/A7306317.jpg",
        "width": 1612,
        "height": 2222,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7faa3d79-07da-4fe2-87e3-4f36aa9068fd/A7306394.jpg",
        "width": 1708,
        "height": 2554,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/af47c54e-8ada-490d-9085-8bf087511a48/A7306248.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a356906-1954-4eb6-a392-0a077d454b79/A7306346.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6b7bcd7-c1d6-44a4-9f17-6327b3ab1f7e/A7306272.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/25b2d6d9-b0ff-4c77-9623-645305df4508/A7306249.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f51cca50-fc47-450b-8d28-8c0d14b43bf5/A7306276.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/173802ad-b0a6-42dc-b230-0c32c3d855e3/A7306342.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb7cdf4f-49d1-411a-adbb-1bd76b91b823/A7306256.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b9ad1a1a-d3c4-4028-932f-95aa1d01c06d/A7306262.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/552890ac-646a-428a-b55d-bb8dc096c339/A7306260.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc8516e9-f4df-435f-8526-6624924a13fd/A7306265.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6e73007-f3ee-4815-8591-f053ee61c1fe/A7306328.jpg",
        "width": 1708,
        "height": 2239,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fcf04897-292f-4ae1-837f-8ce82af252d5/A7306397.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18d10620-ffa0-4bef-9086-91e0a6c2c811/A7306261.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d769c50f-d054-444a-8ad5-b3b04118b1d8/A7306250.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3daba7a9-ec87-4f6f-828e-0e9c968d9843/A7306352.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fd2d52af-9f1d-4266-abd2-4f2e5f8dc9c2/A7306242.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c540850-e7ad-493d-b082-f2eed1c2d7c4/A7306359.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4cc0f5b9-daf7-4328-9fe9-93aff295134d/A7306369.jpg",
        "width": 2560,
        "height": 1708,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/37b67909-de8d-43eb-bedd-8255648822b6/A7306311.jpg",
        "width": 2450,
        "height": 1635,
        "alt": "LOTTA & TONI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b9f103d-5249-4ea3-94f5-5e9c45d89c44/A7306271.jpg",
        "width": 1708,
        "height": 2560,
        "alt": "LOTTA & TONI"
      }
    ]
  },
  {
    "slug": "l-l",
    "location": "Helsinki, Finland",
    "couple": "L & L",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "L & L",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9a045ba7-8c54-4be5-9d38-7ccafa335561/1AG01957.jpg",
        "width": 1673,
        "height": 2046,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dce58da2-8193-45be-bb4b-0f3d7e9767a5/1AG02087-Enhanced-NR.jpg",
        "width": 1424,
        "height": 2307,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/40117e51-a61a-4077-a0de-3413f7017618/1AG03260.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6992aaf7-82c5-4892-9e88-0a56ad3192df/1AG02044.jpg",
        "width": 1529,
        "height": 2199,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebbe2ca0-133f-4e5b-8639-dbb24f60197e/1AG02078.jpg",
        "width": 2307,
        "height": 1424,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/86f87759-40ce-46a3-a203-c477d53f3d12/1AG02098.jpg",
        "width": 1528,
        "height": 2249,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e367714b-39aa-4cb6-8b38-054cae2fc764/1AG02163.jpg",
        "width": 2249,
        "height": 1528,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ff31529d-3ef2-4feb-9e5c-9d03cd7a2a16/1AG02813.jpg",
        "width": 1134,
        "height": 1411,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2bd75a8-55e4-4436-b8f4-5cb4fd21fb12/1AG02253.jpg",
        "width": 1624,
        "height": 2155,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5da51c24-c119-46d9-8a22-bf271f26feb7/6H5A5118.jpg",
        "width": 2560,
        "height": 1707,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56356a83-ec01-46ae-8720-50aa6b76aa80/1AG02266.jpg",
        "width": 2057,
        "height": 1533,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f07983c-9f56-4412-ac05-823391a2195d/1AG02207.jpg",
        "width": 1878,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f20ff2ef-b180-4c84-a8af-eefbec7e430d/1AG02282.jpg",
        "width": 2341,
        "height": 1294,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/af9ab51b-a921-4980-83ed-218cef79cda4/1AG02328.jpg",
        "width": 1488,
        "height": 1926,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e481384-882f-4881-88b4-aa2a80f05a3d/1AG03258.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1528bdbe-024c-4308-9961-3e8e426ce235/1AG02343.jpg",
        "width": 1973,
        "height": 1519,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/944f72db-250a-4021-8a87-9a5c6c93d974/1AG02395.jpg",
        "width": 1707,
        "height": 2560,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b8b9f416-8405-423a-bfa7-7615b9503abf/1AG02407.jpg",
        "width": 1686,
        "height": 2446,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8089a0ce-ef22-4792-88b7-8719f86dcced/1AG02446.jpg",
        "width": 2513,
        "height": 1415,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d68e1d9d-e049-46db-a74a-168cc939356f/1AG02448.jpg",
        "width": 2513,
        "height": 1415,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fcce1d91-984f-4c1a-8334-318bc193b6be/1AG02500.jpg",
        "width": 1171,
        "height": 1874,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b694ffb7-f92d-4ff0-a594-68d6d18c1228/1AG02519.jpg",
        "width": 2127,
        "height": 1655,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a1c0a32-8476-4c54-9dce-78e7a2890264/1AG02622.jpg",
        "width": 2006,
        "height": 1477,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/522cfe48-44e8-467c-8b31-e21fed546c4e/1AG02525.jpg",
        "width": 1982,
        "height": 1344,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee1c76ab-b04e-4424-b1df-d61944b197a2/1AG02542.jpg",
        "width": 2453,
        "height": 1492,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b509c258-cf5f-40d2-872f-709cfed25b8a/1AG02552.jpg",
        "width": 1725,
        "height": 888,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c62ca9cf-50f0-4e5a-8e09-7091f30b9993/1AG02561.jpg",
        "width": 2192,
        "height": 1365,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a158bbb5-e8a6-4522-9f03-272c35f5ec74/1AG02563.jpg",
        "width": 1577,
        "height": 2042,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3053729a-db92-4bf6-a4f1-b2efba4ac7e5/1AG02569.jpg",
        "width": 1919,
        "height": 1612,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5e8b33ec-e53b-433a-ad49-6f314773b687/1AG02576.jpg",
        "width": 1612,
        "height": 1919,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5e05d362-6338-4b9a-a61b-5b27572093bb/1AG02593.jpg",
        "width": 1971,
        "height": 1577,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8a5e4e4-751f-4223-8780-6240983cbdee/1AG02610.jpg",
        "width": 2269,
        "height": 1574,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ddcc458c-cb90-4b84-ad78-f974e27c44ed/1AG02642.jpg",
        "width": 2172,
        "height": 1209,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d00162b1-b342-4328-908e-5cf3741b61b5/1AG02652.jpg",
        "width": 2089,
        "height": 1615,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/066db189-d602-4edd-8b17-75a56207956f/1AG02693.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/854b1da7-8393-46f8-99ac-5088732f03ba/1AG02740.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b0a6255-b4d9-4ccb-b9a8-93fd4fb0215c/1AG02749.jpg",
        "width": 2560,
        "height": 1574,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61d2ec98-4ed8-443e-936e-8757b4a9a078/1AG02756.jpg",
        "width": 2332,
        "height": 1418,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b06e7b6-1d37-4389-a507-d9be98f37590/1AG02760.jpg",
        "width": 2238,
        "height": 1311,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/50900f62-74a7-4039-9131-1b10f0386ec9/1AG02189.jpg",
        "width": 1513,
        "height": 2302,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79738166-fd12-4dca-984c-66715a7be68e/1AG02764.jpg",
        "width": 2387,
        "height": 1584,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0ff0801e-98ca-45b8-9e9c-bbab85ad4422/1AG02785.jpg",
        "width": 1836,
        "height": 1418,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/019de72f-44c7-4786-9719-d50dd3656154/1AG02790.jpg",
        "width": 2332,
        "height": 1557,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b87af802-17b5-44ea-987d-6c537935112f/1AG02800.jpg",
        "width": 1695,
        "height": 1273,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f53f632-f1f6-4c79-a67a-9772e346c4be/1AG02816.jpg",
        "width": 1165,
        "height": 1550,
        "alt": "Tender Couple Moment"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56f2eb52-9313-4f7b-a2ca-1e6f54f7d567/1AG02857.jpg",
        "width": 1934,
        "height": 1449,
        "alt": "Laughter-filled Wedding Scene"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1e697995-7d8a-4259-aa73-9412eae860a0/1AG02872.jpg",
        "width": 1805,
        "height": 1015,
        "alt": "Grand Ballroom Entrance"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc4e0a3e-3b11-4f89-86a5-df2fb55b6453/1AG02891.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9eb1ca8a-e115-4a09-8d2a-7b9335a49188/1AG02899.jpg",
        "width": 2283,
        "height": 1494,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ed8f194-499b-4b79-842e-fcc727b61ba3/1AG02908.jpg",
        "width": 2425,
        "height": 1370,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0cb1cb3d-4a87-4644-a2bb-9796669bda2b/1AG02916.jpg",
        "width": 2495,
        "height": 1534,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0fbc446-b03f-42b9-8746-1d298fee83fd/1AG02949.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b4fadeef-9197-4174-a5cb-6490a4f8463f/1AG02967.jpg",
        "width": 2287,
        "height": 1464,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef46aa88-dbc9-41e5-8c35-60da544c5d09/1AG02989.jpg",
        "width": 2013,
        "height": 1341,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d196e51-c609-49af-b2aa-d477294b59ca/1AG02993.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b14ba96-cc02-4ec5-b50c-4d8b5e3c2e8d/1AG02995.jpg",
        "width": 2449,
        "height": 1477,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44c66770-e82d-48a4-9ff7-e2a7fe1de46e/1AG03000.jpg",
        "width": 1847,
        "height": 1057,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b51b8b35-09fc-45df-8207-930578c6f5c2/1AG03003.jpg",
        "width": 2383,
        "height": 1376,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ecdcc545-ea35-4648-ba6d-05562ca34867/1AG03053.jpg",
        "width": 1812,
        "height": 1200,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7cb047ef-d14c-40a8-97d9-2967d734cca8/1AG03056.jpg",
        "width": 1875,
        "height": 1228,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/669a1ab0-c118-4561-a5b0-7405d771329a/1AG03075.jpg",
        "width": 2428,
        "height": 1546,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eaa1f396-040e-4907-aafd-c533ed5111c3/1AG03088.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/73a5f403-0eac-4fc5-a67c-7994f4d56d3c/1AG03179.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c884e69-270b-41aa-ab06-b48264aab16a/1AG03188.jpg",
        "width": 1441,
        "height": 2560,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7b75f22-7823-40a0-9d46-d164f7d58350/1AG03228.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/99f840d6-e1fa-4b0b-a3df-340ddddc56ad/1AG03261.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f3bea4e9-f2f3-413a-953c-a52b88bc1373/6H5A5116.jpg",
        "width": 2560,
        "height": 1478,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9a045ba7-8c54-4be5-9d38-7ccafa335561/1AG01957.jpg",
        "width": 1673,
        "height": 2046,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dce58da2-8193-45be-bb4b-0f3d7e9767a5/1AG02087-Enhanced-NR.jpg",
        "width": 1424,
        "height": 2307,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/40117e51-a61a-4077-a0de-3413f7017618/1AG03260.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6992aaf7-82c5-4892-9e88-0a56ad3192df/1AG02044.jpg",
        "width": 1529,
        "height": 2199,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebbe2ca0-133f-4e5b-8639-dbb24f60197e/1AG02078.jpg",
        "width": 2307,
        "height": 1424,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/86f87759-40ce-46a3-a203-c477d53f3d12/1AG02098.jpg",
        "width": 1528,
        "height": 2249,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e367714b-39aa-4cb6-8b38-054cae2fc764/1AG02163.jpg",
        "width": 2249,
        "height": 1528,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ff31529d-3ef2-4feb-9e5c-9d03cd7a2a16/1AG02813.jpg",
        "width": 1134,
        "height": 1411,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2bd75a8-55e4-4436-b8f4-5cb4fd21fb12/1AG02253.jpg",
        "width": 1624,
        "height": 2155,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5da51c24-c119-46d9-8a22-bf271f26feb7/6H5A5118.jpg",
        "width": 2560,
        "height": 1707,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56356a83-ec01-46ae-8720-50aa6b76aa80/1AG02266.jpg",
        "width": 2057,
        "height": 1533,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f07983c-9f56-4412-ac05-823391a2195d/1AG02207.jpg",
        "width": 1878,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f20ff2ef-b180-4c84-a8af-eefbec7e430d/1AG02282.jpg",
        "width": 2341,
        "height": 1294,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/af9ab51b-a921-4980-83ed-218cef79cda4/1AG02328.jpg",
        "width": 1488,
        "height": 1926,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e481384-882f-4881-88b4-aa2a80f05a3d/1AG03258.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1528bdbe-024c-4308-9961-3e8e426ce235/1AG02343.jpg",
        "width": 1973,
        "height": 1519,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/944f72db-250a-4021-8a87-9a5c6c93d974/1AG02395.jpg",
        "width": 1707,
        "height": 2560,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b8b9f416-8405-423a-bfa7-7615b9503abf/1AG02407.jpg",
        "width": 1686,
        "height": 2446,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8089a0ce-ef22-4792-88b7-8719f86dcced/1AG02446.jpg",
        "width": 2513,
        "height": 1415,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d68e1d9d-e049-46db-a74a-168cc939356f/1AG02448.jpg",
        "width": 2513,
        "height": 1415,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fcce1d91-984f-4c1a-8334-318bc193b6be/1AG02500.jpg",
        "width": 1171,
        "height": 1874,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b694ffb7-f92d-4ff0-a594-68d6d18c1228/1AG02519.jpg",
        "width": 2127,
        "height": 1655,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a1c0a32-8476-4c54-9dce-78e7a2890264/1AG02622.jpg",
        "width": 2006,
        "height": 1477,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/522cfe48-44e8-467c-8b31-e21fed546c4e/1AG02525.jpg",
        "width": 1982,
        "height": 1344,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee1c76ab-b04e-4424-b1df-d61944b197a2/1AG02542.jpg",
        "width": 2453,
        "height": 1492,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b509c258-cf5f-40d2-872f-709cfed25b8a/1AG02552.jpg",
        "width": 1725,
        "height": 888,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c62ca9cf-50f0-4e5a-8e09-7091f30b9993/1AG02561.jpg",
        "width": 2192,
        "height": 1365,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a158bbb5-e8a6-4522-9f03-272c35f5ec74/1AG02563.jpg",
        "width": 1577,
        "height": 2042,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3053729a-db92-4bf6-a4f1-b2efba4ac7e5/1AG02569.jpg",
        "width": 1919,
        "height": 1612,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5e8b33ec-e53b-433a-ad49-6f314773b687/1AG02576.jpg",
        "width": 1612,
        "height": 1919,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5e05d362-6338-4b9a-a61b-5b27572093bb/1AG02593.jpg",
        "width": 1971,
        "height": 1577,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8a5e4e4-751f-4223-8780-6240983cbdee/1AG02610.jpg",
        "width": 2269,
        "height": 1574,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ddcc458c-cb90-4b84-ad78-f974e27c44ed/1AG02642.jpg",
        "width": 2172,
        "height": 1209,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d00162b1-b342-4328-908e-5cf3741b61b5/1AG02652.jpg",
        "width": 2089,
        "height": 1615,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/066db189-d602-4edd-8b17-75a56207956f/1AG02693.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/854b1da7-8393-46f8-99ac-5088732f03ba/1AG02740.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b0a6255-b4d9-4ccb-b9a8-93fd4fb0215c/1AG02749.jpg",
        "width": 2560,
        "height": 1574,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61d2ec98-4ed8-443e-936e-8757b4a9a078/1AG02756.jpg",
        "width": 2332,
        "height": 1418,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b06e7b6-1d37-4389-a507-d9be98f37590/1AG02760.jpg",
        "width": 2238,
        "height": 1311,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/50900f62-74a7-4039-9131-1b10f0386ec9/1AG02189.jpg",
        "width": 1513,
        "height": 2302,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79738166-fd12-4dca-984c-66715a7be68e/1AG02764.jpg",
        "width": 2387,
        "height": 1584,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0ff0801e-98ca-45b8-9e9c-bbab85ad4422/1AG02785.jpg",
        "width": 1836,
        "height": 1418,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/019de72f-44c7-4786-9719-d50dd3656154/1AG02790.jpg",
        "width": 2332,
        "height": 1557,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b87af802-17b5-44ea-987d-6c537935112f/1AG02800.jpg",
        "width": 1695,
        "height": 1273,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f53f632-f1f6-4c79-a67a-9772e346c4be/1AG02816.jpg",
        "width": 1165,
        "height": 1550,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56f2eb52-9313-4f7b-a2ca-1e6f54f7d567/1AG02857.jpg",
        "width": 1934,
        "height": 1449,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1e697995-7d8a-4259-aa73-9412eae860a0/1AG02872.jpg",
        "width": 1805,
        "height": 1015,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc4e0a3e-3b11-4f89-86a5-df2fb55b6453/1AG02891.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9eb1ca8a-e115-4a09-8d2a-7b9335a49188/1AG02899.jpg",
        "width": 2283,
        "height": 1494,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ed8f194-499b-4b79-842e-fcc727b61ba3/1AG02908.jpg",
        "width": 2425,
        "height": 1370,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0cb1cb3d-4a87-4644-a2bb-9796669bda2b/1AG02916.jpg",
        "width": 2495,
        "height": 1534,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0fbc446-b03f-42b9-8746-1d298fee83fd/1AG02949.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b4fadeef-9197-4174-a5cb-6490a4f8463f/1AG02967.jpg",
        "width": 2287,
        "height": 1464,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef46aa88-dbc9-41e5-8c35-60da544c5d09/1AG02989.jpg",
        "width": 2013,
        "height": 1341,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d196e51-c609-49af-b2aa-d477294b59ca/1AG02993.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b14ba96-cc02-4ec5-b50c-4d8b5e3c2e8d/1AG02995.jpg",
        "width": 2449,
        "height": 1477,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44c66770-e82d-48a4-9ff7-e2a7fe1de46e/1AG03000.jpg",
        "width": 1847,
        "height": 1057,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b51b8b35-09fc-45df-8207-930578c6f5c2/1AG03003.jpg",
        "width": 2383,
        "height": 1376,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ecdcc545-ea35-4648-ba6d-05562ca34867/1AG03053.jpg",
        "width": 1812,
        "height": 1200,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7cb047ef-d14c-40a8-97d9-2967d734cca8/1AG03056.jpg",
        "width": 1875,
        "height": 1228,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/669a1ab0-c118-4561-a5b0-7405d771329a/1AG03075.jpg",
        "width": 2428,
        "height": 1546,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eaa1f396-040e-4907-aafd-c533ed5111c3/1AG03088.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/73a5f403-0eac-4fc5-a67c-7994f4d56d3c/1AG03179.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c884e69-270b-41aa-ab06-b48264aab16a/1AG03188.jpg",
        "width": 1441,
        "height": 2560,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7b75f22-7823-40a0-9d46-d164f7d58350/1AG03228.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/99f840d6-e1fa-4b0b-a3df-340ddddc56ad/1AG03261.jpg",
        "width": 2560,
        "height": 1441,
        "alt": "L & L"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f3bea4e9-f2f3-413a-953c-a52b88bc1373/6H5A5116.jpg",
        "width": 2560,
        "height": 1478,
        "alt": "L & L"
      }
    ]
  },
  {
    "slug": "emma-lauri",
    "location": "Helsinki, Finland",
    "couple": "Emma & Lauri",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "JENNA & KOSTI",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2665d8d-6fcc-4b82-963d-d2594c48c617/A7307445.jpg",
        "width": 1574,
        "height": 2140,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2cfc1887-5fca-4020-8903-3dbdf77695c1/A7307702.jpg",
        "width": 1363,
        "height": 1960,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/571d6914-94d8-4219-848d-a4611b7c82c8/A7307365.jpg",
        "width": 1987,
        "height": 1630,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75acd0e4-aa87-4263-8c16-73494e58a48a/A7308516.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c343523a-d743-4d17-ac49-f47dcca80c8f/A7308061.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8cb499c9-4e01-431c-a843-14c970cfdbea/A7307487.jpg",
        "width": 1001,
        "height": 922,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56ee287c-6d91-47de-93b0-456073cba1d5/A7307372.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4fbc57ee-55fe-4e30-abb7-4dbcd4bc110f/A7307426.jpg",
        "width": 2486,
        "height": 1539,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f75ba69f-33cc-41ed-92e8-4ab577ecf958/A7307379.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56ec9270-d04f-4b94-8e5f-60cd9e71b5bb/A7307415.jpg",
        "width": 1661,
        "height": 2276,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3dd7fac9-a277-4222-b343-2a155d9d22c1/A7307448.jpg",
        "width": 2465,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afef9993-f45e-431f-b8c7-1101a424ad5f/A7307967.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f8623eb8-fa4e-4eb2-8994-a557a3b0a81f/A7307472.jpg",
        "width": 1440,
        "height": 2350,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5efd6360-15a2-4c93-a41b-0d93239bfd8a/A7307348.jpg",
        "width": 2430,
        "height": 1559,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/228ce95c-a99a-486a-b897-22f14666b2d9/A7307510.jpg",
        "width": 2383,
        "height": 1657,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b37ffc9c-a44c-424a-8104-4c5365d82f82/A7307517.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56df63e4-0f29-4dfb-be43-8242efad09ed/A7307542.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9c4bf6df-3ee9-40ea-b3fc-2a149ee69b23/A7307573.jpg",
        "width": 1484,
        "height": 2273,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/31b04bed-6125-4112-9d75-d65972a343a8/A7307629.jpg",
        "width": 1412,
        "height": 2078,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1a5077c1-ee8a-43f8-938f-24b27ed22c8f/A7307579.jpg",
        "width": 1574,
        "height": 1969,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d1369b6f-0f02-4962-9209-10ad2b3e0b44/A7307592.jpg",
        "width": 2087,
        "height": 1622,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d5aac325-3a74-41e2-9f1f-2555800c72f9/A7307611.jpg",
        "width": 1585,
        "height": 2397,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9627cb17-c3ee-4ef9-a72e-bdb659988462/A7307617.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22508cf0-f427-4be0-a131-156f3dd55a53/A7308185.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a31f001b-eaa3-4091-9302-1683523638a2/A7307661.jpg",
        "width": 1341,
        "height": 2273,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0e14be2-2051-4d96-b22b-ac8fadb4709c/A7307838.jpg",
        "width": 2524,
        "height": 1420,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/781494fc-3e12-4203-9cf0-a81a35f5ba5a/A7307850.jpg",
        "width": 792,
        "height": 1263,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8910d1f-1a32-4441-a560-448210435eb8/A7307887.jpg",
        "width": 1117,
        "height": 1677,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2eafb72e-f191-4a78-bb5f-2c81bc0386ad/A7307891.jpg",
        "width": 1985,
        "height": 1263,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/707f64cc-47f3-419c-b548-c83b093ebbde/A7307912.jpg",
        "width": 1062,
        "height": 1397,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58eb1345-2752-4b9b-8507-db6fa1e87bff/A7307918.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2a2bc0b7-9eeb-4ca2-bcf1-cee98e161d2c/A7307921.jpg",
        "width": 2529,
        "height": 1423,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9049f29a-0e1b-4fc2-8e13-0718e2da52ea/A7307931.jpg",
        "width": 1246,
        "height": 1219,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a057635-2c60-417f-8c16-f2bb61303323/A7307356.jpg",
        "width": 1574,
        "height": 2226,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/778164b3-3d5a-4691-8597-99340baca31a/A7307955.jpg",
        "width": 1419,
        "height": 2523,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72dc1406-446f-482b-a895-9a927dbaa2cf/A7307959.jpg",
        "width": 1477,
        "height": 2226,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf2c0e14-1ef4-40a1-84ce-0bc245e0b006/A7307966.jpg",
        "width": 2024,
        "height": 1531,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84a0c5fc-b8eb-4f98-9793-7fc0897f79c4/A7307971.jpg",
        "width": 2526,
        "height": 1620,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cba73aef-2cee-49c2-a721-bdb03c6f61f2/A7307974.jpg",
        "width": 1896,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bda24d47-31e7-466d-9bb3-21e9c21dbacf/A7307990.jpg",
        "width": 495,
        "height": 847,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94127d7f-eb06-49e7-aeb9-70b6551f8a5a/A7308020.jpg",
        "width": 2147,
        "height": 1250,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b74ba2bd-e43a-4603-af09-5a47818b1eba/A7308021.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3141d7b0-afef-42dc-b56a-39fc4cf46629/A7308036.jpg",
        "width": 1553,
        "height": 2164,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a93069a5-b536-4dab-8a10-60401545c76c/A7308056.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b89631a5-e778-401c-ad39-5f23e5c580a9/A7308067.jpg",
        "width": 873,
        "height": 576,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f5c70b7-d415-42ca-8f99-795e07029113/A7308089.jpg",
        "width": 1574,
        "height": 2028,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5ef586a0-5849-484c-ab0d-5fbc34f8b6ce/A7308100.jpg",
        "width": 1537,
        "height": 2443,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92507482-cded-4631-b7ac-fd4b19d71a97/A7308106.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/736d2990-2958-4c2d-bbb8-98012de66a1b/A7308111.jpg",
        "width": 1644,
        "height": 1411,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e10d5d9-772d-47a9-ba27-261916c6358a/A7308119.jpg",
        "width": 2197,
        "height": 1205,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/57f8a4d2-b061-4457-90c8-c49322be041f/A7308133.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f487fe1-865c-4e21-bc36-d6e40077481e/A7307350.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec451980-631a-44ad-bb1a-abebdfd86da1/A7308142.jpg",
        "width": 2321,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/39155fe0-7e41-41e5-bc3c-dd78701dacd3/A7308148.jpg",
        "width": 2339,
        "height": 1259,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92cdcec1-4b91-4bed-bc96-1d5807310496/A7308149.jpg",
        "width": 903,
        "height": 1006,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f63f5e6-3c90-4c19-84b3-a88b8ca2d314/A7308150.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1cb660ca-398b-4ed7-a066-f8a7e8c7ff8b/A7308153.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09649b1b-1cad-4f87-ab26-9a9428250b52/A7308154.jpg",
        "width": 1038,
        "height": 1404,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aca276fa-b575-4ca3-8c67-4a7712bd14af/A7308155.jpg",
        "width": 1797,
        "height": 1341,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/648137a7-d137-49c5-9b44-5a62ca5ff34a/A7308181.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fd415c35-c7f4-4c57-9eb1-28815c73ebc4/A7308195.jpg",
        "width": 1970,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb5e809a-3eb8-475a-8f80-760a17d2d29c/A7308198.jpg",
        "width": 2366,
        "height": 1574,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1e702ac2-d18d-4e23-9c17-6eb1abb984ca/A7308200.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e4490c89-9959-4170-b2d3-7bb89ca81f84/A7308215.jpg",
        "width": 1991,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e74e455-61ab-47e4-bcfc-424abaff68be/A7308253.jpg",
        "width": 1853,
        "height": 1314,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fb9fda91-ca7f-4d82-98c8-467f28f69180/A7308264.jpg",
        "width": 536,
        "height": 794,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0b827cc-e014-4281-9f03-5a8d19745bde/A7308314.jpg",
        "width": 1616,
        "height": 1124,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/834cc4fa-2c99-42aa-aaa7-59aba17df59c/A7308317.jpg",
        "width": 2453,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a55b222d-0ae4-4c2f-a910-033bd1711778/A7308328.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/12f10ecf-64ab-4737-bd78-125162b7e76e/A7307714.jpg",
        "width": 1290,
        "height": 2350,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a88847a2-bce7-4943-a55b-e208ed9c5d51/A7307726.jpg",
        "width": 1574,
        "height": 2449,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61196985-b782-4810-8b2e-fb63b9deff75/A7307734.jpg",
        "width": 1500,
        "height": 2282,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3bb6997-90bd-4250-99d7-b87cba007393/A7307771.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/453c7ec1-9f92-4513-bf47-978dd7ab711f/A7307807.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f3fc7071-53f4-4a48-86d6-1426dd9b0439/A7308402.jpg",
        "width": 1809,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ea672497-0832-4220-93b9-9121e293ca22/A7308407.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ea4a138-aada-49e1-889c-ebc60253ec0e/A7308409.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b65481ce-aba5-40d6-9d71-93d0c8f31b87/A7308359.jpg",
        "width": 1708,
        "height": 2238,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2ffe2de4-9d3d-4b75-8546-4a34b595dbc8/A7308418.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c46189b1-9f8c-493b-8241-342c5d572d0b/A7308449.jpg",
        "width": 2310,
        "height": 1418,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f1b453e1-621c-46ae-8ba5-e769b1f1f61f/A7308500.jpg",
        "width": 2477,
        "height": 1427,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be34e5c4-1e82-4602-a5e0-a3241a41ebf3/A7308504.jpg",
        "width": 1863,
        "height": 978,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eaae7379-0906-4cfe-b1f7-a592ee414dc1/A7308525.jpg",
        "width": 2131,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f042228a-a701-4606-a280-fbd5009ccc5a/A7307781.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb68814b-1699-4f29-ae85-bdce171f0d1c/A7308533.jpg",
        "width": 2255,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/222f47b1-d5a9-4c0f-a2ff-d97ee31175ee/A7308513.jpg",
        "width": 2325,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ac32d944-f133-4d1d-8a80-8b2fde63a39d/A7308534.jpg",
        "width": 2024,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0bb53cd-856c-4d55-8cd7-12f209235c04/A7308536.jpg",
        "width": 1925,
        "height": 1267,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6cae3e78-7e5e-4d21-8215-557080ca8bdc/A7308586.jpg",
        "width": 2201,
        "height": 1349,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69a4518f-0c7c-4cfe-afdd-24983cde6762/A7308580.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/47f7663a-5f1c-4e7a-a6c8-7608faa733c5/A7308595.jpg",
        "width": 1544,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/292c0415-4b83-4041-875c-bc47c37afc55/A7308621.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bed31d70-2c28-46b3-acff-2ed6e34f8e3d/A7308639.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2665d8d-6fcc-4b82-963d-d2594c48c617/A7307445.jpg",
        "width": 1574,
        "height": 2140,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2cfc1887-5fca-4020-8903-3dbdf77695c1/A7307702.jpg",
        "width": 1363,
        "height": 1960,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/571d6914-94d8-4219-848d-a4611b7c82c8/A7307365.jpg",
        "width": 1987,
        "height": 1630,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75acd0e4-aa87-4263-8c16-73494e58a48a/A7308516.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c343523a-d743-4d17-ac49-f47dcca80c8f/A7308061.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8cb499c9-4e01-431c-a843-14c970cfdbea/A7307487.jpg",
        "width": 1001,
        "height": 922,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56ee287c-6d91-47de-93b0-456073cba1d5/A7307372.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4fbc57ee-55fe-4e30-abb7-4dbcd4bc110f/A7307426.jpg",
        "width": 2486,
        "height": 1539,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f75ba69f-33cc-41ed-92e8-4ab577ecf958/A7307379.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56ec9270-d04f-4b94-8e5f-60cd9e71b5bb/A7307415.jpg",
        "width": 1661,
        "height": 2276,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3dd7fac9-a277-4222-b343-2a155d9d22c1/A7307448.jpg",
        "width": 2465,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afef9993-f45e-431f-b8c7-1101a424ad5f/A7307967.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f8623eb8-fa4e-4eb2-8994-a557a3b0a81f/A7307472.jpg",
        "width": 1440,
        "height": 2350,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5efd6360-15a2-4c93-a41b-0d93239bfd8a/A7307348.jpg",
        "width": 2430,
        "height": 1559,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/228ce95c-a99a-486a-b897-22f14666b2d9/A7307510.jpg",
        "width": 2383,
        "height": 1657,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b37ffc9c-a44c-424a-8104-4c5365d82f82/A7307517.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56df63e4-0f29-4dfb-be43-8242efad09ed/A7307542.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9c4bf6df-3ee9-40ea-b3fc-2a149ee69b23/A7307573.jpg",
        "width": 1484,
        "height": 2273,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/31b04bed-6125-4112-9d75-d65972a343a8/A7307629.jpg",
        "width": 1412,
        "height": 2078,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1a5077c1-ee8a-43f8-938f-24b27ed22c8f/A7307579.jpg",
        "width": 1574,
        "height": 1969,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d1369b6f-0f02-4962-9209-10ad2b3e0b44/A7307592.jpg",
        "width": 2087,
        "height": 1622,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d5aac325-3a74-41e2-9f1f-2555800c72f9/A7307611.jpg",
        "width": 1585,
        "height": 2397,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9627cb17-c3ee-4ef9-a72e-bdb659988462/A7307617.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22508cf0-f427-4be0-a131-156f3dd55a53/A7308185.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a31f001b-eaa3-4091-9302-1683523638a2/A7307661.jpg",
        "width": 1341,
        "height": 2273,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0e14be2-2051-4d96-b22b-ac8fadb4709c/A7307838.jpg",
        "width": 2524,
        "height": 1420,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/781494fc-3e12-4203-9cf0-a81a35f5ba5a/A7307850.jpg",
        "width": 792,
        "height": 1263,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8910d1f-1a32-4441-a560-448210435eb8/A7307887.jpg",
        "width": 1117,
        "height": 1677,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2eafb72e-f191-4a78-bb5f-2c81bc0386ad/A7307891.jpg",
        "width": 1985,
        "height": 1263,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/707f64cc-47f3-419c-b548-c83b093ebbde/A7307912.jpg",
        "width": 1062,
        "height": 1397,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58eb1345-2752-4b9b-8507-db6fa1e87bff/A7307918.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2a2bc0b7-9eeb-4ca2-bcf1-cee98e161d2c/A7307921.jpg",
        "width": 2529,
        "height": 1423,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9049f29a-0e1b-4fc2-8e13-0718e2da52ea/A7307931.jpg",
        "width": 1246,
        "height": 1219,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a057635-2c60-417f-8c16-f2bb61303323/A7307356.jpg",
        "width": 1574,
        "height": 2226,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/778164b3-3d5a-4691-8597-99340baca31a/A7307955.jpg",
        "width": 1419,
        "height": 2523,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72dc1406-446f-482b-a895-9a927dbaa2cf/A7307959.jpg",
        "width": 1477,
        "height": 2226,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf2c0e14-1ef4-40a1-84ce-0bc245e0b006/A7307966.jpg",
        "width": 2024,
        "height": 1531,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84a0c5fc-b8eb-4f98-9793-7fc0897f79c4/A7307971.jpg",
        "width": 2526,
        "height": 1620,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cba73aef-2cee-49c2-a721-bdb03c6f61f2/A7307974.jpg",
        "width": 1896,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bda24d47-31e7-466d-9bb3-21e9c21dbacf/A7307990.jpg",
        "width": 495,
        "height": 847,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94127d7f-eb06-49e7-aeb9-70b6551f8a5a/A7308020.jpg",
        "width": 2147,
        "height": 1250,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b74ba2bd-e43a-4603-af09-5a47818b1eba/A7308021.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3141d7b0-afef-42dc-b56a-39fc4cf46629/A7308036.jpg",
        "width": 1553,
        "height": 2164,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a93069a5-b536-4dab-8a10-60401545c76c/A7308056.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b89631a5-e778-401c-ad39-5f23e5c580a9/A7308067.jpg",
        "width": 873,
        "height": 576,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f5c70b7-d415-42ca-8f99-795e07029113/A7308089.jpg",
        "width": 1574,
        "height": 2028,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5ef586a0-5849-484c-ab0d-5fbc34f8b6ce/A7308100.jpg",
        "width": 1537,
        "height": 2443,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92507482-cded-4631-b7ac-fd4b19d71a97/A7308106.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/736d2990-2958-4c2d-bbb8-98012de66a1b/A7308111.jpg",
        "width": 1644,
        "height": 1411,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e10d5d9-772d-47a9-ba27-261916c6358a/A7308119.jpg",
        "width": 2197,
        "height": 1205,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/57f8a4d2-b061-4457-90c8-c49322be041f/A7308133.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f487fe1-865c-4e21-bc36-d6e40077481e/A7307350.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec451980-631a-44ad-bb1a-abebdfd86da1/A7308142.jpg",
        "width": 2321,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/39155fe0-7e41-41e5-bc3c-dd78701dacd3/A7308148.jpg",
        "width": 2339,
        "height": 1259,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92cdcec1-4b91-4bed-bc96-1d5807310496/A7308149.jpg",
        "width": 903,
        "height": 1006,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f63f5e6-3c90-4c19-84b3-a88b8ca2d314/A7308150.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1cb660ca-398b-4ed7-a066-f8a7e8c7ff8b/A7308153.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09649b1b-1cad-4f87-ab26-9a9428250b52/A7308154.jpg",
        "width": 1038,
        "height": 1404,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aca276fa-b575-4ca3-8c67-4a7712bd14af/A7308155.jpg",
        "width": 1797,
        "height": 1341,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/648137a7-d137-49c5-9b44-5a62ca5ff34a/A7308181.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fd415c35-c7f4-4c57-9eb1-28815c73ebc4/A7308195.jpg",
        "width": 1970,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb5e809a-3eb8-475a-8f80-760a17d2d29c/A7308198.jpg",
        "width": 2366,
        "height": 1574,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1e702ac2-d18d-4e23-9c17-6eb1abb984ca/A7308200.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e4490c89-9959-4170-b2d3-7bb89ca81f84/A7308215.jpg",
        "width": 1991,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e74e455-61ab-47e4-bcfc-424abaff68be/A7308253.jpg",
        "width": 1853,
        "height": 1314,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fb9fda91-ca7f-4d82-98c8-467f28f69180/A7308264.jpg",
        "width": 536,
        "height": 794,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0b827cc-e014-4281-9f03-5a8d19745bde/A7308314.jpg",
        "width": 1616,
        "height": 1124,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/834cc4fa-2c99-42aa-aaa7-59aba17df59c/A7308317.jpg",
        "width": 2453,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a55b222d-0ae4-4c2f-a910-033bd1711778/A7308328.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/12f10ecf-64ab-4737-bd78-125162b7e76e/A7307714.jpg",
        "width": 1290,
        "height": 2350,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a88847a2-bce7-4943-a55b-e208ed9c5d51/A7307726.jpg",
        "width": 1574,
        "height": 2449,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61196985-b782-4810-8b2e-fb63b9deff75/A7307734.jpg",
        "width": 1500,
        "height": 2282,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3bb6997-90bd-4250-99d7-b87cba007393/A7307771.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/453c7ec1-9f92-4513-bf47-978dd7ab711f/A7307807.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f3fc7071-53f4-4a48-86d6-1426dd9b0439/A7308402.jpg",
        "width": 1809,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ea672497-0832-4220-93b9-9121e293ca22/A7308407.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ea4a138-aada-49e1-889c-ebc60253ec0e/A7308409.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b65481ce-aba5-40d6-9d71-93d0c8f31b87/A7308359.jpg",
        "width": 1708,
        "height": 2238,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2ffe2de4-9d3d-4b75-8546-4a34b595dbc8/A7308418.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c46189b1-9f8c-493b-8241-342c5d572d0b/A7308449.jpg",
        "width": 2310,
        "height": 1418,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f1b453e1-621c-46ae-8ba5-e769b1f1f61f/A7308500.jpg",
        "width": 2477,
        "height": 1427,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be34e5c4-1e82-4602-a5e0-a3241a41ebf3/A7308504.jpg",
        "width": 1863,
        "height": 978,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eaae7379-0906-4cfe-b1f7-a592ee414dc1/A7308525.jpg",
        "width": 2131,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f042228a-a701-4606-a280-fbd5009ccc5a/A7307781.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb68814b-1699-4f29-ae85-bdce171f0d1c/A7308533.jpg",
        "width": 2255,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/222f47b1-d5a9-4c0f-a2ff-d97ee31175ee/A7308513.jpg",
        "width": 2325,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ac32d944-f133-4d1d-8a80-8b2fde63a39d/A7308534.jpg",
        "width": 2024,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0bb53cd-856c-4d55-8cd7-12f209235c04/A7308536.jpg",
        "width": 1925,
        "height": 1267,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6cae3e78-7e5e-4d21-8215-557080ca8bdc/A7308586.jpg",
        "width": 2201,
        "height": 1349,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69a4518f-0c7c-4cfe-afdd-24983cde6762/A7308580.jpg",
        "width": 2560,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/47f7663a-5f1c-4e7a-a6c8-7608faa733c5/A7308595.jpg",
        "width": 1544,
        "height": 1440,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/292c0415-4b83-4041-875c-bc47c37afc55/A7308621.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bed31d70-2c28-46b3-acff-2ed6e34f8e3d/A7308639.jpg",
        "width": 1440,
        "height": 2560,
        "alt": "JENNA & KOSTI"
      }
    ]
  },
  {
    "slug": "project-six-fhm4s",
    "location": "Helsinki, Finland",
    "couple": "Project & Six & Fhm4s",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "MIKKO @ NAYOUNG",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/38752803-bd8f-49f3-b851-7ecaab71bfb0/For_Homepage_22813035_10155970875734729_43643127_o.jpg",
        "width": 2048,
        "height": 1367,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a92d3453-dd0a-4199-87c7-a9e548825132/26-02-2017-ND8_1732.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c0dafa1-b9a9-4767-933c-b332e283cc53/1+%283%29.jpg",
        "width": 1367,
        "height": 2048,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef0f038f-5370-429e-ba50-c7cdb35b2af8/26-02-2017-ND8_1641.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bba606b7-daa6-414a-b9c6-e12d6970c732/26-02-2017-ND8_1566.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/80d60139-ffb3-4887-9679-7f172620f939/For_Homepage_26-02-2017-ND8_2045-3.jpg",
        "width": 3840,
        "height": 2563,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53b94f6d-d6fb-4e85-a655-4079bd79144c/26-02-2017-ND8_1753.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a4520bf8-cc40-4250-9f1b-9048f9284221/26-02-2017-ND8_1767.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16fd3a1d-444c-46b8-b308-1141447607bd/26-02-2017-ND8_1808.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de9d64a2-8c0b-4d65-a1bb-1273df5e4a5d/DSC_8029.jpg",
        "width": 2500,
        "height": 1459,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a421e2c-4877-4be3-a32f-92f1c5d84b7f/For_Homepage_ND8_0849.jpg",
        "width": 3840,
        "height": 2880,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92a073c9-a2ea-4a29-b46b-4abef23c80c3/DSC_8038.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/27d761c3-64f0-4ebb-8d59-756e76c9cb76/DSC_8060.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/86ed0d01-6580-4b12-af1d-5599d6cf854a/DSC_8071.jpg",
        "width": 2500,
        "height": 1708,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/99392535-ec02-4d26-bb95-61bd085a9c71/DSC_8076.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c828de43-e483-406f-b499-ab35cddb7d64/DSC_8139.jpg",
        "width": 2163,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84c45444-3ae5-4345-81ba-72ff70132833/DSC_8140.jpg",
        "width": 1716,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98c59334-d9e7-4816-b0d9-627b503bb6b4/DSC_8183.jpg",
        "width": 1868,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b5c4770-baf5-410b-989b-c78c33b9baeb/DSC_8189.jpg",
        "width": 1773,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/043335aa-64db-4f8d-a1cc-2bc05af72621/DSC_8257.jpg",
        "width": 2485,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77d2c04b-7d3c-4f10-a200-bc96732ce095/DSC_8264.jpg",
        "width": 2152,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77fd249a-07ff-49f6-a1b6-2ded231f5c81/DSC_8306.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f4d316ff-0ea1-40eb-a958-aaff76a50a59/DSC_8308.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/081e57c9-3c19-402c-8fb4-014092854c15/DSC_8330.jpg",
        "width": 2500,
        "height": 1743,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16bc2e30-8c76-4fea-93a4-ff9cbc293266/DSC_8331.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dd67f920-443e-4372-8eee-07ca852cd0f6/DSC_8321.jpg",
        "width": 2500,
        "height": 1801,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/38752803-bd8f-49f3-b851-7ecaab71bfb0/For_Homepage_22813035_10155970875734729_43643127_o.jpg",
        "width": 2048,
        "height": 1367,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a92d3453-dd0a-4199-87c7-a9e548825132/26-02-2017-ND8_1732.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c0dafa1-b9a9-4767-933c-b332e283cc53/1+%283%29.jpg",
        "width": 1367,
        "height": 2048,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef0f038f-5370-429e-ba50-c7cdb35b2af8/26-02-2017-ND8_1641.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bba606b7-daa6-414a-b9c6-e12d6970c732/26-02-2017-ND8_1566.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/80d60139-ffb3-4887-9679-7f172620f939/For_Homepage_26-02-2017-ND8_2045-3.jpg",
        "width": 3840,
        "height": 2563,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53b94f6d-d6fb-4e85-a655-4079bd79144c/26-02-2017-ND8_1753.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a4520bf8-cc40-4250-9f1b-9048f9284221/26-02-2017-ND8_1767.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16fd3a1d-444c-46b8-b308-1141447607bd/26-02-2017-ND8_1808.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de9d64a2-8c0b-4d65-a1bb-1273df5e4a5d/DSC_8029.jpg",
        "width": 2500,
        "height": 1459,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a421e2c-4877-4be3-a32f-92f1c5d84b7f/For_Homepage_ND8_0849.jpg",
        "width": 3840,
        "height": 2880,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92a073c9-a2ea-4a29-b46b-4abef23c80c3/DSC_8038.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/27d761c3-64f0-4ebb-8d59-756e76c9cb76/DSC_8060.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/86ed0d01-6580-4b12-af1d-5599d6cf854a/DSC_8071.jpg",
        "width": 2500,
        "height": 1708,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/99392535-ec02-4d26-bb95-61bd085a9c71/DSC_8076.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c828de43-e483-406f-b499-ab35cddb7d64/DSC_8139.jpg",
        "width": 2163,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84c45444-3ae5-4345-81ba-72ff70132833/DSC_8140.jpg",
        "width": 1716,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98c59334-d9e7-4816-b0d9-627b503bb6b4/DSC_8183.jpg",
        "width": 1868,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b5c4770-baf5-410b-989b-c78c33b9baeb/DSC_8189.jpg",
        "width": 1773,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/043335aa-64db-4f8d-a1cc-2bc05af72621/DSC_8257.jpg",
        "width": 2485,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77d2c04b-7d3c-4f10-a200-bc96732ce095/DSC_8264.jpg",
        "width": 2152,
        "height": 2500,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77fd249a-07ff-49f6-a1b6-2ded231f5c81/DSC_8306.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f4d316ff-0ea1-40eb-a958-aaff76a50a59/DSC_8308.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/081e57c9-3c19-402c-8fb4-014092854c15/DSC_8330.jpg",
        "width": 2500,
        "height": 1743,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16bc2e30-8c76-4fea-93a4-ff9cbc293266/DSC_8331.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "MIKKO @ NAYOUNG"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dd67f920-443e-4372-8eee-07ca852cd0f6/DSC_8321.jpg",
        "width": 2500,
        "height": 1801,
        "alt": "MIKKO @ NAYOUNG"
      }
    ]
  },
  {
    "slug": "project-two-ky966-b7zbs",
    "location": "Helsinki, Finland",
    "couple": "Project & Two & Ky966 & B7zbs",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "EMMA & LAURI",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/495c06c6-a0f0-4479-86b1-dceec975be20/A7306471.jpg",
        "width": 1000,
        "height": 1446,
        "alt": "A7306471.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cf8797f0-d565-4a5a-a2f7-d5ab820c9913/A7306478.jpg",
        "width": 1000,
        "height": 1549,
        "alt": "A7306478.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c8a37000-3af8-46d9-9ff7-aba7a2ee6e3b/A7306508.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306508.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79ef029f-d028-4f41-a381-0bdea8e3f0e5/A7306529.jpg",
        "width": 1000,
        "height": 1364,
        "alt": "A7306529.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b782dc04-7966-4e37-8b9b-d5d3b3dad2f3/A7306906.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "A7306906.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b909cc0-8ae4-4585-88d4-637521237908/A7306464.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "A7306464.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b1132745-ac75-4c1e-8ea7-898f82279f81/A7306415.jpg",
        "width": 1000,
        "height": 1059,
        "alt": "A7306415.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e072933e-4295-4f2e-b4e5-a61bdf86f9c8/A7306816.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306816.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c86c0e0b-da49-40aa-892b-9fbc0e1021aa/A7306420.jpg",
        "width": 1000,
        "height": 1438,
        "alt": "A7306420.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b6f33f0d-d136-4788-90bf-2ad3fafaf232/A7306530.jpg",
        "width": 1000,
        "height": 618,
        "alt": "A7306530.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9009fd8-83ef-4ff0-973c-bf0962f3975c/A7306535.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306535.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75fdf1f5-55b8-4a56-b930-9937639c853e/A7306538.jpg",
        "width": 1000,
        "height": 1326,
        "alt": "A7306538.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a50442b-c9fd-4d16-b3a3-2f6601ed72cd/A7306531.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306531.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5e9657f2-747b-4794-b2e0-406201d625f4/A7306626.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306626.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2222b576-7aea-4eda-a292-eb39ba59270e/A7306570.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306570.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5fa2bbab-65d9-48fc-9cf2-b27157e4e4e9/A7306486.jpg",
        "width": 1000,
        "height": 1303,
        "alt": "A7306486.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b1849a1f-0c32-4380-ada0-020a33666e21/A7306553.jpg",
        "width": 1000,
        "height": 1409,
        "alt": "A7306553.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0987a11d-5ff3-469b-b904-e762b40e02b7/A7306555.jpg",
        "width": 1000,
        "height": 1499,
        "alt": "A7306555.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f4a751db-b1b9-4278-b299-d22c9a013141/A7306436.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306436.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6502344c-7334-417a-a179-4885e8c79a27/A7306563.jpg",
        "width": 1000,
        "height": 708,
        "alt": "A7306563.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18f31906-ede4-45d3-aa53-6e32ca6cdbde/A7306582.jpg",
        "width": 1000,
        "height": 629,
        "alt": "A7306582.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b721e23e-2dc6-4292-9919-53e1cdaf81e3/A7306637.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306637.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/498e86ce-e0f8-46fa-a597-c4c30866c341/A7306649.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306649.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36acf262-4d1e-40e2-be85-20a8bb38379a/A7306647.jpg",
        "width": 1000,
        "height": 636,
        "alt": "A7306647.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09c779af-f93d-4742-8a08-9cecff5047d2/A7306422.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "A7306422.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef1895c4-3d54-4651-bd03-f6ea00c02e18/A7306409.jpg",
        "width": 1000,
        "height": 1454,
        "alt": "A7306409.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65812e05-1932-427e-93e9-2560b83498bb/A7306721.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306721.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/46464b17-b96f-4a6b-9c78-505542333dcd/A7306479.jpg",
        "width": 1000,
        "height": 970,
        "alt": "A7306479.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a859b45d-13bc-4f7d-981a-1d1d757f0fa8/A7307211.jpg",
        "width": 1000,
        "height": 1506,
        "alt": "Classic Black and White Wedding Portrait"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/475e2f83-ec4a-45aa-957d-ff8e7c455b72/A7306629.jpg",
        "width": 1000,
        "height": 562,
        "alt": "Candid Reception Smile"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55bef8da-0b08-485b-81dc-f95d7f31c4c9/A7306645.jpg",
        "width": 1000,
        "height": 562,
        "alt": "First Dance as Husband and Wife"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ca693dc7-60c3-4191-b418-e83d55b6a354/A7306615.jpg",
        "width": 1000,
        "height": 562,
        "alt": "Golden Hour Wedding Portrait"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a6ec294-7677-4576-972a-4cc3374dae1f/A7306617.jpg",
        "width": 1000,
        "height": 562,
        "alt": "Bridal Bouquet Detail"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ff7ef2bf-be33-4862-b021-beb4027c117f/A7306781.jpg",
        "width": 1000,
        "height": 562,
        "alt": "Emotional Vow Exchange"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/85d1051a-575a-42c2-94d5-45816bc2f564/A7306823.jpg",
        "width": 1000,
        "height": 562,
        "alt": "First Kiss as Mr. and Mrs."
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dd3e7601-a3c0-429f-a8cd-d86603185cf5/A7307291.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7307291.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5fdc4398-d386-419a-a198-cb98380434bc/A7306724.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "A7306724.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22e70fc0-893a-4a22-8e8c-fcb0b3db6af6/A7306682.jpg",
        "width": 1000,
        "height": 1365,
        "alt": "A7306682.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1df75e67-3b42-46c5-b558-6ba699bd1f98/A7306832.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306832.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/083d30b8-08e5-4321-9a21-72ef7418a7f5/A7306618.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7306618.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc209233-2a5e-4a78-b29f-baf007a2acda/A7306621.jpg",
        "width": 1000,
        "height": 1571,
        "alt": "A7306621.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e9096b3-8f98-41e9-a18b-83a6927d74fa/A7307274.jpg",
        "width": 1000,
        "height": 518,
        "alt": "A7307274.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f9edd1a6-6e3a-4c94-b42c-ca7f222f865b/A7307209.jpg",
        "width": 1000,
        "height": 600,
        "alt": "A7307209.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94d7d7dd-e2d2-485e-9788-0c8aada797eb/A7307258.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7307258.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f381aee3-dd7e-4b5f-b979-f8beb0493e69/A7307289.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7307289.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6fec353b-7c56-47ca-867a-b46b77a0a1dc/A7307260.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7307260.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65e0df7a-ff61-4665-bfad-70a0e3c9f591/A7307276.jpg",
        "width": 1000,
        "height": 562,
        "alt": "A7307276.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a4da22f-fe88-4659-a1a0-dacd8f8279cf/A7307223.jpg",
        "width": 1000,
        "height": 609,
        "alt": "A7307223.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/51f9a6d7-68d2-40b0-bc1e-92b0835b6d8a/A7307213.jpg",
        "width": 1000,
        "height": 1585,
        "alt": "A7307213.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a0044eab-996c-48e2-8aa7-d754f8ff1965/A7307216.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "A7307216.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0f1a237-e312-4130-80b3-82311464f88b/A7306851.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "A7306851.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc0fb23b-5e11-455f-9249-d2fbe18badbb/A7306836.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "A7306836.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/495c06c6-a0f0-4479-86b1-dceec975be20/A7306471.jpg",
        "width": 1000,
        "height": 1446,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cf8797f0-d565-4a5a-a2f7-d5ab820c9913/A7306478.jpg",
        "width": 1000,
        "height": 1549,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c8a37000-3af8-46d9-9ff7-aba7a2ee6e3b/A7306508.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79ef029f-d028-4f41-a381-0bdea8e3f0e5/A7306529.jpg",
        "width": 1000,
        "height": 1364,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b782dc04-7966-4e37-8b9b-d5d3b3dad2f3/A7306906.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b909cc0-8ae4-4585-88d4-637521237908/A7306464.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b1132745-ac75-4c1e-8ea7-898f82279f81/A7306415.jpg",
        "width": 1000,
        "height": 1059,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e072933e-4295-4f2e-b4e5-a61bdf86f9c8/A7306816.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c86c0e0b-da49-40aa-892b-9fbc0e1021aa/A7306420.jpg",
        "width": 1000,
        "height": 1438,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b6f33f0d-d136-4788-90bf-2ad3fafaf232/A7306530.jpg",
        "width": 1000,
        "height": 618,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9009fd8-83ef-4ff0-973c-bf0962f3975c/A7306535.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75fdf1f5-55b8-4a56-b930-9937639c853e/A7306538.jpg",
        "width": 1000,
        "height": 1326,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a50442b-c9fd-4d16-b3a3-2f6601ed72cd/A7306531.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5e9657f2-747b-4794-b2e0-406201d625f4/A7306626.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2222b576-7aea-4eda-a292-eb39ba59270e/A7306570.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5fa2bbab-65d9-48fc-9cf2-b27157e4e4e9/A7306486.jpg",
        "width": 1000,
        "height": 1303,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b1849a1f-0c32-4380-ada0-020a33666e21/A7306553.jpg",
        "width": 1000,
        "height": 1409,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0987a11d-5ff3-469b-b904-e762b40e02b7/A7306555.jpg",
        "width": 1000,
        "height": 1499,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f4a751db-b1b9-4278-b299-d22c9a013141/A7306436.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6502344c-7334-417a-a179-4885e8c79a27/A7306563.jpg",
        "width": 1000,
        "height": 708,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18f31906-ede4-45d3-aa53-6e32ca6cdbde/A7306582.jpg",
        "width": 1000,
        "height": 629,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b721e23e-2dc6-4292-9919-53e1cdaf81e3/A7306637.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/498e86ce-e0f8-46fa-a597-c4c30866c341/A7306649.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36acf262-4d1e-40e2-be85-20a8bb38379a/A7306647.jpg",
        "width": 1000,
        "height": 636,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09c779af-f93d-4742-8a08-9cecff5047d2/A7306422.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef1895c4-3d54-4651-bd03-f6ea00c02e18/A7306409.jpg",
        "width": 1000,
        "height": 1454,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65812e05-1932-427e-93e9-2560b83498bb/A7306721.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/46464b17-b96f-4a6b-9c78-505542333dcd/A7306479.jpg",
        "width": 1000,
        "height": 970,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a859b45d-13bc-4f7d-981a-1d1d757f0fa8/A7307211.jpg",
        "width": 1000,
        "height": 1506,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/475e2f83-ec4a-45aa-957d-ff8e7c455b72/A7306629.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55bef8da-0b08-485b-81dc-f95d7f31c4c9/A7306645.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ca693dc7-60c3-4191-b418-e83d55b6a354/A7306615.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a6ec294-7677-4576-972a-4cc3374dae1f/A7306617.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ff7ef2bf-be33-4862-b021-beb4027c117f/A7306781.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/85d1051a-575a-42c2-94d5-45816bc2f564/A7306823.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dd3e7601-a3c0-429f-a8cd-d86603185cf5/A7307291.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5fdc4398-d386-419a-a198-cb98380434bc/A7306724.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22e70fc0-893a-4a22-8e8c-fcb0b3db6af6/A7306682.jpg",
        "width": 1000,
        "height": 1365,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1df75e67-3b42-46c5-b558-6ba699bd1f98/A7306832.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/083d30b8-08e5-4321-9a21-72ef7418a7f5/A7306618.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc209233-2a5e-4a78-b29f-baf007a2acda/A7306621.jpg",
        "width": 1000,
        "height": 1571,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e9096b3-8f98-41e9-a18b-83a6927d74fa/A7307274.jpg",
        "width": 1000,
        "height": 518,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f9edd1a6-6e3a-4c94-b42c-ca7f222f865b/A7307209.jpg",
        "width": 1000,
        "height": 600,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94d7d7dd-e2d2-485e-9788-0c8aada797eb/A7307258.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f381aee3-dd7e-4b5f-b979-f8beb0493e69/A7307289.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6fec353b-7c56-47ca-867a-b46b77a0a1dc/A7307260.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65e0df7a-ff61-4665-bfad-70a0e3c9f591/A7307276.jpg",
        "width": 1000,
        "height": 562,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a4da22f-fe88-4659-a1a0-dacd8f8279cf/A7307223.jpg",
        "width": 1000,
        "height": 609,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/51f9a6d7-68d2-40b0-bc1e-92b0835b6d8a/A7307213.jpg",
        "width": 1000,
        "height": 1585,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a0044eab-996c-48e2-8aa7-d754f8ff1965/A7307216.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0f1a237-e312-4130-80b3-82311464f88b/A7306851.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "EMMA & LAURI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc0fb23b-5e11-455f-9249-d2fbe18badbb/A7306836.jpg",
        "width": 1000,
        "height": 1778,
        "alt": "EMMA & LAURI"
      }
    ]
  },
  {
    "slug": "lotta-lauri",
    "location": "Helsinki, Finland",
    "couple": "Lotta & Lauri",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "Lotta & Lauri",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c11c2a10-a9e1-44e4-9030-de828c249d19/Lotta+Liina+%26+Lauri-12.jpg",
        "width": 5304,
        "height": 7228,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3bdda5d1-e29d-40b9-b767-25ef8db91f7b/Lotta+Liina+%26+Lauri-22.jpg",
        "width": 7547,
        "height": 5126,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf369287-72a8-4b6d-adf9-8b492bd69c3c/A7302314.jpg",
        "width": 1000,
        "height": 1522,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f7b131e-3d15-4d06-aeb5-d518af28ba0c/A7302196.jpg",
        "width": 1000,
        "height": 1531,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/305d03bb-edf8-41ae-9dc7-b81963f2a259/Lotta+Liina+%26+Lauri-16.jpg",
        "width": 5093,
        "height": 5897,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e7c3c85-acae-4233-8891-4cacf417cf7f/Lotta+Liina+%26+Lauri-23.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1238f6b3-ddcc-4d49-a51a-cd86e74aad3d/Lotta+Liina+%26+Lauri-81.jpg",
        "width": 5005,
        "height": 5148,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/893cb372-cfb2-4c27-bd84-29c738f79727/Lotta+Liina+%26+Lauri-83.jpg",
        "width": 6649,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc5f899a-bc55-4113-9390-fb556905e871/A7302136-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4bd43b87-b0f7-4bba-8f1e-b0f48703b03d/A7302141-2.jpg",
        "width": 1000,
        "height": 1499,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bdf7c178-aa26-468b-9306-e36cf6299425/A7302145-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/85e7beb3-26d3-4d1e-a779-32996663dbfa/A7302103-2.jpg",
        "width": 1000,
        "height": 1453,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3215b0bb-9751-4439-bf63-8141573fc76e/A7302233.jpg",
        "width": 1000,
        "height": 1363,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2099a853-d7d5-4016-8e50-0bac12268fc6/A7302261.jpg",
        "width": 1000,
        "height": 679,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/80dc07e0-bc84-4f4c-95ff-df239d976c9e/A7302102-2.jpg",
        "width": 1000,
        "height": 1499,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/21365870-e962-4127-8471-c8adab0eafef/A7302638.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b342a830-4990-41bb-ac49-1c7716a04216/A7302131-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/78997013-c917-4300-b6fe-2b6603124ca7/Lotta+Liina+%26+Lauri-5.jpg",
        "width": 5037,
        "height": 7551,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/549872df-5b74-4e56-a1e8-122f63039259/Lotta+Liina+%26+Lauri-7.jpg",
        "width": 4761,
        "height": 6685,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19b56f9f-ecdb-4047-beac-c4c389d220db/Lotta+Liina+%26+Lauri-9.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/43d781ba-d3b5-41cb-b5e0-faef07d98f53/Lotta+Liina+%26+Lauri-18.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4818c693-747a-444d-9b80-976d6e60c570/Lotta+Liina+%26+Lauri-26.jpg",
        "width": 3997,
        "height": 3208,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5625dbf-9fee-478d-aa64-48449323586e/Lotta+Liina+%26+Lauri-29.jpg",
        "width": 4785,
        "height": 6070,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3559dd40-e9a0-4e76-a532-fba571eb8769/Lotta+Liina+%26+Lauri-89.jpg",
        "width": 3091,
        "height": 3930,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f142623-4c27-42af-903b-4c54019d980f/Lotta+Liina+%26+Lauri-46.jpg",
        "width": 6665,
        "height": 4813,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f4c39a0-e52c-4716-ad36-f58c280609ef/Lotta+Liina+%26+Lauri-57.jpg",
        "width": 3959,
        "height": 4072,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aa168095-7406-48d3-91c8-ad9e34e9caea/Lotta+Liina+%26+Lauri-73.jpg",
        "width": 7362,
        "height": 5111,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cd292b94-54f0-4b96-8bee-2bbe1b80f27d/A7302125-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/027fea61-7d40-4f35-b16d-834433f3516f/Lotta+Liina+%26+Lauri-77.jpg",
        "width": 5103,
        "height": 7198,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dfc25524-12a1-46c7-924f-a018b3a06d89/A7302640.jpg",
        "width": 5095,
        "height": 7638,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3c4aed4-ef2e-4d99-9904-1ae76f660f81/Lotta+Liina+%26+Lauri-86.jpg",
        "width": 4497,
        "height": 6627,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7dd1122-972e-41a8-80d4-00800a579e70/Lotta+Liina+%26+Lauri-90.jpg",
        "width": 4564,
        "height": 5307,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2444835-c9cf-4611-bfd7-2f91d12c094c/Lotta+Liina+%26+Lauri-91.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/31779f3f-2c7d-48a7-acd1-6daadfecabed/Lotta+Liina+%26+Lauri-95.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77e1f528-db45-4cad-a673-65e8ab43cba3/Lotta+Liina+%26+Lauri-101.jpg",
        "width": 7827,
        "height": 3644,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93fe9ea3-a3d7-41d6-a79f-f76f753f7427/Lotta+Liina+%26+Lauri-104.jpg",
        "width": 7132,
        "height": 3965,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d290318-25ff-4f1d-a69d-d44defbc5b94/Lotta+Liina+%26+Lauri-115.jpg",
        "width": 3959,
        "height": 4072,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6faf79bb-5035-4987-9391-ff5cf4ef8ff1/Lotta+Liina+%26+Lauri-146.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b2024f3-960b-4652-be9c-2af6a35af1df/Lotta+Liina+%26+Lauri-150.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/839a24d8-cce5-486a-85ee-d71c6ad7f6c8/Lotta+Liina+%26+Lauri-151.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f902948e-82ed-48de-9dbf-865b9660ff60/Lotta+Liina+%26+Lauri-168.jpg",
        "width": 5675,
        "height": 4111,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b41aa774-f91f-40c9-aa67-7eb32f4ddf8e/Lotta+Liina+%26+Lauri-156.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/baa5bd8d-53cd-4a69-b910-5b7cba2cba44/Lotta+Liina+%26+Lauri-157.jpg",
        "width": 3002,
        "height": 4500,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/863997d9-dbe1-4dc7-8eb3-4881145c4cfa/A7302120-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c11c2a10-a9e1-44e4-9030-de828c249d19/Lotta+Liina+%26+Lauri-12.jpg",
        "width": 5304,
        "height": 7228,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3bdda5d1-e29d-40b9-b767-25ef8db91f7b/Lotta+Liina+%26+Lauri-22.jpg",
        "width": 7547,
        "height": 5126,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bf369287-72a8-4b6d-adf9-8b492bd69c3c/A7302314.jpg",
        "width": 1000,
        "height": 1522,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f7b131e-3d15-4d06-aeb5-d518af28ba0c/A7302196.jpg",
        "width": 1000,
        "height": 1531,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/305d03bb-edf8-41ae-9dc7-b81963f2a259/Lotta+Liina+%26+Lauri-16.jpg",
        "width": 5093,
        "height": 5897,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e7c3c85-acae-4233-8891-4cacf417cf7f/Lotta+Liina+%26+Lauri-23.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1238f6b3-ddcc-4d49-a51a-cd86e74aad3d/Lotta+Liina+%26+Lauri-81.jpg",
        "width": 5005,
        "height": 5148,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/893cb372-cfb2-4c27-bd84-29c738f79727/Lotta+Liina+%26+Lauri-83.jpg",
        "width": 6649,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc5f899a-bc55-4113-9390-fb556905e871/A7302136-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4bd43b87-b0f7-4bba-8f1e-b0f48703b03d/A7302141-2.jpg",
        "width": 1000,
        "height": 1499,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bdf7c178-aa26-468b-9306-e36cf6299425/A7302145-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/85e7beb3-26d3-4d1e-a779-32996663dbfa/A7302103-2.jpg",
        "width": 1000,
        "height": 1453,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3215b0bb-9751-4439-bf63-8141573fc76e/A7302233.jpg",
        "width": 1000,
        "height": 1363,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2099a853-d7d5-4016-8e50-0bac12268fc6/A7302261.jpg",
        "width": 1000,
        "height": 679,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/80dc07e0-bc84-4f4c-95ff-df239d976c9e/A7302102-2.jpg",
        "width": 1000,
        "height": 1499,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/21365870-e962-4127-8471-c8adab0eafef/A7302638.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b342a830-4990-41bb-ac49-1c7716a04216/A7302131-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/78997013-c917-4300-b6fe-2b6603124ca7/Lotta+Liina+%26+Lauri-5.jpg",
        "width": 5037,
        "height": 7551,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/549872df-5b74-4e56-a1e8-122f63039259/Lotta+Liina+%26+Lauri-7.jpg",
        "width": 4761,
        "height": 6685,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19b56f9f-ecdb-4047-beac-c4c389d220db/Lotta+Liina+%26+Lauri-9.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/43d781ba-d3b5-41cb-b5e0-faef07d98f53/Lotta+Liina+%26+Lauri-18.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4818c693-747a-444d-9b80-976d6e60c570/Lotta+Liina+%26+Lauri-26.jpg",
        "width": 3997,
        "height": 3208,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5625dbf-9fee-478d-aa64-48449323586e/Lotta+Liina+%26+Lauri-29.jpg",
        "width": 4785,
        "height": 6070,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3559dd40-e9a0-4e76-a532-fba571eb8769/Lotta+Liina+%26+Lauri-89.jpg",
        "width": 3091,
        "height": 3930,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f142623-4c27-42af-903b-4c54019d980f/Lotta+Liina+%26+Lauri-46.jpg",
        "width": 6665,
        "height": 4813,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f4c39a0-e52c-4716-ad36-f58c280609ef/Lotta+Liina+%26+Lauri-57.jpg",
        "width": 3959,
        "height": 4072,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aa168095-7406-48d3-91c8-ad9e34e9caea/Lotta+Liina+%26+Lauri-73.jpg",
        "width": 7362,
        "height": 5111,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cd292b94-54f0-4b96-8bee-2bbe1b80f27d/A7302125-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/027fea61-7d40-4f35-b16d-834433f3516f/Lotta+Liina+%26+Lauri-77.jpg",
        "width": 5103,
        "height": 7198,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dfc25524-12a1-46c7-924f-a018b3a06d89/A7302640.jpg",
        "width": 5095,
        "height": 7638,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3c4aed4-ef2e-4d99-9904-1ae76f660f81/Lotta+Liina+%26+Lauri-86.jpg",
        "width": 4497,
        "height": 6627,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7dd1122-972e-41a8-80d4-00800a579e70/Lotta+Liina+%26+Lauri-90.jpg",
        "width": 4564,
        "height": 5307,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2444835-c9cf-4611-bfd7-2f91d12c094c/Lotta+Liina+%26+Lauri-91.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/31779f3f-2c7d-48a7-acd1-6daadfecabed/Lotta+Liina+%26+Lauri-95.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77e1f528-db45-4cad-a673-65e8ab43cba3/Lotta+Liina+%26+Lauri-101.jpg",
        "width": 7827,
        "height": 3644,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93fe9ea3-a3d7-41d6-a79f-f76f753f7427/Lotta+Liina+%26+Lauri-104.jpg",
        "width": 7132,
        "height": 3965,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d290318-25ff-4f1d-a69d-d44defbc5b94/Lotta+Liina+%26+Lauri-115.jpg",
        "width": 3959,
        "height": 4072,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6faf79bb-5035-4987-9391-ff5cf4ef8ff1/Lotta+Liina+%26+Lauri-146.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b2024f3-960b-4652-be9c-2af6a35af1df/Lotta+Liina+%26+Lauri-150.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/839a24d8-cce5-486a-85ee-d71c6ad7f6c8/Lotta+Liina+%26+Lauri-151.jpg",
        "width": 7952,
        "height": 5304,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f902948e-82ed-48de-9dbf-865b9660ff60/Lotta+Liina+%26+Lauri-168.jpg",
        "width": 5675,
        "height": 4111,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b41aa774-f91f-40c9-aa67-7eb32f4ddf8e/Lotta+Liina+%26+Lauri-156.jpg",
        "width": 5304,
        "height": 7952,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/baa5bd8d-53cd-4a69-b910-5b7cba2cba44/Lotta+Liina+%26+Lauri-157.jpg",
        "width": 3002,
        "height": 4500,
        "alt": "Lotta & Lauri"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/863997d9-dbe1-4dc7-8eb3-4881145c4cfa/A7302120-2.jpg",
        "width": 1000,
        "height": 667,
        "alt": "Lotta & Lauri"
      }
    ]
  },
  {
    "slug": "mari-joseph",
    "location": "Helsinki, Finland",
    "couple": "Mari & Joseph",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "MARI & JOSEPH",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f8509172-c839-4ed5-80c7-440cb24ae221/DSC05609.jpg",
        "width": 2017,
        "height": 1486,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a75de4de-8bc8-4451-b6fa-785533a578fd/Firefly+20230929204018.png",
        "width": 1438,
        "height": 2085,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d442e0a4-b720-4841-8672-30b8e3d02828/SAI04090.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f42c98e-5d24-499f-9810-799fa586c440/SAI04392.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/10aa1f1b-94f0-4c0a-a001-46671cbdc6ca/Couple+and+horses.jpg",
        "width": 2175,
        "height": 1242,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e6e9a2e-fa73-4454-90e9-968d1234166d/SAI04728.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5561f4b1-93ec-4d43-9213-e50405e8744d/SAI03977.jpg",
        "width": 1446,
        "height": 2074,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34f5b663-758e-4a32-ba9d-00a54dc4cfd8/SAI03979.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ec0c98a-46a0-4912-ba30-ab6e0640bc8c/SAI03984.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c492133d-e0d6-4135-8efe-da495a83bf40/SAI03985.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7185fa3-a461-4f55-8ea4-ce70e4149285/SAI04003.jpg",
        "width": 1616,
        "height": 1855,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36acdd80-041c-4344-938f-6326cd74f036/SAI04028-Enhanced-NR.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2cce956e-9d57-40ca-aa64-c4ebb1f60797/SAI04042.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/95353634-6ce6-428b-9ebd-13465540740c/SAI04045.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5c5a63b-830c-4005-8fc2-22fc47130eff/SAI04047.jpg",
        "width": 2013,
        "height": 1490,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56e5e31e-846a-4a50-a004-e43bb55ee5ae/SAI04050.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e7ce953-bd1e-4f68-bc1d-d4e32e66e0b8/SAI04057.jpg",
        "width": 1953,
        "height": 1536,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfcf2cf6-c5c4-46bc-8931-e6877624c243/SAI04065.jpg",
        "width": 1457,
        "height": 2059,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/51dfef4d-7139-420a-bc67-5715df32d11a/SAI04068.jpg",
        "width": 1411,
        "height": 2125,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5847a1af-2258-4b04-b38b-7bba8954451b/SAI04073.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd249b6f-21c5-495f-854d-5bf032bd8145/SAI04076.jpg",
        "width": 2124,
        "height": 1412,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/342a0364-df52-4fdf-b933-9845299d1188/SAI04077.jpg",
        "width": 1522,
        "height": 1969,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/811394ce-d72a-459c-8fc0-6a616667eec7/SAI04080.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23ee150b-e2b7-4297-87f8-aa90a320feaf/SAI04082.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d4ef90b-7ee4-4d6b-bb1d-761104cced11/SAI04084.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22c4d581-bfc9-4d31-a509-5bc188af569d/SAI04086.jpg",
        "width": 2169,
        "height": 1383,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b8fb9de-086c-4820-abf2-eb3f5d0d1d36/SAI04093.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62adaef8-94bb-414b-b003-0f258e34d5aa/SAI04347.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bab75d2c-9ab6-4e06-9bb0-adc5bb8e1bd0/SAI04034.jpg",
        "width": 2173,
        "height": 1380,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75fad462-0666-44e4-a30d-73a337d23982/SAI04097.jpg",
        "width": 1485,
        "height": 2019,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/af011877-65fe-46dd-8e4d-a4078833b912/SAI04099.jpg",
        "width": 1413,
        "height": 2123,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0fc8a849-daf8-459b-9ddf-0ce257289d3c/SAI04103.jpg",
        "width": 2421,
        "height": 1239,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/033bf97f-9a71-40a4-9014-5bba463e72df/SAI04108.jpg",
        "width": 1441,
        "height": 2081,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7aee4cf0-2bc7-4631-ad87-c54dde5cac45/SAI04113.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/74340773-a1dc-4386-a36b-aba1246d4780/SAI04116.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2ec20a88-1eb9-414a-9697-e224820a7d11/SAI04120.jpg",
        "width": 2109,
        "height": 1422,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e6358cc1-cb3d-49a4-9bee-94e53c1b8439/SAI04122.jpg",
        "width": 2207,
        "height": 1359,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce52db48-44f1-48d0-a074-73361cb70139/SAI04125.jpg",
        "width": 1384,
        "height": 2167,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f4fb7ff-e76b-4bbe-bc59-1d2ea93f1225/SAI04128.jpg",
        "width": 1607,
        "height": 1865,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e83f374e-ab08-41af-bacc-b21d77dc18c3/SAI04130.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d60e054d-07ec-4555-a3cb-81e2039b4a5f/SAI04142.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a1d56d1-e87a-404d-a8b1-4d7c40f5788f/SAI03975.jpg",
        "width": 1401,
        "height": 2141,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b8024c84-1aee-489b-be67-1b96abf61f7e/SAI04147.jpg",
        "width": 2022,
        "height": 1482,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab481459-4983-4b59-ba44-2a723ca88092/SAI04149.jpg",
        "width": 1958,
        "height": 1532,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/081cfb77-0024-4489-849f-8b9ecdce5466/SAI04159.jpg",
        "width": 2269,
        "height": 1322,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0c077b9a-1fc8-42b2-8601-30730caefb17/SAI04184.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9558e9f5-ceaa-4314-98ce-863afbc0ef68/SAI04186.jpg",
        "width": 1355,
        "height": 2212,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afc0e5c6-d08c-45e2-99a9-c0b91f963aa5/SAI04199.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/438023c4-6ff5-4504-881f-7b80e25703bc/SAI04201.jpg",
        "width": 2246,
        "height": 1335,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/707a539d-0bcd-448f-83bf-84c406f3fe7d/SAI04205.jpg",
        "width": 2936,
        "height": 1021,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3bed17ae-30ba-46c5-a2c9-bb849a803a19/SAI04208.jpg",
        "width": 1438,
        "height": 2085,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0aa60ab5-6773-4cb9-ba7b-77b6587ecb00/SAI04220.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aa8ba7cf-78d2-4762-a335-c369c0ae3910/SAI04224.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f4dc8b1-4359-47e9-981a-590941e3811c/SAI04242.jpg",
        "width": 1542,
        "height": 1945,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a9313fd5-f5ae-467c-a14b-4c1e7c76f34f/SAI04258.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f712a62-8b50-43af-885a-ea4c6295d14e/SAI04269.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a41b94a3-3583-45a1-8c58-29dcaa3d0754/SAI04279.jpg",
        "width": 2052,
        "height": 1461,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e900b3c-d174-4a14-9e03-40c6875c1260/SAI04302.jpg",
        "width": 1415,
        "height": 2119,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/930232cc-6350-4939-8dde-d95926941d32/SAI04338.jpg",
        "width": 1431,
        "height": 2096,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4cf2a95c-38e1-4e43-b45d-752612f28a72/SAI04352.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fa11b101-470b-4304-926a-0366baafdd7c/SAI04361.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8d1ed561-8106-4222-9396-9f3e2e879ebc/SAI04364.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58b366ed-e32f-4053-a383-73f01c4f79ba/SAI04376.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a9c8f69-5126-4b97-802d-e81e9c3a5d49/SAI04399.jpg",
        "width": 2120,
        "height": 1415,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93b69ff5-6bd0-4587-943a-80f5ceeeb7fb/SAI04404.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/107b917d-e397-4a88-9b91-e89dd19f9142/SAI04410.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4edb1533-27b8-4b49-ba91-2c3c83ebdd2a/SAI04417.jpg",
        "width": 2018,
        "height": 1485,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b32b4c6d-35ae-407d-9ce4-d199107e89d3/SAI04419.jpg",
        "width": 2285,
        "height": 1312,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd3a54ef-172d-4b7a-9336-7ee6cdce2c54/SAI04432.jpg",
        "width": 2013,
        "height": 1489,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d74120c-d9dc-4b0d-ac7d-50129760177b/SAI04443.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebba02b5-f50a-4883-9a89-bf4342d60a21/SAI04452.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/08d0847d-9713-4141-b77a-0d9987193711/SAI04456.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c76dd24d-4631-4a1a-a52d-d28b45c6997b/SAI04459.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/73058c95-ae8a-489e-8393-03914a44eb83/SAI04460.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a431a06e-2ecc-4d7c-997d-4f38c22f2b0e/SAI04470.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7fa482dc-7846-4b10-965d-840bf71f43cd/SAI04485.jpg",
        "width": 2094,
        "height": 1432,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ff797c69-a3bf-42f8-a2c9-cd3abba47cf0/SAI04489.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb8a9521-86ed-4254-ba74-d259d0cbcc7d/SAI04503.jpg",
        "width": 2082,
        "height": 1440,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4cb078e0-0e95-4ea0-9a78-612e6cacb37d/SAI04506.jpg",
        "width": 2337,
        "height": 1283,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22d19046-3c4e-42f9-919f-92736f37dd9b/DSC05619.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16b135ac-3842-407c-9cda-6c8e2a2e1b65/DSC05623.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b208d5c0-ac28-40de-9f2e-a60255922ae7/DSC05627.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c20777e-984f-4ed4-909a-467056afe5f2/DSC05636.jpg",
        "width": 1558,
        "height": 1925,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfad2814-ee27-4743-85fa-d7a7dca5b032/DSC05647.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/161dd380-ed7d-4a33-a0b2-47edcf9e05cf/DSC05654.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3482c772-0adb-464e-b2df-d03632cf38a0/SAI03980.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f859097b-ae08-4fa2-9de0-f7cd13098228/DSC05663.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a9e67574-0f93-4998-b261-d784390e057a/DSC05665.jpg",
        "width": 2386,
        "height": 1257,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ac851c1-24df-4b13-a021-e2338a2d4228/SAI04526.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35b7f66e-da6a-46c0-86a7-3dba7377a123/SAI04534.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e6c401a5-f8de-48aa-8016-316e8d5b2fb5/SAI04553.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/17df0e85-16e9-4a78-97fb-f4247c1a18b1/SAI04564.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5810cf35-1a99-4574-a995-951bfc043a1b/SAI04583.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c6b5c933-3923-4a23-9e09-0f2cf90c42d4/SAI04602.jpg",
        "width": 2142,
        "height": 1400,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bee8f87e-a449-4f65-add4-3cc1d3173f3b/SAI04608.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2296cf21-ae6f-4335-a7c5-574bbc4bf38b/SAI04613.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/52f18fcd-1cc6-4cbc-877a-588494ce2e36/SAI04614.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24682fc5-da54-4e74-a4d2-e1536af969e2/SAI04630.jpg",
        "width": 2238,
        "height": 1340,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a3d1127-8f6d-4c09-bbfe-eb1a3df30dd0/SAI04690.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/140e8c9f-d57f-4d78-accd-09463b39c4f7/SAI04695.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c4ed484-4f11-494b-80a5-16ba754cedc3/SAI04701.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/96e8bc66-7f1a-4024-a811-d2e035e73e40/SAI04714.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2cab2949-9514-485f-a7b8-2e1c78768fa2/SAI04717.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8bb711fa-cd61-4e98-9f1e-6257271b1ea5/SAI04719.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d9fc184-0681-4960-8bb0-c0388d810ff0/SAI04732.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9d33b14-3f0f-48be-b07f-9a666beb3db9/SAI04734.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b00bf125-5ddc-4479-9e35-bb3fd7357675/SAI04790.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d3cb046-51f1-4b1d-8c8c-43043e05a0a9/SAI04817.jpg",
        "width": 1440,
        "height": 2082,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90504ba9-acca-4547-a84f-2fb47e61c4ae/SAI04829.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef44705c-fe49-4d0b-9583-d4c00fd9a436/SAI04853.jpg",
        "width": 1575,
        "height": 1904,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4284fd93-d4d0-4a2d-bc3d-cc9dfa646984/SAI04855.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be406076-02ae-4be3-88a8-a7aca4a3e0eb/SAI04856.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef39069e-9728-48b1-a422-5b638b4e42a8/SAI04858.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93729d57-df58-49e0-b098-5c0de2333ce3/SAI04859.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6eba391f-b889-4263-9cc5-4f8544c50833/SAI04863.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d7959843-e9b7-43c4-8ed2-4a5cffa835bb/SAI04870.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3a37f83-71cf-4bf7-8aad-bf9292f7939f/SAI04872.jpg",
        "width": 2056,
        "height": 1458,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce1687a0-dce9-4b77-980e-94b1dd0b9cfd/SAI04881.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/45d75852-12fe-4c3f-8238-36d6456436c1/SAI04893.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6196b85d-1277-4976-be6b-8363da67b2d2/SAI04934.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/165d9f14-10b1-42b1-8007-1c17b6ea950e/SAI04935.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b051dda0-3e6a-4139-b045-b33b7f508bd1/SAI04936.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79de04ee-7235-408d-817e-bd31ec65422f/SAI04940.jpg",
        "width": 1496,
        "height": 2005,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d8db11c2-e267-4306-812c-fc1b7ce8cf73/SAI04946.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5c52402-c57d-4dc7-aab4-7559c070501e/SAI04951.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f815c2e-4a46-4d49-bc9c-a41d5593cf81/SAI04958.jpg",
        "width": 2117,
        "height": 1416,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/812de1c3-42a4-4ac5-ba7c-e6f2c795ea52/SAI04964.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/750a389b-37d5-4a69-891f-a4d27c308b3d/SAI04965.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/102f4378-643e-4e63-b8d8-fec633f327d0/SAI04966.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68860d0d-f9b5-425a-9d56-10a824b1c727/SAI04970.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2540761b-b4a0-40b0-b004-ee10023ed9af/SAI04973.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0413f9bd-7ff3-4d36-af97-2f8ce9e4b66f/SAI04977.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0a3a4ac-2ef7-40c4-bf99-feeed2cf77ed/SAI04986.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9e6b373-073f-4ea8-87ee-d5f435af0046/SAI04992.jpg",
        "width": 1536,
        "height": 1951,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c9359b7-e301-4ef5-b3ee-da524aa40f85/SAI04995.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aa3c14c6-c2d9-463d-ba37-fb06683e1c84/SAI05000.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3fa80344-f8f2-4065-b945-daf6b7ee493e/SAI05004.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/47e64339-fdba-4f57-b586-9ce23987d20d/SAI05021.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1fe8648f-aa97-4a0e-9a6f-a9af0fe4b6a8/SAI05026.jpg",
        "width": 2077,
        "height": 1443,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f8509172-c839-4ed5-80c7-440cb24ae221/DSC05609.jpg",
        "width": 2017,
        "height": 1486,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a75de4de-8bc8-4451-b6fa-785533a578fd/Firefly+20230929204018.png",
        "width": 1438,
        "height": 2085,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d442e0a4-b720-4841-8672-30b8e3d02828/SAI04090.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f42c98e-5d24-499f-9810-799fa586c440/SAI04392.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/10aa1f1b-94f0-4c0a-a001-46671cbdc6ca/Couple+and+horses.jpg",
        "width": 2175,
        "height": 1242,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e6e9a2e-fa73-4454-90e9-968d1234166d/SAI04728.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5561f4b1-93ec-4d43-9213-e50405e8744d/SAI03977.jpg",
        "width": 1446,
        "height": 2074,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34f5b663-758e-4a32-ba9d-00a54dc4cfd8/SAI03979.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ec0c98a-46a0-4912-ba30-ab6e0640bc8c/SAI03984.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c492133d-e0d6-4135-8efe-da495a83bf40/SAI03985.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7185fa3-a461-4f55-8ea4-ce70e4149285/SAI04003.jpg",
        "width": 1616,
        "height": 1855,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36acdd80-041c-4344-938f-6326cd74f036/SAI04028-Enhanced-NR.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2cce956e-9d57-40ca-aa64-c4ebb1f60797/SAI04042.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/95353634-6ce6-428b-9ebd-13465540740c/SAI04045.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5c5a63b-830c-4005-8fc2-22fc47130eff/SAI04047.jpg",
        "width": 2013,
        "height": 1490,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/56e5e31e-846a-4a50-a004-e43bb55ee5ae/SAI04050.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e7ce953-bd1e-4f68-bc1d-d4e32e66e0b8/SAI04057.jpg",
        "width": 1953,
        "height": 1536,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfcf2cf6-c5c4-46bc-8931-e6877624c243/SAI04065.jpg",
        "width": 1457,
        "height": 2059,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/51dfef4d-7139-420a-bc67-5715df32d11a/SAI04068.jpg",
        "width": 1411,
        "height": 2125,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5847a1af-2258-4b04-b38b-7bba8954451b/SAI04073.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd249b6f-21c5-495f-854d-5bf032bd8145/SAI04076.jpg",
        "width": 2124,
        "height": 1412,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/342a0364-df52-4fdf-b933-9845299d1188/SAI04077.jpg",
        "width": 1522,
        "height": 1969,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/811394ce-d72a-459c-8fc0-6a616667eec7/SAI04080.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/23ee150b-e2b7-4297-87f8-aa90a320feaf/SAI04082.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d4ef90b-7ee4-4d6b-bb1d-761104cced11/SAI04084.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22c4d581-bfc9-4d31-a509-5bc188af569d/SAI04086.jpg",
        "width": 2169,
        "height": 1383,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b8fb9de-086c-4820-abf2-eb3f5d0d1d36/SAI04093.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62adaef8-94bb-414b-b003-0f258e34d5aa/SAI04347.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bab75d2c-9ab6-4e06-9bb0-adc5bb8e1bd0/SAI04034.jpg",
        "width": 2173,
        "height": 1380,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75fad462-0666-44e4-a30d-73a337d23982/SAI04097.jpg",
        "width": 1485,
        "height": 2019,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/af011877-65fe-46dd-8e4d-a4078833b912/SAI04099.jpg",
        "width": 1413,
        "height": 2123,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0fc8a849-daf8-459b-9ddf-0ce257289d3c/SAI04103.jpg",
        "width": 2421,
        "height": 1239,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/033bf97f-9a71-40a4-9014-5bba463e72df/SAI04108.jpg",
        "width": 1441,
        "height": 2081,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7aee4cf0-2bc7-4631-ad87-c54dde5cac45/SAI04113.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/74340773-a1dc-4386-a36b-aba1246d4780/SAI04116.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2ec20a88-1eb9-414a-9697-e224820a7d11/SAI04120.jpg",
        "width": 2109,
        "height": 1422,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e6358cc1-cb3d-49a4-9bee-94e53c1b8439/SAI04122.jpg",
        "width": 2207,
        "height": 1359,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce52db48-44f1-48d0-a074-73361cb70139/SAI04125.jpg",
        "width": 1384,
        "height": 2167,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f4fb7ff-e76b-4bbe-bc59-1d2ea93f1225/SAI04128.jpg",
        "width": 1607,
        "height": 1865,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e83f374e-ab08-41af-bacc-b21d77dc18c3/SAI04130.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d60e054d-07ec-4555-a3cb-81e2039b4a5f/SAI04142.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a1d56d1-e87a-404d-a8b1-4d7c40f5788f/SAI03975.jpg",
        "width": 1401,
        "height": 2141,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b8024c84-1aee-489b-be67-1b96abf61f7e/SAI04147.jpg",
        "width": 2022,
        "height": 1482,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab481459-4983-4b59-ba44-2a723ca88092/SAI04149.jpg",
        "width": 1958,
        "height": 1532,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/081cfb77-0024-4489-849f-8b9ecdce5466/SAI04159.jpg",
        "width": 2269,
        "height": 1322,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0c077b9a-1fc8-42b2-8601-30730caefb17/SAI04184.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9558e9f5-ceaa-4314-98ce-863afbc0ef68/SAI04186.jpg",
        "width": 1355,
        "height": 2212,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afc0e5c6-d08c-45e2-99a9-c0b91f963aa5/SAI04199.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/438023c4-6ff5-4504-881f-7b80e25703bc/SAI04201.jpg",
        "width": 2246,
        "height": 1335,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/707a539d-0bcd-448f-83bf-84c406f3fe7d/SAI04205.jpg",
        "width": 2936,
        "height": 1021,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3bed17ae-30ba-46c5-a2c9-bb849a803a19/SAI04208.jpg",
        "width": 1438,
        "height": 2085,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0aa60ab5-6773-4cb9-ba7b-77b6587ecb00/SAI04220.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aa8ba7cf-78d2-4762-a335-c369c0ae3910/SAI04224.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f4dc8b1-4359-47e9-981a-590941e3811c/SAI04242.jpg",
        "width": 1542,
        "height": 1945,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a9313fd5-f5ae-467c-a14b-4c1e7c76f34f/SAI04258.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f712a62-8b50-43af-885a-ea4c6295d14e/SAI04269.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a41b94a3-3583-45a1-8c58-29dcaa3d0754/SAI04279.jpg",
        "width": 2052,
        "height": 1461,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e900b3c-d174-4a14-9e03-40c6875c1260/SAI04302.jpg",
        "width": 1415,
        "height": 2119,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/930232cc-6350-4939-8dde-d95926941d32/SAI04338.jpg",
        "width": 1431,
        "height": 2096,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4cf2a95c-38e1-4e43-b45d-752612f28a72/SAI04352.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fa11b101-470b-4304-926a-0366baafdd7c/SAI04361.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8d1ed561-8106-4222-9396-9f3e2e879ebc/SAI04364.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58b366ed-e32f-4053-a383-73f01c4f79ba/SAI04376.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a9c8f69-5126-4b97-802d-e81e9c3a5d49/SAI04399.jpg",
        "width": 2120,
        "height": 1415,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93b69ff5-6bd0-4587-943a-80f5ceeeb7fb/SAI04404.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/107b917d-e397-4a88-9b91-e89dd19f9142/SAI04410.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4edb1533-27b8-4b49-ba91-2c3c83ebdd2a/SAI04417.jpg",
        "width": 2018,
        "height": 1485,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b32b4c6d-35ae-407d-9ce4-d199107e89d3/SAI04419.jpg",
        "width": 2285,
        "height": 1312,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd3a54ef-172d-4b7a-9336-7ee6cdce2c54/SAI04432.jpg",
        "width": 2013,
        "height": 1489,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d74120c-d9dc-4b0d-ac7d-50129760177b/SAI04443.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebba02b5-f50a-4883-9a89-bf4342d60a21/SAI04452.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/08d0847d-9713-4141-b77a-0d9987193711/SAI04456.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c76dd24d-4631-4a1a-a52d-d28b45c6997b/SAI04459.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/73058c95-ae8a-489e-8393-03914a44eb83/SAI04460.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a431a06e-2ecc-4d7c-997d-4f38c22f2b0e/SAI04470.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7fa482dc-7846-4b10-965d-840bf71f43cd/SAI04485.jpg",
        "width": 2094,
        "height": 1432,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ff797c69-a3bf-42f8-a2c9-cd3abba47cf0/SAI04489.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb8a9521-86ed-4254-ba74-d259d0cbcc7d/SAI04503.jpg",
        "width": 2082,
        "height": 1440,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4cb078e0-0e95-4ea0-9a78-612e6cacb37d/SAI04506.jpg",
        "width": 2337,
        "height": 1283,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22d19046-3c4e-42f9-919f-92736f37dd9b/DSC05619.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16b135ac-3842-407c-9cda-6c8e2a2e1b65/DSC05623.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b208d5c0-ac28-40de-9f2e-a60255922ae7/DSC05627.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c20777e-984f-4ed4-909a-467056afe5f2/DSC05636.jpg",
        "width": 1558,
        "height": 1925,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cfad2814-ee27-4743-85fa-d7a7dca5b032/DSC05647.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/161dd380-ed7d-4a33-a0b2-47edcf9e05cf/DSC05654.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3482c772-0adb-464e-b2df-d03632cf38a0/SAI03980.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f859097b-ae08-4fa2-9de0-f7cd13098228/DSC05663.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a9e67574-0f93-4998-b261-d784390e057a/DSC05665.jpg",
        "width": 2386,
        "height": 1257,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ac851c1-24df-4b13-a021-e2338a2d4228/SAI04526.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35b7f66e-da6a-46c0-86a7-3dba7377a123/SAI04534.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e6c401a5-f8de-48aa-8016-316e8d5b2fb5/SAI04553.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/17df0e85-16e9-4a78-97fb-f4247c1a18b1/SAI04564.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5810cf35-1a99-4574-a995-951bfc043a1b/SAI04583.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c6b5c933-3923-4a23-9e09-0f2cf90c42d4/SAI04602.jpg",
        "width": 2142,
        "height": 1400,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bee8f87e-a449-4f65-add4-3cc1d3173f3b/SAI04608.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2296cf21-ae6f-4335-a7c5-574bbc4bf38b/SAI04613.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/52f18fcd-1cc6-4cbc-877a-588494ce2e36/SAI04614.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24682fc5-da54-4e74-a4d2-e1536af969e2/SAI04630.jpg",
        "width": 2238,
        "height": 1340,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a3d1127-8f6d-4c09-bbfe-eb1a3df30dd0/SAI04690.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/140e8c9f-d57f-4d78-accd-09463b39c4f7/SAI04695.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c4ed484-4f11-494b-80a5-16ba754cedc3/SAI04701.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/96e8bc66-7f1a-4024-a811-d2e035e73e40/SAI04714.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2cab2949-9514-485f-a7b8-2e1c78768fa2/SAI04717.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8bb711fa-cd61-4e98-9f1e-6257271b1ea5/SAI04719.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d9fc184-0681-4960-8bb0-c0388d810ff0/SAI04732.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9d33b14-3f0f-48be-b07f-9a666beb3db9/SAI04734.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b00bf125-5ddc-4479-9e35-bb3fd7357675/SAI04790.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d3cb046-51f1-4b1d-8c8c-43043e05a0a9/SAI04817.jpg",
        "width": 1440,
        "height": 2082,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90504ba9-acca-4547-a84f-2fb47e61c4ae/SAI04829.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef44705c-fe49-4d0b-9583-d4c00fd9a436/SAI04853.jpg",
        "width": 1575,
        "height": 1904,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4284fd93-d4d0-4a2d-bc3d-cc9dfa646984/SAI04855.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/be406076-02ae-4be3-88a8-a7aca4a3e0eb/SAI04856.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef39069e-9728-48b1-a422-5b638b4e42a8/SAI04858.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93729d57-df58-49e0-b098-5c0de2333ce3/SAI04859.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6eba391f-b889-4263-9cc5-4f8544c50833/SAI04863.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d7959843-e9b7-43c4-8ed2-4a5cffa835bb/SAI04870.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3a37f83-71cf-4bf7-8aad-bf9292f7939f/SAI04872.jpg",
        "width": 2056,
        "height": 1458,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce1687a0-dce9-4b77-980e-94b1dd0b9cfd/SAI04881.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/45d75852-12fe-4c3f-8238-36d6456436c1/SAI04893.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6196b85d-1277-4976-be6b-8363da67b2d2/SAI04934.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/165d9f14-10b1-42b1-8007-1c17b6ea950e/SAI04935.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b051dda0-3e6a-4139-b045-b33b7f508bd1/SAI04936.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79de04ee-7235-408d-817e-bd31ec65422f/SAI04940.jpg",
        "width": 1496,
        "height": 2005,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d8db11c2-e267-4306-812c-fc1b7ce8cf73/SAI04946.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5c52402-c57d-4dc7-aab4-7559c070501e/SAI04951.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f815c2e-4a46-4d49-bc9c-a41d5593cf81/SAI04958.jpg",
        "width": 2117,
        "height": 1416,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/812de1c3-42a4-4ac5-ba7c-e6f2c795ea52/SAI04964.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/750a389b-37d5-4a69-891f-a4d27c308b3d/SAI04965.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/102f4378-643e-4e63-b8d8-fec633f327d0/SAI04966.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68860d0d-f9b5-425a-9d56-10a824b1c727/SAI04970.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2540761b-b4a0-40b0-b004-ee10023ed9af/SAI04973.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0413f9bd-7ff3-4d36-af97-2f8ce9e4b66f/SAI04977.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0a3a4ac-2ef7-40c4-bf99-feeed2cf77ed/SAI04986.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9e6b373-073f-4ea8-87ee-d5f435af0046/SAI04992.jpg",
        "width": 1536,
        "height": 1951,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c9359b7-e301-4ef5-b3ee-da524aa40f85/SAI04995.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aa3c14c6-c2d9-463d-ba37-fb06683e1c84/SAI05000.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3fa80344-f8f2-4065-b945-daf6b7ee493e/SAI05004.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/47e64339-fdba-4f57-b586-9ce23987d20d/SAI05021.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "MARI & JOSEPH"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1fe8648f-aa97-4a0e-9a6f-a9af0fe4b6a8/SAI05026.jpg",
        "width": 2077,
        "height": 1443,
        "alt": "MARI & JOSEPH"
      }
    ]
  },
  {
    "slug": "maria-natti",
    "location": "Helsinki, Finland",
    "couple": "Maria & Natti",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "MARIA & MATTI",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4d13dc29-35d8-4abf-8acc-974294cf7269/Lotta+Liina+%26+Lauri.jpg",
        "width": 1080,
        "height": 1540,
        "alt": "Lotta Liina & Lauri.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35e163a2-41d6-48e3-b249-6c6e566cb7dc/Lotta+Liina+%26+Lauri-2.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "Lotta Liina & Lauri-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/71c605f1-e440-446f-a8a2-8142ea1c3156/Lotta+Liina+%26+Lauri-3.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "Lotta Liina & Lauri-3.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/721ace58-bf52-47a1-82f7-5fbee83f6761/Lotta+Liina+%26+Lauri-4.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "Lotta Liina & Lauri-4.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e4791c4b-dd87-4cf6-bdc1-0dc27df0a63c/Lotta+Liina+%26+Lauri-5.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "Lotta Liina & Lauri-5.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ec1a671-7885-42a9-bdf1-8bf9a324187d/Lotta+Liina+%26+Lauri-6.jpg",
        "width": 1122,
        "height": 1080,
        "alt": "Lotta Liina & Lauri-6.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98ad0712-5b35-4ada-97bc-a431029e2982/Lotta+Liina+%26+Lauri-7.jpg",
        "width": 1080,
        "height": 1544,
        "alt": "Lotta Liina & Lauri-7.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2dafcfb-1a62-4b4b-a905-31cb8046dd97/Lotta+Liina+%26+Lauri-8.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "Lotta Liina & Lauri-8.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35238766-4d15-4e34-ab55-1f21b6b81b91/Lotta+Liina+%26+Lauri-9.jpg",
        "width": 1874,
        "height": 1080,
        "alt": "Lotta Liina & Lauri-9.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7746da9b-fa70-424a-bef9-b2e738e09677/Lotta+Liina+%26+Lauri-10.jpg",
        "width": 1080,
        "height": 1608,
        "alt": "Lotta Liina & Lauri-10.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4b34e53d-a400-43ea-a791-9736284448ef/Lotta+Liina+%26+Lauri-11.jpg",
        "width": 1349,
        "height": 1080,
        "alt": "Lotta Liina & Lauri-11.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5804bc9c-f68b-4129-9c02-fec08b205115/Lotta+Liina+%26+Lauri-12.jpg",
        "width": 1230,
        "height": 1080,
        "alt": "Lotta Liina & Lauri-12.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3804dfd-de74-4876-a126-945d1bde6c22/Lotta+Liina+%26+Lauri-13.jpg",
        "width": 1080,
        "height": 1727,
        "alt": "Lotta Liina & Lauri-13.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84e45c4f-6bc6-482a-87d6-f1b5b148f3b7/Lotta+Liina+%26+Lauri-14.jpg",
        "width": 1256,
        "height": 1080,
        "alt": "Lotta Liina & Lauri-14.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/57841655-97b8-4c4e-976e-0414ade56e2c/Lotta+Liina+%26+Lauri-15.jpg",
        "width": 1080,
        "height": 1505,
        "alt": "Lotta Liina & Lauri-15.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5c79e4e0-b5b5-4e13-b44f-b04388fb4672/Lotta+Liina+%26+Lauri-16.jpg",
        "width": 1080,
        "height": 1546,
        "alt": "Lotta Liina & Lauri-16.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/519e9448-1af0-4ffd-bfdf-d43bb8565f39/Lotta+Liina+%26+Lauri-17.jpg",
        "width": 1586,
        "height": 1080,
        "alt": "Lotta Liina & Lauri-17.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b33c25ba-80fb-4384-b341-73ea547833b5/A7304699.jpg",
        "width": 1080,
        "height": 1480,
        "alt": "A7304699.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d27b4f58-b722-4419-af27-323ab15cb524/A7304702.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7304702.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/987a497d-5723-4c6a-878a-d53fd2b1836c/A7304719.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7304719.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e759603-cce4-490a-ad13-7182616ac48a/A7304721.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304721.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fcecf301-e354-4059-bb40-2245aaef973c/A7304731.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304731.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/030cb13a-9cb9-4dca-a271-5e830238f6d5/A7304745.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304745.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/435cf2e5-4af3-4b2b-83f2-681b9ffa240d/A7304756.jpg",
        "width": 1080,
        "height": 1473,
        "alt": "A7304756.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88f2c809-3428-4e7e-8d9d-2e0dc58c8457/A7304780.jpg",
        "width": 1471,
        "height": 1080,
        "alt": "A7304780.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d519c3da-ebb9-4e66-a4fc-796fa813f0b1/A7304783.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304783.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b16b3bdb-1a02-4d34-9d0c-52135aa44aaf/A7304788.jpg",
        "width": 1712,
        "height": 1080,
        "alt": "A7304788.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ba79bf8-17c7-4cf2-a1a5-ec7a68907f82/A7304797.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304797.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5c051acf-04d2-4732-8b6a-3869d6db37a3/A7304800.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7304800.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/898904b5-7df7-4f93-b37a-adc913d043cc/A7304846.jpg",
        "width": 1080,
        "height": 1384,
        "alt": "A7304846.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/693212c6-094e-44e3-bc30-f77155652402/A7304852.jpg",
        "width": 1080,
        "height": 1796,
        "alt": "A7304852.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55f5a3dc-6e2a-48c5-8d4f-1440e05b936d/A7304874.jpg",
        "width": 1440,
        "height": 1080,
        "alt": "A7304874.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ff41aa52-b80e-4e2d-a724-1c002a77aa55/A7304879.jpg",
        "width": 1080,
        "height": 1230,
        "alt": "A7304879.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce6622b3-5920-4f03-a95d-819fe452b32b/A7304897.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304897.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f156bd23-e001-43ba-9f41-8f0cfc8c3dea/A7304915.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304915.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ba8fbb39-9788-43fd-8384-8f0de2d9d145/A7304931.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304931.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b90da3bc-fef6-48c2-9e69-9080ea29f72e/A7304935.jpg",
        "width": 1080,
        "height": 1327,
        "alt": "A7304935.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fff49c2d-8d24-4508-8bd9-a9c689e94523/A7304947.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304947.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bba5389e-c560-4b5c-9bc6-9448520ba8b5/A7304965.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7304965.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d224d85-ce73-493a-a3d2-632ebb83d96d/A7304978.jpg",
        "width": 1080,
        "height": 1362,
        "alt": "A7304978.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0d0f184-5919-4d1a-9264-fa2fa07c6b4b/A7304982.jpg",
        "width": 1409,
        "height": 1080,
        "alt": "A7304982.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef592bd3-38ec-4cf7-983d-811db3b3ec3b/A7304987.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7304987.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e62087c-ed63-4ac3-a56c-e97625ecdc1c/A7304998.jpg",
        "width": 1465,
        "height": 1080,
        "alt": "A7304998.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c28900b7-9f7c-45d8-a67e-f3a8fb0ea3d7/A7305018.jpg",
        "width": 1841,
        "height": 1080,
        "alt": "A7305018.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0594bcde-36cd-4de2-8fac-923069cc0542/A7305031.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305031.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d74c5ac-25cd-4d43-ab46-ef584bfc2f42/A7305042.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305042.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0687e85-6e8b-40d7-a73f-7ec7a08a3d56/A7305054.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305054.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0ccf1ee5-b50e-4a70-850a-0bb066440789/A7305056.jpg",
        "width": 1080,
        "height": 1429,
        "alt": "A7305056.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e682e59-6aad-4a48-932d-5e9db0a1e8b4/A7305060.jpg",
        "width": 1080,
        "height": 1599,
        "alt": "A7305060.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0ae6d242-253d-451a-a002-e39862daafbe/A7305063.jpg",
        "width": 1080,
        "height": 1630,
        "alt": "A7305063.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f06c23d-ea9e-41a9-bdbe-2eb938d448c0/A7305072.jpg",
        "width": 1702,
        "height": 1080,
        "alt": "A7305072.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/995223cf-aaeb-4efe-8b23-d018ec90162d/A7305084.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305084.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/811ac27b-e2c0-492a-aaeb-e040f4a7254b/A7305089.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7305089.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/752daf79-0063-4e8d-bdff-993a00d35f86/A7305096.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305096.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/540a65ed-dfae-4b00-9285-ab137ac40fba/A7305108.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305108.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc34a779-b9f9-42af-8b8e-d471e7810cd0/A7305110.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305110.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a5c405a-db31-41d4-8790-61e429325659/A7305121.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305121.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e6e15c24-4661-4c86-b0a5-44ec239e8990/A7305122.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305122.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0b3a0291-9392-4958-adab-fae5b5a4231b/A7305130.jpg",
        "width": 1659,
        "height": 1080,
        "alt": "A7305130.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/235d9cfb-f45f-4c3a-863b-500d83834b24/A7305163.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7305163.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/178439f3-4b2c-4485-b1b4-69329677da82/A7305313.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7305313.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/060baa21-a3f7-4b06-a28d-6aa0e9252092/A7305321.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305321.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c31536b7-d4cd-4c5b-b541-ca8656f1c055/A7305331.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7305331.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/676db728-cb8c-47cd-af8a-6141f2b8a908/A7305337.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7305337.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a7ac4b4-5a75-4791-9a47-c119ed800d08/A7305354.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305354.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f31b0f9c-75dd-4bb6-81fa-a8f62ee8745f/A7305407.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305407.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/63c1c9d9-d81d-401b-bce1-a5e2b9b25037/A7305425.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7305425.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/333d1ab1-2403-46dc-aff9-48aa7434953d/A7305483.jpg",
        "width": 1401,
        "height": 1080,
        "alt": "A7305483.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a11b78f7-5eda-4d0a-a942-1a8e12363253/A7305493.jpg",
        "width": 1594,
        "height": 1080,
        "alt": "A7305493.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f2e6ae6-d93f-443c-9780-3eace5d6ac6d/A7305507.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "A7305507.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b04685bb-8406-4c4f-976d-29f16c010268/A7305547.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305547.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a4f06f7-dd4c-4e5c-9dd2-4dc266ceff2d/A7305548.jpg",
        "width": 1626,
        "height": 1080,
        "alt": "A7305548.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94268642-9f6b-4e89-9619-b8af8d43b130/A7305549.jpg",
        "width": 1810,
        "height": 1080,
        "alt": "A7305549.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6bd2811e-06c5-44b9-888f-c4c88a318da3/A7305552.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "A7305552.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4d13dc29-35d8-4abf-8acc-974294cf7269/Lotta+Liina+%26+Lauri.jpg",
        "width": 1080,
        "height": 1540,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35e163a2-41d6-48e3-b249-6c6e566cb7dc/Lotta+Liina+%26+Lauri-2.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/71c605f1-e440-446f-a8a2-8142ea1c3156/Lotta+Liina+%26+Lauri-3.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/721ace58-bf52-47a1-82f7-5fbee83f6761/Lotta+Liina+%26+Lauri-4.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e4791c4b-dd87-4cf6-bdc1-0dc27df0a63c/Lotta+Liina+%26+Lauri-5.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ec1a671-7885-42a9-bdf1-8bf9a324187d/Lotta+Liina+%26+Lauri-6.jpg",
        "width": 1122,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98ad0712-5b35-4ada-97bc-a431029e2982/Lotta+Liina+%26+Lauri-7.jpg",
        "width": 1080,
        "height": 1544,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2dafcfb-1a62-4b4b-a905-31cb8046dd97/Lotta+Liina+%26+Lauri-8.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35238766-4d15-4e34-ab55-1f21b6b81b91/Lotta+Liina+%26+Lauri-9.jpg",
        "width": 1874,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7746da9b-fa70-424a-bef9-b2e738e09677/Lotta+Liina+%26+Lauri-10.jpg",
        "width": 1080,
        "height": 1608,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4b34e53d-a400-43ea-a791-9736284448ef/Lotta+Liina+%26+Lauri-11.jpg",
        "width": 1349,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5804bc9c-f68b-4129-9c02-fec08b205115/Lotta+Liina+%26+Lauri-12.jpg",
        "width": 1230,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3804dfd-de74-4876-a126-945d1bde6c22/Lotta+Liina+%26+Lauri-13.jpg",
        "width": 1080,
        "height": 1727,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/84e45c4f-6bc6-482a-87d6-f1b5b148f3b7/Lotta+Liina+%26+Lauri-14.jpg",
        "width": 1256,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/57841655-97b8-4c4e-976e-0414ade56e2c/Lotta+Liina+%26+Lauri-15.jpg",
        "width": 1080,
        "height": 1505,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5c79e4e0-b5b5-4e13-b44f-b04388fb4672/Lotta+Liina+%26+Lauri-16.jpg",
        "width": 1080,
        "height": 1546,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/519e9448-1af0-4ffd-bfdf-d43bb8565f39/Lotta+Liina+%26+Lauri-17.jpg",
        "width": 1586,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b33c25ba-80fb-4384-b341-73ea547833b5/A7304699.jpg",
        "width": 1080,
        "height": 1480,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d27b4f58-b722-4419-af27-323ab15cb524/A7304702.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/987a497d-5723-4c6a-878a-d53fd2b1836c/A7304719.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8e759603-cce4-490a-ad13-7182616ac48a/A7304721.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fcecf301-e354-4059-bb40-2245aaef973c/A7304731.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/030cb13a-9cb9-4dca-a271-5e830238f6d5/A7304745.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/435cf2e5-4af3-4b2b-83f2-681b9ffa240d/A7304756.jpg",
        "width": 1080,
        "height": 1473,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88f2c809-3428-4e7e-8d9d-2e0dc58c8457/A7304780.jpg",
        "width": 1471,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d519c3da-ebb9-4e66-a4fc-796fa813f0b1/A7304783.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b16b3bdb-1a02-4d34-9d0c-52135aa44aaf/A7304788.jpg",
        "width": 1712,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ba79bf8-17c7-4cf2-a1a5-ec7a68907f82/A7304797.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5c051acf-04d2-4732-8b6a-3869d6db37a3/A7304800.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/898904b5-7df7-4f93-b37a-adc913d043cc/A7304846.jpg",
        "width": 1080,
        "height": 1384,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/693212c6-094e-44e3-bc30-f77155652402/A7304852.jpg",
        "width": 1080,
        "height": 1796,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55f5a3dc-6e2a-48c5-8d4f-1440e05b936d/A7304874.jpg",
        "width": 1440,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ff41aa52-b80e-4e2d-a724-1c002a77aa55/A7304879.jpg",
        "width": 1080,
        "height": 1230,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce6622b3-5920-4f03-a95d-819fe452b32b/A7304897.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f156bd23-e001-43ba-9f41-8f0cfc8c3dea/A7304915.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ba8fbb39-9788-43fd-8384-8f0de2d9d145/A7304931.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b90da3bc-fef6-48c2-9e69-9080ea29f72e/A7304935.jpg",
        "width": 1080,
        "height": 1327,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fff49c2d-8d24-4508-8bd9-a9c689e94523/A7304947.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bba5389e-c560-4b5c-9bc6-9448520ba8b5/A7304965.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d224d85-ce73-493a-a3d2-632ebb83d96d/A7304978.jpg",
        "width": 1080,
        "height": 1362,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0d0f184-5919-4d1a-9264-fa2fa07c6b4b/A7304982.jpg",
        "width": 1409,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef592bd3-38ec-4cf7-983d-811db3b3ec3b/A7304987.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e62087c-ed63-4ac3-a56c-e97625ecdc1c/A7304998.jpg",
        "width": 1465,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c28900b7-9f7c-45d8-a67e-f3a8fb0ea3d7/A7305018.jpg",
        "width": 1841,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0594bcde-36cd-4de2-8fac-923069cc0542/A7305031.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d74c5ac-25cd-4d43-ab46-ef584bfc2f42/A7305042.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0687e85-6e8b-40d7-a73f-7ec7a08a3d56/A7305054.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0ccf1ee5-b50e-4a70-850a-0bb066440789/A7305056.jpg",
        "width": 1080,
        "height": 1429,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e682e59-6aad-4a48-932d-5e9db0a1e8b4/A7305060.jpg",
        "width": 1080,
        "height": 1599,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0ae6d242-253d-451a-a002-e39862daafbe/A7305063.jpg",
        "width": 1080,
        "height": 1630,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9f06c23d-ea9e-41a9-bdbe-2eb938d448c0/A7305072.jpg",
        "width": 1702,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/995223cf-aaeb-4efe-8b23-d018ec90162d/A7305084.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/811ac27b-e2c0-492a-aaeb-e040f4a7254b/A7305089.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/752daf79-0063-4e8d-bdff-993a00d35f86/A7305096.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/540a65ed-dfae-4b00-9285-ab137ac40fba/A7305108.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc34a779-b9f9-42af-8b8e-d471e7810cd0/A7305110.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a5c405a-db31-41d4-8790-61e429325659/A7305121.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e6e15c24-4661-4c86-b0a5-44ec239e8990/A7305122.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0b3a0291-9392-4958-adab-fae5b5a4231b/A7305130.jpg",
        "width": 1659,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/235d9cfb-f45f-4c3a-863b-500d83834b24/A7305163.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/178439f3-4b2c-4485-b1b4-69329677da82/A7305313.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/060baa21-a3f7-4b06-a28d-6aa0e9252092/A7305321.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c31536b7-d4cd-4c5b-b541-ca8656f1c055/A7305331.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/676db728-cb8c-47cd-af8a-6141f2b8a908/A7305337.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a7ac4b4-5a75-4791-9a47-c119ed800d08/A7305354.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f31b0f9c-75dd-4bb6-81fa-a8f62ee8745f/A7305407.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/63c1c9d9-d81d-401b-bce1-a5e2b9b25037/A7305425.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/333d1ab1-2403-46dc-aff9-48aa7434953d/A7305483.jpg",
        "width": 1401,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a11b78f7-5eda-4d0a-a942-1a8e12363253/A7305493.jpg",
        "width": 1594,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f2e6ae6-d93f-443c-9780-3eace5d6ac6d/A7305507.jpg",
        "width": 1080,
        "height": 1619,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b04685bb-8406-4c4f-976d-29f16c010268/A7305547.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a4f06f7-dd4c-4e5c-9dd2-4dc266ceff2d/A7305548.jpg",
        "width": 1626,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94268642-9f6b-4e89-9619-b8af8d43b130/A7305549.jpg",
        "width": 1810,
        "height": 1080,
        "alt": "MARIA & MATTI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6bd2811e-06c5-44b9-888f-c4c88a318da3/A7305552.jpg",
        "width": 1619,
        "height": 1080,
        "alt": "MARIA & MATTI"
      }
    ]
  },
  {
    "slug": "t-k",
    "location": "Helsinki, Finland",
    "couple": "T & K",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "T & K",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/565ca0be-9573-4086-b418-d6e2f8d0fd93/2AG01171-3.jpg",
        "width": 1407,
        "height": 2130,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/221c6bb7-2dc9-486e-aa3c-d00d5b4e1a0a/2AG01185.jpg",
        "width": 1500,
        "height": 1999,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26afb38f-a9d9-41f6-906b-f6b5f3ffa34c/2AG01174-3.jpg",
        "width": 2011,
        "height": 1491,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/08d895c6-29ce-45af-87d3-df71199c292b/2AG01216-3.jpg",
        "width": 1500,
        "height": 1999,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b77f828-1b5f-41c1-a827-bb62fe626df0/2AG01292.jpg",
        "width": 1984,
        "height": 1511,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/60efc647-2a7b-455f-90c1-6c8cf53b78f8/2AG01194-3.jpg",
        "width": 1962,
        "height": 1528,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2a3189b2-ad2a-483a-866e-ed5b3963fca0/2AG01881.jpg",
        "width": 2166,
        "height": 1384,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/962d0f9d-e7d5-49bb-a62c-8f7463edddf4/2AG01610-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/29fd0a36-4525-4439-870e-f8996a6fd6d7/kurdish_5.jpg",
        "width": 1136,
        "height": 1417,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b2c614b-fe6d-4d28-b4af-6c9e4f2767a0/2AG01614-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b663ef2-56f1-4aba-9581-961a8b175681/2AG01240-3.jpg",
        "width": 2039,
        "height": 1471,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a67c633-aece-4257-a039-884d8a1a3756/2AG01247-3.jpg",
        "width": 1512,
        "height": 1983,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b626e494-cd61-4330-9d4d-408236181467/kurdish_3.jpg",
        "width": 2059,
        "height": 1417,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c66ec6b6-55e9-4472-8e8f-4f643e115e9e/2AG01249-3.jpg",
        "width": 2085,
        "height": 1438,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0826446b-42e9-4598-9e4f-bb533d9d05b1/2AG01266-3.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a6ff3e67-619f-4e34-a7c4-1833f97edc40/2AG01307.jpg",
        "width": 1376,
        "height": 2180,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22f3b1b0-9d7e-49af-b215-7e6ed6c1d188/Kurdish_02.jpg",
        "width": 2376,
        "height": 1294,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3601d244-8870-47a5-9898-92a7460f0a26/2AG01312-3.jpg",
        "width": 1491,
        "height": 2010,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/467e08cd-ad78-475a-9a63-09766290d098/2AG01346-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f6db422-f180-4498-9890-0f656c1c347d/2AG01362.jpg",
        "width": 2050,
        "height": 1463,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/87fbdb85-dbed-4e86-bcdb-e972a86ab6e4/2AG01395.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19c051fb-bc06-4014-8686-e3568e3b396d/2AG01417.jpg",
        "width": 1459,
        "height": 2055,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4be40608-23ec-4285-bc35-a50dc1598de3/2AG01927.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ac2cbea-bc57-4395-b9c4-b937dd9b8443/2AG01905.jpg",
        "width": 2067,
        "height": 1450,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7217c88b-f197-41cb-8e64-162b69ef3bad/2AG01937-3.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34507d8f-6f6d-4b22-8184-68d6419cc188/2AG02061-3.jpg",
        "width": 1394,
        "height": 2152,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9a01905a-a9e0-43f1-b39b-b1c53920e0ad/2AG01969-3.jpg",
        "width": 1496,
        "height": 2005,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22ad64b6-4661-42a4-be3d-0458997d817b/2AG01982-3.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dee5aea3-ed6d-42d7-969f-1f9ba97612db/2AG01984.jpg",
        "width": 1945,
        "height": 1542,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b7e934c5-24c6-4786-b251-7bc96117c1e2/2AG01995-3.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ea66abd5-64be-46fe-9ce0-5414abba39ac/2AG02006-3.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d23fbb1-d20d-4578-917e-1e195cb3cd74/2AG01919.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b9c821de-4455-4106-bc74-d850ffe32da4/2AG02009-3.jpg",
        "width": 1369,
        "height": 2191,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75520a9d-f913-4780-a0f1-11f771a9acc1/2AG02013.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/befd292f-cc77-46df-b358-6bb6ca837eef/2AG02013-3.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7f15c51c-4a54-4174-ab14-a24ce3ddaec1/2AG02021.jpg",
        "width": 1896,
        "height": 1581,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1d2b132-5429-4588-add1-14a74a37c518/2AG02034-3.jpg",
        "width": 2112,
        "height": 1419,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8be6f5ee-3184-468f-b0cb-d6a42fae5494/2AG02061-3.jpg",
        "width": 1394,
        "height": 2152,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aed0f84b-c8d8-405d-b357-61efb01a5030/2AG02065.jpg",
        "width": 1551,
        "height": 1933,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0225ddcd-c443-400c-875b-903bc6354da6/2AG02066.jpg",
        "width": 1515,
        "height": 1979,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dab4c90e-40e1-45a3-9916-cc52420d7e81/2AG01424.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61760975-3326-4e47-8aaa-1e1033f26976/2AG01429.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3eb641f9-af89-4d1f-bb11-70b5bc9eb321/2AG01430-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/838cac27-c605-4abb-a21a-cc367916479e/2AG01432-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/db5dd294-5edd-4ea8-9961-6e10766ba516/Kurdish_01.jpg",
        "width": 1054,
        "height": 1252,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/576e80bb-e92b-49c8-8440-c34ceedc6bda/2AG01434.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3544bcdd-d016-4569-9bea-3825f87a143d/2AG01489.jpg",
        "width": 1964,
        "height": 1527,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09659380-b1d3-4016-83db-4c49ebf271ef/2AG01434-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb7297ce-3f9c-4a30-8be3-0ad525357bab/2AG01476-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/50723a54-08bd-4b25-860e-53db2de8870a/2AG01460.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fb76c086-9281-40fa-8575-bd5ea75e2382/2AG01461-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a36dd62a-c263-4edf-a7dd-9de7b4f11261/2AG01463.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/094851bd-6b1f-4264-aaa6-94923c650ce4/2AG01448.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/765cf1ba-d4be-49eb-936c-260f8d25b35c/2AG01492-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a1b4150a-0d08-4cf8-9463-94b9624b52c2/2AG01511.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2edf3a1a-e27e-46e5-b741-9d71485c4a5b/2AG01529.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aeda2ea6-c747-4b44-9d41-3c8d6872236d/2AG01564-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5ca76ddd-909d-491c-a477-0aacbb0e702c/2AG01586.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6910a6b0-19da-49d9-97f1-3e0b83d60515/2AG01590-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d26b902-97dd-4eca-bbdb-d2730fa971a0/2AG01602-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5544aa57-6bbe-4cd3-9f85-d49b7baa2f78/2AG01619-3.jpg",
        "width": 1355,
        "height": 2214,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f88fdf18-9357-4a1f-8c19-d1254dbc4904/2AG01630.jpg",
        "width": 1364,
        "height": 2199,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8555ed53-7a61-43b9-a516-dbf26ef5f9bf/kurdish_4.jpg",
        "width": 1289,
        "height": 1486,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/967a5868-0fe5-420c-80e8-e207ff7bfd1d/2AG01638-3.jpg",
        "width": 1364,
        "height": 2199,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a329eda8-2ec4-432b-b071-b785dcd58354/2AG01647-3.jpg",
        "width": 1364,
        "height": 2199,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34247ad3-6d32-4b97-ad76-95fda0308c55/2AG01677.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0fd6a746-b475-4852-8665-13f9fcae0e23/2AG01680.jpg",
        "width": 1364,
        "height": 2199,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69e59270-4d94-4d92-9e0e-c764b0365273/2AG01709.jpg",
        "width": 2347,
        "height": 1278,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/87c53168-dabc-4585-aa02-e6b9b85c1b36/2AG01681.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6db90250-d839-464a-83a7-c683fe0c5cd3/2AG01731.jpg",
        "width": 1967,
        "height": 1524,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68bf48e1-d1d9-4b15-b652-2e6c532a6c90/2AG01740-3.jpg",
        "width": 1524,
        "height": 1967,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93a6b320-d8a6-4eee-a825-4fb00379497d/2AG01741.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bcda5e34-4608-4f5f-98f3-4a5c3c202c29/2AG01741-3.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/14425662-4db1-4375-ba02-758cf33ec9d9/2AG01745-3.jpg",
        "width": 1413,
        "height": 2121,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f53759d7-d086-4a27-8fea-0b015604a463/2AG01750.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66204346-3886-4ca9-b1df-0649c82b5e9c/2AG01759-3.jpg",
        "width": 1362,
        "height": 2201,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6402d2a8-7c4b-4a90-a327-6b9aa685ccf2/2AG01761-3.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/da9c4f12-9b88-45ba-8057-568ab60f0cf3/2AG01779-3.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/565ca0be-9573-4086-b418-d6e2f8d0fd93/2AG01171-3.jpg",
        "width": 1407,
        "height": 2130,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/221c6bb7-2dc9-486e-aa3c-d00d5b4e1a0a/2AG01185.jpg",
        "width": 1500,
        "height": 1999,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26afb38f-a9d9-41f6-906b-f6b5f3ffa34c/2AG01174-3.jpg",
        "width": 2011,
        "height": 1491,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/08d895c6-29ce-45af-87d3-df71199c292b/2AG01216-3.jpg",
        "width": 1500,
        "height": 1999,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b77f828-1b5f-41c1-a827-bb62fe626df0/2AG01292.jpg",
        "width": 1984,
        "height": 1511,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/60efc647-2a7b-455f-90c1-6c8cf53b78f8/2AG01194-3.jpg",
        "width": 1962,
        "height": 1528,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2a3189b2-ad2a-483a-866e-ed5b3963fca0/2AG01881.jpg",
        "width": 2166,
        "height": 1384,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/962d0f9d-e7d5-49bb-a62c-8f7463edddf4/2AG01610-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/29fd0a36-4525-4439-870e-f8996a6fd6d7/kurdish_5.jpg",
        "width": 1136,
        "height": 1417,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b2c614b-fe6d-4d28-b4af-6c9e4f2767a0/2AG01614-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b663ef2-56f1-4aba-9581-961a8b175681/2AG01240-3.jpg",
        "width": 2039,
        "height": 1471,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a67c633-aece-4257-a039-884d8a1a3756/2AG01247-3.jpg",
        "width": 1512,
        "height": 1983,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b626e494-cd61-4330-9d4d-408236181467/kurdish_3.jpg",
        "width": 2059,
        "height": 1417,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c66ec6b6-55e9-4472-8e8f-4f643e115e9e/2AG01249-3.jpg",
        "width": 2085,
        "height": 1438,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0826446b-42e9-4598-9e4f-bb533d9d05b1/2AG01266-3.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a6ff3e67-619f-4e34-a7c4-1833f97edc40/2AG01307.jpg",
        "width": 1376,
        "height": 2180,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22f3b1b0-9d7e-49af-b215-7e6ed6c1d188/Kurdish_02.jpg",
        "width": 2376,
        "height": 1294,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3601d244-8870-47a5-9898-92a7460f0a26/2AG01312-3.jpg",
        "width": 1491,
        "height": 2010,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/467e08cd-ad78-475a-9a63-09766290d098/2AG01346-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f6db422-f180-4498-9890-0f656c1c347d/2AG01362.jpg",
        "width": 2050,
        "height": 1463,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/87fbdb85-dbed-4e86-bcdb-e972a86ab6e4/2AG01395.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19c051fb-bc06-4014-8686-e3568e3b396d/2AG01417.jpg",
        "width": 1459,
        "height": 2055,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4be40608-23ec-4285-bc35-a50dc1598de3/2AG01927.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ac2cbea-bc57-4395-b9c4-b937dd9b8443/2AG01905.jpg",
        "width": 2067,
        "height": 1450,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7217c88b-f197-41cb-8e64-162b69ef3bad/2AG01937-3.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34507d8f-6f6d-4b22-8184-68d6419cc188/2AG02061-3.jpg",
        "width": 1394,
        "height": 2152,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9a01905a-a9e0-43f1-b39b-b1c53920e0ad/2AG01969-3.jpg",
        "width": 1496,
        "height": 2005,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22ad64b6-4661-42a4-be3d-0458997d817b/2AG01982-3.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dee5aea3-ed6d-42d7-969f-1f9ba97612db/2AG01984.jpg",
        "width": 1945,
        "height": 1542,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b7e934c5-24c6-4786-b251-7bc96117c1e2/2AG01995-3.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ea66abd5-64be-46fe-9ce0-5414abba39ac/2AG02006-3.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d23fbb1-d20d-4578-917e-1e195cb3cd74/2AG01919.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b9c821de-4455-4106-bc74-d850ffe32da4/2AG02009-3.jpg",
        "width": 1369,
        "height": 2191,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/75520a9d-f913-4780-a0f1-11f771a9acc1/2AG02013.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/befd292f-cc77-46df-b358-6bb6ca837eef/2AG02013-3.jpg",
        "width": 2005,
        "height": 1496,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7f15c51c-4a54-4174-ab14-a24ce3ddaec1/2AG02021.jpg",
        "width": 1896,
        "height": 1581,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1d2b132-5429-4588-add1-14a74a37c518/2AG02034-3.jpg",
        "width": 2112,
        "height": 1419,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8be6f5ee-3184-468f-b0cb-d6a42fae5494/2AG02061-3.jpg",
        "width": 1394,
        "height": 2152,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aed0f84b-c8d8-405d-b357-61efb01a5030/2AG02065.jpg",
        "width": 1551,
        "height": 1933,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0225ddcd-c443-400c-875b-903bc6354da6/2AG02066.jpg",
        "width": 1515,
        "height": 1979,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dab4c90e-40e1-45a3-9916-cc52420d7e81/2AG01424.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61760975-3326-4e47-8aaa-1e1033f26976/2AG01429.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3eb641f9-af89-4d1f-bb11-70b5bc9eb321/2AG01430-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/838cac27-c605-4abb-a21a-cc367916479e/2AG01432-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/db5dd294-5edd-4ea8-9961-6e10766ba516/Kurdish_01.jpg",
        "width": 1054,
        "height": 1252,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/576e80bb-e92b-49c8-8440-c34ceedc6bda/2AG01434.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3544bcdd-d016-4569-9bea-3825f87a143d/2AG01489.jpg",
        "width": 1964,
        "height": 1527,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09659380-b1d3-4016-83db-4c49ebf271ef/2AG01434-3.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb7297ce-3f9c-4a30-8be3-0ad525357bab/2AG01476-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/50723a54-08bd-4b25-860e-53db2de8870a/2AG01460.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fb76c086-9281-40fa-8575-bd5ea75e2382/2AG01461-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a36dd62a-c263-4edf-a7dd-9de7b4f11261/2AG01463.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/094851bd-6b1f-4264-aaa6-94923c650ce4/2AG01448.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/765cf1ba-d4be-49eb-936c-260f8d25b35c/2AG01492-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a1b4150a-0d08-4cf8-9463-94b9624b52c2/2AG01511.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2edf3a1a-e27e-46e5-b741-9d71485c4a5b/2AG01529.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aeda2ea6-c747-4b44-9d41-3c8d6872236d/2AG01564-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5ca76ddd-909d-491c-a477-0aacbb0e702c/2AG01586.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6910a6b0-19da-49d9-97f1-3e0b83d60515/2AG01590-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d26b902-97dd-4eca-bbdb-d2730fa971a0/2AG01602-3.jpg",
        "width": 2140,
        "height": 1401,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5544aa57-6bbe-4cd3-9f85-d49b7baa2f78/2AG01619-3.jpg",
        "width": 1355,
        "height": 2214,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f88fdf18-9357-4a1f-8c19-d1254dbc4904/2AG01630.jpg",
        "width": 1364,
        "height": 2199,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8555ed53-7a61-43b9-a516-dbf26ef5f9bf/kurdish_4.jpg",
        "width": 1289,
        "height": 1486,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/967a5868-0fe5-420c-80e8-e207ff7bfd1d/2AG01638-3.jpg",
        "width": 1364,
        "height": 2199,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a329eda8-2ec4-432b-b071-b785dcd58354/2AG01647-3.jpg",
        "width": 1364,
        "height": 2199,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34247ad3-6d32-4b97-ad76-95fda0308c55/2AG01677.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0fd6a746-b475-4852-8665-13f9fcae0e23/2AG01680.jpg",
        "width": 1364,
        "height": 2199,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69e59270-4d94-4d92-9e0e-c764b0365273/2AG01709.jpg",
        "width": 2347,
        "height": 1278,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/87c53168-dabc-4585-aa02-e6b9b85c1b36/2AG01681.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6db90250-d839-464a-83a7-c683fe0c5cd3/2AG01731.jpg",
        "width": 1967,
        "height": 1524,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68bf48e1-d1d9-4b15-b652-2e6c532a6c90/2AG01740-3.jpg",
        "width": 1524,
        "height": 1967,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/93a6b320-d8a6-4eee-a825-4fb00379497d/2AG01741.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bcda5e34-4608-4f5f-98f3-4a5c3c202c29/2AG01741-3.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/14425662-4db1-4375-ba02-758cf33ec9d9/2AG01745-3.jpg",
        "width": 1413,
        "height": 2121,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f53759d7-d086-4a27-8fea-0b015604a463/2AG01750.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66204346-3886-4ca9-b1df-0649c82b5e9c/2AG01759-3.jpg",
        "width": 1362,
        "height": 2201,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6402d2a8-7c4b-4a90-a327-6b9aa685ccf2/2AG01761-3.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/da9c4f12-9b88-45ba-8057-568ab60f0cf3/2AG01779-3.jpg",
        "width": 2201,
        "height": 1362,
        "alt": "T & K"
      }
    ]
  },
  {
    "slug": "a-j",
    "location": "Helsinki, Finland",
    "couple": "A & J",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "A & J",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/80824266-dac6-4edd-a128-7ce0aae1e385/22-08-2020-DSC_0679.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/072b72a0-e5cf-48f0-b6e7-601a76e0a02b/22-08-2020-DSC_0730.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab473ed0-0204-4c28-abb3-d1da44fcc19e/22-08-2020-DSC_0685.jpg",
        "width": 4587,
        "height": 3283,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab6f1b1e-4b81-44ea-8e7f-d4de6711ec00/22-08-2020-DSC_0700.jpg",
        "width": 2048,
        "height": 3068,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88a830a1-f71c-43a7-8154-d3d6f0c32629/DSC_1253.jpg",
        "width": 5427,
        "height": 3623,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65b4e6ba-fc2f-43c1-a3ef-fb0136861684/DSC_1748.jpg",
        "width": 2972,
        "height": 4464,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3293ed19-ac1e-4ff0-ad6e-dc5ef8dbce1d/22-08-2020-DSC_1233.jpg",
        "width": 2993,
        "height": 4484,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36286068-94f8-42c3-932b-e6c9aef1ad1c/DSC_0657.jpg",
        "width": 3843,
        "height": 5087,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd17bb30-b34a-4d1f-8a71-0467a0a1b8e2/22-08-2020-DSC_0665.jpg",
        "width": 3851,
        "height": 5545,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a225f1de-3d52-4010-868b-24b32a51d2d4/22-08-2020-DSC_0676.jpg",
        "width": 3959,
        "height": 5931,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/00bff120-08a6-4fca-83b0-1be15832202b/DSC_0801.jpg",
        "width": 3692,
        "height": 5531,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d39b1456-6c32-4c22-af41-fb453fa2171c/22-08-2020-DSC_0688.jpg",
        "width": 4016,
        "height": 5469,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c775b212-79e5-4334-a75a-6343855cf86a/DSC_1146.jpg",
        "width": 5702,
        "height": 3608,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/065b1272-b5d0-4ca8-96d7-c5eb2893117e/22-08-2020-DSC_0692.jpg",
        "width": 4016,
        "height": 5723,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0c3bd17-00a6-4bc5-aed2-622506da74ae/22-08-2020-DSC_0741.jpg",
        "width": 2048,
        "height": 3068,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2857a89d-5135-41c6-b3ad-22299535dafb/DSC_0655.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8630d979-22dd-4526-ba65-a93c392d503f/DSC_0862.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a2eda597-148b-4120-b2a0-5df87b52872a/22-08-2020-DSC_1253.jpg",
        "width": 2560,
        "height": 1709,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2ef538b7-66c6-4fc9-8384-a8cb1ec246f9/22-08-2020-DSC_0783.jpg",
        "width": 3838,
        "height": 5749,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a305818b-4dcb-48af-bb3d-f32ec38fdff2/22-08-2020-DSC_0999.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/32bbe802-7b47-4124-bcaf-c1ed26b5a0c9/22-08-2020-DSC_0741.jpg",
        "width": 2048,
        "height": 3068,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/178df9e8-567f-4d45-9d74-9c82ba83d00f/DSC_0653.jpg",
        "width": 2591,
        "height": 3750,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b9fbc7f-4fb0-4db1-b0f5-263164a987d1/DSC_0660.jpg",
        "width": 3239,
        "height": 4156,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d2789200-45c4-47dc-9a50-40c42929dc1e/DSC_0665-2-2.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c79be3fa-8473-4695-bd0d-610376a7e064/DSC_0666-2-2.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c4726bf-53a8-4971-a5d7-23d5cdb8d5cf/DSC_0651.jpg",
        "width": 3748,
        "height": 5137,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3654fbb3-6e99-4bdd-854f-33a29b955ca2/DSC_0669.jpg",
        "width": 3787,
        "height": 5634,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0228d301-e763-4d37-9d92-565a3ffb6f99/DSC_0679-2-2.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b7c086e-12f9-4730-bfcb-652852c6f41e/DSC_0682-2-2-2.jpg",
        "width": 5628,
        "height": 3757,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6441544-d021-4517-afe7-d9b4a10c71ca/DSC_0690.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b4f1906-8e8c-4d41-b978-78da787e303f/DSC_0757.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de19d401-0f60-4d56-91b7-d821ea75bb59/DSC_0774.jpg",
        "width": 4016,
        "height": 4183,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2c595c9-1957-4bae-a027-39768b4b298b/DSC_0762.jpg",
        "width": 3952,
        "height": 5926,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3737a2a3-0550-4384-8501-d0a3ecb337ab/DSC_0783-2-2-2.jpg",
        "width": 3838,
        "height": 5749,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5144dba9-3836-4918-9541-5bb648fdf0d9/DSC_1506.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f57e893-9714-4c43-b48e-dc63c41517c8/DSC_0819.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c77b869f-e2bc-44d2-922b-7ae4ce2718ee/DSC_0959.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bbc76f1-d576-4e3c-af20-6a38daaaabcc/DSC_0999.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e20faf4b-2f51-475d-84d8-6d0aa72df70e/DSC_0969.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7fbb4d42-681d-4650-867e-2d6de9d456df/DSC_0976.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/48900ba9-7b1b-40dc-ac5b-f7445a7384e3/DSC_0985.jpg",
        "width": 4016,
        "height": 5838,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1d8268a-20e8-4ff2-a89a-7c80ee1a6634/DSC_0961.jpg",
        "width": 4016,
        "height": 3139,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9641adb3-53da-47b0-adab-0f4136f074b6/DSC_1002.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a4e6f95-f880-4a03-9665-8c952125bb63/DSC_1008.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d69227d5-fc84-4084-8b79-ed71163fb243/DSC_1014.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c23a8338-dfb8-4064-ab7b-a2f07802e44b/DSC_1027.jpg",
        "width": 4774,
        "height": 3187,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/692bdc90-e3f9-4ed6-8cc3-1fdb34de75fd/DSC_1077.jpg",
        "width": 2832,
        "height": 4564,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68a3e71d-04cb-4b5e-b2de-01b399c0193c/DSC_1058.jpg",
        "width": 4016,
        "height": 4883,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6153d557-9338-443b-aca9-553c3bfc8440/DSC_1136.jpg",
        "width": 2985,
        "height": 4514,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dafafdb1-3acf-482f-9f24-d3c6a12946c4/DSC_1110.jpg",
        "width": 3246,
        "height": 3965,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77791e28-8d67-4611-8b1b-331c221d1925/DSC_1138.jpg",
        "width": 4478,
        "height": 3141,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6349d0f0-2be5-4c8a-9d88-d31556ccdfd0/DSC_1164.jpg",
        "width": 3711,
        "height": 5354,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/01110791-d8d0-4595-9aca-fbf10e8a02a9/DSC_1165.jpg",
        "width": 3141,
        "height": 1767,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebae2081-0b1c-4688-b054-cb6e5b1dcbff/DSC_1170.jpg",
        "width": 4648,
        "height": 3030,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/21889e5f-838c-4784-be46-06b13f03621f/DSC_1199.jpg",
        "width": 2743,
        "height": 2260,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/322bce41-f739-4420-8717-d36136c44d1d/DSC_1216.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/621a6287-6511-4091-bd59-d7ff24f75f3d/DSC_1242.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5a50c4ec-c09a-436c-a70b-2982b407884f/DSC_1221.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/298967ef-07ee-4dc1-b9cf-6eaf6f0cc859/DSC_1273.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a5873711-9a14-42e1-a3c9-43648ba40fa1/DSC_1281.jpg",
        "width": 4016,
        "height": 5418,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d27ce0f0-2acc-4e24-a9d7-029e56624c83/DSC_1282.jpg",
        "width": 4016,
        "height": 5863,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3ac9e73-ef1f-4009-a124-a35b1d9e2a5c/DSC_1283.jpg",
        "width": 4809,
        "height": 3210,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a8eb3f7d-a4e2-43a5-8114-3aaaee9aca0d/DSC_1286.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ac89cbef-5c46-4135-90a6-e5c10bcae2e4/DSC_1362.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4932eb3-9364-4c3b-8c88-796f3dcd93be/DSC_1376.jpg",
        "width": 3239,
        "height": 5060,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/581764cf-d011-4836-8fe9-0516a4a6012c/DSC_1401.jpg",
        "width": 3609,
        "height": 4348,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d2f6b0f7-568a-4623-981f-6b4bf0ef6651/DSC_1422.jpg",
        "width": 5149,
        "height": 3149,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66b7fd8d-f383-4898-af1d-0ec98fc9c350/DSC_1434.jpg",
        "width": 3821,
        "height": 5456,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62dd7349-9441-48f6-8e98-987b7bb0bcf7/DSC_1447.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f7385043-49d9-4cf2-b76c-54c4cb5c7ffe/DSC_1458.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9872084-26fe-44d6-9ba1-64f39678ed0e/DSC_1461.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d420c1cb-c5cc-469d-a895-ec6f289537d7/DSC_1526.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1eb562b7-36f4-44b0-83ad-4dcd3251dc97/DSC_1531.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a8b0ba29-58a6-4d92-81a1-51b4b8c949ab/DSC_1542.jpg",
        "width": 3553,
        "height": 4906,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2c0c5ba-b58e-4e29-b656-84581b8ee030/DSC_1544.jpg",
        "width": 4016,
        "height": 5609,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5a414f63-cb5f-4aa4-b43a-2c2cdefa6490/DSC_1635.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8db8731e-abe0-40b1-a15b-d36e3c9b7db1/DSC_1608.jpg",
        "width": 4016,
        "height": 3470,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/466d16d8-f890-4780-8119-a95f8145e7f6/DSC_1642.jpg",
        "width": 3914,
        "height": 5570,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4af60ec5-cc66-4edc-9ed1-598d4f4a5f44/DSC_1698.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/779b11a3-8a03-44cf-8c88-934984b85462/DSC_1711.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/11668154-80c2-497b-9231-4698fea5521d/DSC_1721.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1666456360772-SBPCMY1DG2XFEOYNG7EA/DSC_1744.jpg",
        "width": 2500,
        "height": 3568,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/80824266-dac6-4edd-a128-7ce0aae1e385/22-08-2020-DSC_0679.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/072b72a0-e5cf-48f0-b6e7-601a76e0a02b/22-08-2020-DSC_0730.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab473ed0-0204-4c28-abb3-d1da44fcc19e/22-08-2020-DSC_0685.jpg",
        "width": 4587,
        "height": 3283,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab6f1b1e-4b81-44ea-8e7f-d4de6711ec00/22-08-2020-DSC_0700.jpg",
        "width": 2048,
        "height": 3068,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88a830a1-f71c-43a7-8154-d3d6f0c32629/DSC_1253.jpg",
        "width": 5427,
        "height": 3623,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65b4e6ba-fc2f-43c1-a3ef-fb0136861684/DSC_1748.jpg",
        "width": 2972,
        "height": 4464,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3293ed19-ac1e-4ff0-ad6e-dc5ef8dbce1d/22-08-2020-DSC_1233.jpg",
        "width": 2993,
        "height": 4484,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36286068-94f8-42c3-932b-e6c9aef1ad1c/DSC_0657.jpg",
        "width": 3843,
        "height": 5087,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd17bb30-b34a-4d1f-8a71-0467a0a1b8e2/22-08-2020-DSC_0665.jpg",
        "width": 3851,
        "height": 5545,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a225f1de-3d52-4010-868b-24b32a51d2d4/22-08-2020-DSC_0676.jpg",
        "width": 3959,
        "height": 5931,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/00bff120-08a6-4fca-83b0-1be15832202b/DSC_0801.jpg",
        "width": 3692,
        "height": 5531,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d39b1456-6c32-4c22-af41-fb453fa2171c/22-08-2020-DSC_0688.jpg",
        "width": 4016,
        "height": 5469,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c775b212-79e5-4334-a75a-6343855cf86a/DSC_1146.jpg",
        "width": 5702,
        "height": 3608,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/065b1272-b5d0-4ca8-96d7-c5eb2893117e/22-08-2020-DSC_0692.jpg",
        "width": 4016,
        "height": 5723,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0c3bd17-00a6-4bc5-aed2-622506da74ae/22-08-2020-DSC_0741.jpg",
        "width": 2048,
        "height": 3068,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2857a89d-5135-41c6-b3ad-22299535dafb/DSC_0655.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8630d979-22dd-4526-ba65-a93c392d503f/DSC_0862.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a2eda597-148b-4120-b2a0-5df87b52872a/22-08-2020-DSC_1253.jpg",
        "width": 2560,
        "height": 1709,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2ef538b7-66c6-4fc9-8384-a8cb1ec246f9/22-08-2020-DSC_0783.jpg",
        "width": 3838,
        "height": 5749,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a305818b-4dcb-48af-bb3d-f32ec38fdff2/22-08-2020-DSC_0999.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/32bbe802-7b47-4124-bcaf-c1ed26b5a0c9/22-08-2020-DSC_0741.jpg",
        "width": 2048,
        "height": 3068,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/178df9e8-567f-4d45-9d74-9c82ba83d00f/DSC_0653.jpg",
        "width": 2591,
        "height": 3750,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b9fbc7f-4fb0-4db1-b0f5-263164a987d1/DSC_0660.jpg",
        "width": 3239,
        "height": 4156,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d2789200-45c4-47dc-9a50-40c42929dc1e/DSC_0665-2-2.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c79be3fa-8473-4695-bd0d-610376a7e064/DSC_0666-2-2.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c4726bf-53a8-4971-a5d7-23d5cdb8d5cf/DSC_0651.jpg",
        "width": 3748,
        "height": 5137,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3654fbb3-6e99-4bdd-854f-33a29b955ca2/DSC_0669.jpg",
        "width": 3787,
        "height": 5634,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0228d301-e763-4d37-9d92-565a3ffb6f99/DSC_0679-2-2.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b7c086e-12f9-4730-bfcb-652852c6f41e/DSC_0682-2-2-2.jpg",
        "width": 5628,
        "height": 3757,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6441544-d021-4517-afe7-d9b4a10c71ca/DSC_0690.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b4f1906-8e8c-4d41-b978-78da787e303f/DSC_0757.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de19d401-0f60-4d56-91b7-d821ea75bb59/DSC_0774.jpg",
        "width": 4016,
        "height": 4183,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2c595c9-1957-4bae-a027-39768b4b298b/DSC_0762.jpg",
        "width": 3952,
        "height": 5926,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3737a2a3-0550-4384-8501-d0a3ecb337ab/DSC_0783-2-2-2.jpg",
        "width": 3838,
        "height": 5749,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5144dba9-3836-4918-9541-5bb648fdf0d9/DSC_1506.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f57e893-9714-4c43-b48e-dc63c41517c8/DSC_0819.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c77b869f-e2bc-44d2-922b-7ae4ce2718ee/DSC_0959.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bbc76f1-d576-4e3c-af20-6a38daaaabcc/DSC_0999.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e20faf4b-2f51-475d-84d8-6d0aa72df70e/DSC_0969.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7fbb4d42-681d-4650-867e-2d6de9d456df/DSC_0976.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/48900ba9-7b1b-40dc-ac5b-f7445a7384e3/DSC_0985.jpg",
        "width": 4016,
        "height": 5838,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1d8268a-20e8-4ff2-a89a-7c80ee1a6634/DSC_0961.jpg",
        "width": 4016,
        "height": 3139,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9641adb3-53da-47b0-adab-0f4136f074b6/DSC_1002.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a4e6f95-f880-4a03-9665-8c952125bb63/DSC_1008.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d69227d5-fc84-4084-8b79-ed71163fb243/DSC_1014.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c23a8338-dfb8-4064-ab7b-a2f07802e44b/DSC_1027.jpg",
        "width": 4774,
        "height": 3187,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/692bdc90-e3f9-4ed6-8cc3-1fdb34de75fd/DSC_1077.jpg",
        "width": 2832,
        "height": 4564,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68a3e71d-04cb-4b5e-b2de-01b399c0193c/DSC_1058.jpg",
        "width": 4016,
        "height": 4883,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6153d557-9338-443b-aca9-553c3bfc8440/DSC_1136.jpg",
        "width": 2985,
        "height": 4514,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dafafdb1-3acf-482f-9f24-d3c6a12946c4/DSC_1110.jpg",
        "width": 3246,
        "height": 3965,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77791e28-8d67-4611-8b1b-331c221d1925/DSC_1138.jpg",
        "width": 4478,
        "height": 3141,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6349d0f0-2be5-4c8a-9d88-d31556ccdfd0/DSC_1164.jpg",
        "width": 3711,
        "height": 5354,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/01110791-d8d0-4595-9aca-fbf10e8a02a9/DSC_1165.jpg",
        "width": 3141,
        "height": 1767,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebae2081-0b1c-4688-b054-cb6e5b1dcbff/DSC_1170.jpg",
        "width": 4648,
        "height": 3030,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/21889e5f-838c-4784-be46-06b13f03621f/DSC_1199.jpg",
        "width": 2743,
        "height": 2260,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/322bce41-f739-4420-8717-d36136c44d1d/DSC_1216.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/621a6287-6511-4091-bd59-d7ff24f75f3d/DSC_1242.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5a50c4ec-c09a-436c-a70b-2982b407884f/DSC_1221.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/298967ef-07ee-4dc1-b9cf-6eaf6f0cc859/DSC_1273.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a5873711-9a14-42e1-a3c9-43648ba40fa1/DSC_1281.jpg",
        "width": 4016,
        "height": 5418,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d27ce0f0-2acc-4e24-a9d7-029e56624c83/DSC_1282.jpg",
        "width": 4016,
        "height": 5863,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a3ac9e73-ef1f-4009-a124-a35b1d9e2a5c/DSC_1283.jpg",
        "width": 4809,
        "height": 3210,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a8eb3f7d-a4e2-43a5-8114-3aaaee9aca0d/DSC_1286.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ac89cbef-5c46-4135-90a6-e5c10bcae2e4/DSC_1362.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4932eb3-9364-4c3b-8c88-796f3dcd93be/DSC_1376.jpg",
        "width": 3239,
        "height": 5060,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/581764cf-d011-4836-8fe9-0516a4a6012c/DSC_1401.jpg",
        "width": 3609,
        "height": 4348,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d2f6b0f7-568a-4623-981f-6b4bf0ef6651/DSC_1422.jpg",
        "width": 5149,
        "height": 3149,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66b7fd8d-f383-4898-af1d-0ec98fc9c350/DSC_1434.jpg",
        "width": 3821,
        "height": 5456,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62dd7349-9441-48f6-8e98-987b7bb0bcf7/DSC_1447.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f7385043-49d9-4cf2-b76c-54c4cb5c7ffe/DSC_1458.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9872084-26fe-44d6-9ba1-64f39678ed0e/DSC_1461.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d420c1cb-c5cc-469d-a895-ec6f289537d7/DSC_1526.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1eb562b7-36f4-44b0-83ad-4dcd3251dc97/DSC_1531.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a8b0ba29-58a6-4d92-81a1-51b4b8c949ab/DSC_1542.jpg",
        "width": 3553,
        "height": 4906,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2c0c5ba-b58e-4e29-b656-84581b8ee030/DSC_1544.jpg",
        "width": 4016,
        "height": 5609,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5a414f63-cb5f-4aa4-b43a-2c2cdefa6490/DSC_1635.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8db8731e-abe0-40b1-a15b-d36e3c9b7db1/DSC_1608.jpg",
        "width": 4016,
        "height": 3470,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/466d16d8-f890-4780-8119-a95f8145e7f6/DSC_1642.jpg",
        "width": 3914,
        "height": 5570,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4af60ec5-cc66-4edc-9ed1-598d4f4a5f44/DSC_1698.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/779b11a3-8a03-44cf-8c88-934984b85462/DSC_1711.jpg",
        "width": 4016,
        "height": 6016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/11668154-80c2-497b-9231-4698fea5521d/DSC_1721.jpg",
        "width": 6016,
        "height": 4016,
        "alt": "A & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1666456360772-SBPCMY1DG2XFEOYNG7EA/DSC_1744.jpg",
        "width": 2500,
        "height": 3568,
        "alt": "A & J"
      }
    ]
  },
  {
    "slug": "karoliina-jan",
    "location": "Helsinki, Finland",
    "couple": "Karoliina & Jan",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "KAROLIINA & JAN",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0852b73f-84c5-4c86-963b-324da9c0c15b/SAI03280.jpg",
        "width": 2007,
        "height": 1494,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34775b7d-f007-49fb-b853-346f80be8f30/SAI03609.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f74ba8fc-227a-4987-aab3-701fda42364a/Firefly+20230929233140.png",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a655a99-5212-4446-b5aa-0f20090d7c49/SAI03757.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d81154e9-3727-461d-84ed-065e0f93f722/Firefly+20230929212948.png",
        "width": 1499,
        "height": 2001,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0ab6fd4-e5ca-44c1-b9aa-7c66af48db13/SAI03244.jpg",
        "width": 2354,
        "height": 1273,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb45ce62-649c-4843-b19c-3da6baed178d/SAI03184-2.jpg",
        "width": 2132,
        "height": 1407,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5dc3fd8e-078b-49fe-83b7-d7f6f828cf79/SAI03253.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3dbebfae-13dc-4923-8d8e-3029f9bce8ba/SAI03236.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1055067-7df0-4c13-bd53-82968d1f13b8/SAI03241.jpg",
        "width": 2106,
        "height": 1424,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ba10676f-816b-4279-9e0b-3796b472e770/SAI03239.jpg",
        "width": 2089,
        "height": 1436,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e5ceabd5-60a0-4b5b-be7d-aa8237adc48b/SAI03255.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2d4cb428-a52d-4e5b-8ef5-3bec6ac15a9b/SAI03256.jpg",
        "width": 2070,
        "height": 1449,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0981a45b-86eb-4d52-a81f-3c97c07b313b/SAI03245.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9fb6f08-d00e-4037-b9ad-d5e9f80cfc37/SAI03362.jpg",
        "width": 1986,
        "height": 1509,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0282d57-92cf-4787-b77e-e4e6b71f3d3c/DSC05528.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d40e2ec-eebf-459f-9372-16dbf5d138a2/DSC05546.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5755671d-9604-43c0-8b83-ca8d88276ee6/SAI03257.jpg",
        "width": 1865,
        "height": 1607,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f05142c-5677-41b2-b6a1-ee6edcfb00f5/DSC05549.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5ed6e8cb-8f09-4a3a-9c55-4f382089327c/DSC05553.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6dd352e6-1a35-430b-936f-938579d50685/DSC05564.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1405e045-3b3b-4c1a-a409-a4669e9af182/DSC05559.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/227d9f71-0707-40ca-9f62-3c3dcb4cb5b5/DSC05564.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f7962da7-7efb-489d-ad4f-df74d144abc2/DSC05566.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/174436d7-4d58-420d-8ed0-af61ed789854/DSC05592.jpg",
        "width": 2186,
        "height": 1372,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee60beee-2e04-4bf7-bd3a-2a57058d4acd/DSC05569.jpg",
        "width": 2041,
        "height": 1469,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6e6ed2e1-0bb9-4e38-8bbe-3a767167c453/DSC05581.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62c267d3-195c-4d03-b1e1-a24e42872846/DSC05601.jpg",
        "width": 2253,
        "height": 1330,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ba6982c5-8d63-4de2-a81f-1cfe05ec2a3b/SAI03179-2.jpg",
        "width": 2126,
        "height": 1410,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3dc1fd00-f4e9-4e78-965b-6c445d325b21/DSC05556.jpg",
        "width": 2090,
        "height": 1434,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e3d4e8d-5edb-4e6b-90e0-40cb1f575814/SAI03182-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c78cdae2-c7ea-4ce3-8675-94fb3d211444/SAI03230.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8327c1d-b0f7-4663-a32d-5417b14305a3/SAI03224.jpg",
        "width": 1984,
        "height": 1511,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e1a46db9-cdc9-4381-aed7-c24dc6173520/SAI03304.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e58502bf-10da-42bf-b021-14f2ec2c2b99/SAI03282.jpg",
        "width": 2035,
        "height": 1473,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2485b9d6-eccf-4624-911c-cc1c7391f9c6/SAI03284.jpg",
        "width": 1425,
        "height": 2104,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2cdf2988-0086-4923-a1c9-9a06fbcb2da3/SAI03303.jpg",
        "width": 2060,
        "height": 1455,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7dc19c8-302e-4dfe-9916-363c317e06f2/SAI03285.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0638fee-7bec-4c8f-8778-0b1d332c3581/SAI03306.jpg",
        "width": 2118,
        "height": 1415,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d818e49a-38c4-40b2-9b28-9305b614dcde/SAI03296.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19d3b1c4-7921-4f5d-bb9c-486e4915ba1e/SAI03311.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f14ceb4-3b60-4d06-b5b1-f40bc465c109/SAI03317.jpg",
        "width": 1401,
        "height": 2141,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6fa6bdde-13a5-4bf3-8a96-9c5040a966d0/SAI03316.jpg",
        "width": 2109,
        "height": 1422,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/055c4989-5175-48a5-960f-05bd758a3a83/SAI03321.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6841f68-9287-4866-802c-ce107ffc7a98/SAI03322.jpg",
        "width": 1499,
        "height": 2000,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a6ee1f6-919d-48bb-a213-e69e01d7676d/SAI03323.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4b979a54-75c9-4f89-a87e-1f88f660ba05/SAI03335.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1eadf98b-7473-44ba-91ed-c24a5ca36c91/SAI03340.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7d0e3c4-023a-4b81-8aeb-dd4ed47cd355/SAI03346.jpg",
        "width": 1418,
        "height": 2115,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4abe232-e5b3-4320-aff9-eda69a761995/SAI03370.jpg",
        "width": 1556,
        "height": 1927,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76ee85bb-3edb-4b73-be03-28cbaba798a9/SAI03357.jpg",
        "width": 1992,
        "height": 1506,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3cd824ce-da90-43ba-92f4-318b96f31056/SAI03371.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/464e77e0-03b3-40cc-b353-214963867314/SAI03372.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65fd3075-efdd-4e17-a033-3fe95587d6d4/SAI03395.jpg",
        "width": 1546,
        "height": 1939,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/427ce55c-3ad5-4442-8653-81f2b1ed0125/SAI03388.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b875560b-9f37-47cd-b406-2419f05ab388/SAI03404.jpg",
        "width": 1448,
        "height": 2071,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b312e8c3-73da-459e-98ef-57da9a8f899a/SAI03400.jpg",
        "width": 1474,
        "height": 2033,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b86498b1-c030-4d0b-853d-8e89c2bd1ee7/SAI03268.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5dd0e04c-aa38-4f6a-b887-a5762ec6304d/SAI03408.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ff42dc2-d12e-47e2-865a-203688ca5aa1/SAI03411.jpg",
        "width": 1459,
        "height": 2056,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5de61fec-50d7-47d6-b3c5-8ed4aafe2990/SAI03420.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c522e15-d72d-4ad5-9c4a-a02e372a969f/SAI03423.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69c94881-517a-4b62-a741-bdd1e80f1a5e/SAI03415.jpg",
        "width": 1363,
        "height": 2200,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d4a247fa-3f7f-4da4-bb5c-c718f31285d5/DSC05599.jpg",
        "width": 2277,
        "height": 1316,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ae06266c-d266-461e-bec4-99f6640012f1/SAI03454.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f3dbd6f-88cc-4cfb-a6f5-76b399a38be2/SAI03463.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/01bdc96d-ecfd-4209-b10e-abb01512a2cc/SAI03464.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79fcf7d9-58f2-4eba-9848-1169281df629/SAI03467.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a67249d4-3ccd-4fe0-b524-9c5e4e032936/SAI03474.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b91e61fe-f6c2-490a-b9ad-9307a4525f13/SAI03469.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/534d9911-0d00-43fd-b860-4af01e0257cc/SAI03475.jpg",
        "width": 1374,
        "height": 2181,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc4fd3f9-0fe8-4652-b9d4-6175007e2f3d/SAI03472.jpg",
        "width": 1669,
        "height": 1797,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61fd8676-be85-4150-8b14-27f86daa8195/SAI03483.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/df662089-7484-44c2-a817-b871e71d97bb/SAI03484.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2845dd0a-7b65-4d59-9c36-dbd81e5ce1f6/SAI03492.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7f34e130-fa29-42a8-933f-702609a76473/SAI03504.jpg",
        "width": 1513,
        "height": 1982,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b3e02c6a-755e-4bb2-9d72-149d85179126/SAI03509.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c975b360-9a4b-4d98-b2f7-e89d0c059b7c/SAI03518.jpg",
        "width": 1408,
        "height": 2129,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9770f116-2b37-4448-9955-6757217ecfa3/SAI03521.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0dea7f6-cdeb-44c6-9b8e-6eae4ec0a9aa/SAI03525.jpg",
        "width": 1536,
        "height": 1953,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab1b7d78-4005-4e73-a758-f54c452c8f72/SAI03560.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/914ddf74-df86-4440-89a0-ffcc1662b072/SAI03561.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/596a277c-93df-4d7b-914d-16d846b356dd/SAI03566.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/df28e112-71ce-4e67-b4d2-da31ef802689/SAI03571.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f9991b46-ea0b-4aa2-86c5-7d22d3734f52/SAI03221.jpg",
        "width": 2102,
        "height": 1427,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c7bada5-d94d-4291-905f-fe0d5d226654/SAI03582.jpg",
        "width": 2023,
        "height": 1482,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/71f4db95-b467-477e-8250-92dbe8c62932/SAI03605.jpg",
        "width": 2050,
        "height": 1462,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1d28fc50-eaed-4359-973d-68fac8aa75d9/SAI03619.jpg",
        "width": 2047,
        "height": 1465,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5163667c-ef30-4961-8ed7-c38dc0bf69ff/SAI03620.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94b75f44-09c3-44f7-9cce-06f330f3fd6a/SAI03622.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b426fc3-4c35-4b04-b28b-e3a3f4d32a1d/SAI03623.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a387716b-ea07-437b-bc12-97cfacac7c05/SAI03624.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2968b52c-08fd-46b1-8ac5-b044b0793ecc/SAI03626.jpg",
        "width": 2452,
        "height": 1223,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b36c5894-38e3-4cb8-9596-61a4fd4ac7e5/SAI03635.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a1516dc-b419-4db8-a42b-d8f0afd70096/SAI03651.jpg",
        "width": 2008,
        "height": 1493,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55533833-cb4b-48cd-9660-6ed85ad40b45/SAI03675.jpg",
        "width": 1974,
        "height": 1518,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8ef8c88a-fd58-4481-9c3f-fa2175e27481/SAI03693.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/acd66191-be83-4ab0-9363-2e3981dbb95a/SAI03697.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ed042e89-69dd-4c38-9cab-c8fecac5ea47/SAI03702.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65da8382-5b54-4c65-ac4c-7da43dc40673/SAI03709.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5fcec7e9-4c6c-4ccc-8214-1ab995a8dac7/SAI03710.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5d04599-aa86-4e8b-b52d-55d701c58417/SAI03715.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06a2ad6f-ef74-4bc0-97d5-252c4e167380/SAI03726.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ce529f7-8e29-4555-8e59-936704f4efb1/SAI03729.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0368c01c-0fcd-4b5e-b087-afa70e0ced55/SAI03734.jpg",
        "width": 1686,
        "height": 1778,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16111085-7a79-4b24-b29a-47f20874f6e8/SAI03741.jpg",
        "width": 1433,
        "height": 2093,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2377efaa-f664-41c0-9c23-5aaa5268a49a/SAI03742.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9eef4cdf-3ea9-4c4c-85a8-9b5cc3a7c64f/SAI03744.jpg",
        "width": 1884,
        "height": 1592,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7efa0095-81d9-4ba8-baf2-712e715c0d3b/SAI03747.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c6e4a4b4-7f07-45d6-bc57-42bc79e9c3d5/SAI03749.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/207b0fce-c0ca-4a46-a0a1-1dfc6dd56fd8/SAI03753.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f46588c-2cf9-4883-9479-8d8c14f0fff2/SAI03756.jpg",
        "width": 1482,
        "height": 2022,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0b542fe6-8cb5-482a-a1de-f0d3b9ae7d9e/SAI03760.jpg",
        "width": 1967,
        "height": 1525,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7e40152-2333-49c9-9f30-936b89771c04/SAI03763.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ccfadab6-dd0b-4c2a-9a4a-9ec1dff6e5eb/SAI03770.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90588e3b-d2bd-41f5-926e-e07786070821/SAI03778.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4bcfc748-28f4-4873-af83-b1964b25cf1d/SAI03799.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34fa9347-77ac-4962-a346-0686589c6e77/SAI03812.jpg",
        "width": 2175,
        "height": 1379,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fe66dec1-695f-41e5-a830-a221e6b3b5f9/SAI03822.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc1be431-4e09-4c62-8f1e-e5885387c253/SAI03834.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d748b64f-d28d-4208-ad22-d170bb44f0ab/SAI03858.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5cd9c7b3-80db-4f8f-b4aa-dbba1a8b24ef/SAI03877.jpg",
        "width": 1744,
        "height": 1719,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bf063cb-d020-4fbf-ae6f-b24b54a21de1/SAI03891.jpg",
        "width": 2070,
        "height": 1448,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/935cc77c-f04f-4a7c-90f9-880c04f962aa/SAI03892.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/073e5fc1-e4de-473c-9d99-e5d9398ffcb8/SAI03898-Enhanced-NR.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89792b94-d46f-4f37-9d52-09a26b11d059/SAI03905.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92ac385c-1595-496d-a9ec-bc834e1c67d4/SAI03935.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/979172bb-f608-44c9-8d64-911820a3cd6c/SAI03937.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ae8c9c6-6fee-452e-951a-91540081269f/Firefly+20230929213950.png",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0852b73f-84c5-4c86-963b-324da9c0c15b/SAI03280.jpg",
        "width": 2007,
        "height": 1494,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34775b7d-f007-49fb-b853-346f80be8f30/SAI03609.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f74ba8fc-227a-4987-aab3-701fda42364a/Firefly+20230929233140.png",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a655a99-5212-4446-b5aa-0f20090d7c49/SAI03757.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d81154e9-3727-461d-84ed-065e0f93f722/Firefly+20230929212948.png",
        "width": 1499,
        "height": 2001,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0ab6fd4-e5ca-44c1-b9aa-7c66af48db13/SAI03244.jpg",
        "width": 2354,
        "height": 1273,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb45ce62-649c-4843-b19c-3da6baed178d/SAI03184-2.jpg",
        "width": 2132,
        "height": 1407,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5dc3fd8e-078b-49fe-83b7-d7f6f828cf79/SAI03253.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3dbebfae-13dc-4923-8d8e-3029f9bce8ba/SAI03236.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1055067-7df0-4c13-bd53-82968d1f13b8/SAI03241.jpg",
        "width": 2106,
        "height": 1424,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ba10676f-816b-4279-9e0b-3796b472e770/SAI03239.jpg",
        "width": 2089,
        "height": 1436,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e5ceabd5-60a0-4b5b-be7d-aa8237adc48b/SAI03255.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2d4cb428-a52d-4e5b-8ef5-3bec6ac15a9b/SAI03256.jpg",
        "width": 2070,
        "height": 1449,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0981a45b-86eb-4d52-a81f-3c97c07b313b/SAI03245.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9fb6f08-d00e-4037-b9ad-d5e9f80cfc37/SAI03362.jpg",
        "width": 1986,
        "height": 1509,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0282d57-92cf-4787-b77e-e4e6b71f3d3c/DSC05528.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d40e2ec-eebf-459f-9372-16dbf5d138a2/DSC05546.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5755671d-9604-43c0-8b83-ca8d88276ee6/SAI03257.jpg",
        "width": 1865,
        "height": 1607,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f05142c-5677-41b2-b6a1-ee6edcfb00f5/DSC05549.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5ed6e8cb-8f09-4a3a-9c55-4f382089327c/DSC05553.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6dd352e6-1a35-430b-936f-938579d50685/DSC05564.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1405e045-3b3b-4c1a-a409-a4669e9af182/DSC05559.jpg",
        "width": 1401,
        "height": 2140,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/227d9f71-0707-40ca-9f62-3c3dcb4cb5b5/DSC05564.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f7962da7-7efb-489d-ad4f-df74d144abc2/DSC05566.jpg",
        "width": 1414,
        "height": 2121,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/174436d7-4d58-420d-8ed0-af61ed789854/DSC05592.jpg",
        "width": 2186,
        "height": 1372,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee60beee-2e04-4bf7-bd3a-2a57058d4acd/DSC05569.jpg",
        "width": 2041,
        "height": 1469,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6e6ed2e1-0bb9-4e38-8bbe-3a767167c453/DSC05581.jpg",
        "width": 2121,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62c267d3-195c-4d03-b1e1-a24e42872846/DSC05601.jpg",
        "width": 2253,
        "height": 1330,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ba6982c5-8d63-4de2-a81f-1cfe05ec2a3b/SAI03179-2.jpg",
        "width": 2126,
        "height": 1410,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3dc1fd00-f4e9-4e78-965b-6c445d325b21/DSC05556.jpg",
        "width": 2090,
        "height": 1434,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e3d4e8d-5edb-4e6b-90e0-40cb1f575814/SAI03182-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c78cdae2-c7ea-4ce3-8675-94fb3d211444/SAI03230.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8327c1d-b0f7-4663-a32d-5417b14305a3/SAI03224.jpg",
        "width": 1984,
        "height": 1511,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e1a46db9-cdc9-4381-aed7-c24dc6173520/SAI03304.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e58502bf-10da-42bf-b021-14f2ec2c2b99/SAI03282.jpg",
        "width": 2035,
        "height": 1473,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2485b9d6-eccf-4624-911c-cc1c7391f9c6/SAI03284.jpg",
        "width": 1425,
        "height": 2104,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2cdf2988-0086-4923-a1c9-9a06fbcb2da3/SAI03303.jpg",
        "width": 2060,
        "height": 1455,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7dc19c8-302e-4dfe-9916-363c317e06f2/SAI03285.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0638fee-7bec-4c8f-8778-0b1d332c3581/SAI03306.jpg",
        "width": 2118,
        "height": 1415,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d818e49a-38c4-40b2-9b28-9305b614dcde/SAI03296.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19d3b1c4-7921-4f5d-bb9c-486e4915ba1e/SAI03311.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f14ceb4-3b60-4d06-b5b1-f40bc465c109/SAI03317.jpg",
        "width": 1401,
        "height": 2141,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6fa6bdde-13a5-4bf3-8a96-9c5040a966d0/SAI03316.jpg",
        "width": 2109,
        "height": 1422,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/055c4989-5175-48a5-960f-05bd758a3a83/SAI03321.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f6841f68-9287-4866-802c-ce107ffc7a98/SAI03322.jpg",
        "width": 1499,
        "height": 2000,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a6ee1f6-919d-48bb-a213-e69e01d7676d/SAI03323.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4b979a54-75c9-4f89-a87e-1f88f660ba05/SAI03335.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1eadf98b-7473-44ba-91ed-c24a5ca36c91/SAI03340.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7d0e3c4-023a-4b81-8aeb-dd4ed47cd355/SAI03346.jpg",
        "width": 1418,
        "height": 2115,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c4abe232-e5b3-4320-aff9-eda69a761995/SAI03370.jpg",
        "width": 1556,
        "height": 1927,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76ee85bb-3edb-4b73-be03-28cbaba798a9/SAI03357.jpg",
        "width": 1992,
        "height": 1506,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3cd824ce-da90-43ba-92f4-318b96f31056/SAI03371.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/464e77e0-03b3-40cc-b353-214963867314/SAI03372.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65fd3075-efdd-4e17-a033-3fe95587d6d4/SAI03395.jpg",
        "width": 1546,
        "height": 1939,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/427ce55c-3ad5-4442-8653-81f2b1ed0125/SAI03388.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b875560b-9f37-47cd-b406-2419f05ab388/SAI03404.jpg",
        "width": 1448,
        "height": 2071,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b312e8c3-73da-459e-98ef-57da9a8f899a/SAI03400.jpg",
        "width": 1474,
        "height": 2033,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b86498b1-c030-4d0b-853d-8e89c2bd1ee7/SAI03268.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5dd0e04c-aa38-4f6a-b887-a5762ec6304d/SAI03408.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ff42dc2-d12e-47e2-865a-203688ca5aa1/SAI03411.jpg",
        "width": 1459,
        "height": 2056,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5de61fec-50d7-47d6-b3c5-8ed4aafe2990/SAI03420.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c522e15-d72d-4ad5-9c4a-a02e372a969f/SAI03423.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69c94881-517a-4b62-a741-bdd1e80f1a5e/SAI03415.jpg",
        "width": 1363,
        "height": 2200,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d4a247fa-3f7f-4da4-bb5c-c718f31285d5/DSC05599.jpg",
        "width": 2277,
        "height": 1316,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ae06266c-d266-461e-bec4-99f6640012f1/SAI03454.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f3dbd6f-88cc-4cfb-a6f5-76b399a38be2/SAI03463.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/01bdc96d-ecfd-4209-b10e-abb01512a2cc/SAI03464.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/79fcf7d9-58f2-4eba-9848-1169281df629/SAI03467.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a67249d4-3ccd-4fe0-b524-9c5e4e032936/SAI03474.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b91e61fe-f6c2-490a-b9ad-9307a4525f13/SAI03469.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/534d9911-0d00-43fd-b860-4af01e0257cc/SAI03475.jpg",
        "width": 1374,
        "height": 2181,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc4fd3f9-0fe8-4652-b9d4-6175007e2f3d/SAI03472.jpg",
        "width": 1669,
        "height": 1797,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61fd8676-be85-4150-8b14-27f86daa8195/SAI03483.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/df662089-7484-44c2-a817-b871e71d97bb/SAI03484.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2845dd0a-7b65-4d59-9c36-dbd81e5ce1f6/SAI03492.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7f34e130-fa29-42a8-933f-702609a76473/SAI03504.jpg",
        "width": 1513,
        "height": 1982,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b3e02c6a-755e-4bb2-9d72-149d85179126/SAI03509.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c975b360-9a4b-4d98-b2f7-e89d0c059b7c/SAI03518.jpg",
        "width": 1408,
        "height": 2129,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9770f116-2b37-4448-9955-6757217ecfa3/SAI03521.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d0dea7f6-cdeb-44c6-9b8e-6eae4ec0a9aa/SAI03525.jpg",
        "width": 1536,
        "height": 1953,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab1b7d78-4005-4e73-a758-f54c452c8f72/SAI03560.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/914ddf74-df86-4440-89a0-ffcc1662b072/SAI03561.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/596a277c-93df-4d7b-914d-16d846b356dd/SAI03566.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/df28e112-71ce-4e67-b4d2-da31ef802689/SAI03571.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f9991b46-ea0b-4aa2-86c5-7d22d3734f52/SAI03221.jpg",
        "width": 2102,
        "height": 1427,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c7bada5-d94d-4291-905f-fe0d5d226654/SAI03582.jpg",
        "width": 2023,
        "height": 1482,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/71f4db95-b467-477e-8250-92dbe8c62932/SAI03605.jpg",
        "width": 2050,
        "height": 1462,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1d28fc50-eaed-4359-973d-68fac8aa75d9/SAI03619.jpg",
        "width": 2047,
        "height": 1465,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5163667c-ef30-4961-8ed7-c38dc0bf69ff/SAI03620.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/94b75f44-09c3-44f7-9cce-06f330f3fd6a/SAI03622.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b426fc3-4c35-4b04-b28b-e3a3f4d32a1d/SAI03623.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a387716b-ea07-437b-bc12-97cfacac7c05/SAI03624.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2968b52c-08fd-46b1-8ac5-b044b0793ecc/SAI03626.jpg",
        "width": 2452,
        "height": 1223,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b36c5894-38e3-4cb8-9596-61a4fd4ac7e5/SAI03635.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a1516dc-b419-4db8-a42b-d8f0afd70096/SAI03651.jpg",
        "width": 2008,
        "height": 1493,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55533833-cb4b-48cd-9660-6ed85ad40b45/SAI03675.jpg",
        "width": 1974,
        "height": 1518,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8ef8c88a-fd58-4481-9c3f-fa2175e27481/SAI03693.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/acd66191-be83-4ab0-9363-2e3981dbb95a/SAI03697.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ed042e89-69dd-4c38-9cab-c8fecac5ea47/SAI03702.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/65da8382-5b54-4c65-ac4c-7da43dc40673/SAI03709.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5fcec7e9-4c6c-4ccc-8214-1ab995a8dac7/SAI03710.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5d04599-aa86-4e8b-b52d-55d701c58417/SAI03715.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06a2ad6f-ef74-4bc0-97d5-252c4e167380/SAI03726.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ce529f7-8e29-4555-8e59-936704f4efb1/SAI03729.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0368c01c-0fcd-4b5e-b087-afa70e0ced55/SAI03734.jpg",
        "width": 1686,
        "height": 1778,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16111085-7a79-4b24-b29a-47f20874f6e8/SAI03741.jpg",
        "width": 1433,
        "height": 2093,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2377efaa-f664-41c0-9c23-5aaa5268a49a/SAI03742.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9eef4cdf-3ea9-4c4c-85a8-9b5cc3a7c64f/SAI03744.jpg",
        "width": 1884,
        "height": 1592,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7efa0095-81d9-4ba8-baf2-712e715c0d3b/SAI03747.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c6e4a4b4-7f07-45d6-bc57-42bc79e9c3d5/SAI03749.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/207b0fce-c0ca-4a46-a0a1-1dfc6dd56fd8/SAI03753.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5f46588c-2cf9-4883-9479-8d8c14f0fff2/SAI03756.jpg",
        "width": 1482,
        "height": 2022,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0b542fe6-8cb5-482a-a1de-f0d3b9ae7d9e/SAI03760.jpg",
        "width": 1967,
        "height": 1525,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a7e40152-2333-49c9-9f30-936b89771c04/SAI03763.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ccfadab6-dd0b-4c2a-9a4a-9ec1dff6e5eb/SAI03770.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90588e3b-d2bd-41f5-926e-e07786070821/SAI03778.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4bcfc748-28f4-4873-af83-b1964b25cf1d/SAI03799.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/34fa9347-77ac-4962-a346-0686589c6e77/SAI03812.jpg",
        "width": 2175,
        "height": 1379,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fe66dec1-695f-41e5-a830-a221e6b3b5f9/SAI03822.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc1be431-4e09-4c62-8f1e-e5885387c253/SAI03834.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d748b64f-d28d-4208-ad22-d170bb44f0ab/SAI03858.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5cd9c7b3-80db-4f8f-b4aa-dbba1a8b24ef/SAI03877.jpg",
        "width": 1744,
        "height": 1719,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1bf063cb-d020-4fbf-ae6f-b24b54a21de1/SAI03891.jpg",
        "width": 2070,
        "height": 1448,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/935cc77c-f04f-4a7c-90f9-880c04f962aa/SAI03892.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/073e5fc1-e4de-473c-9d99-e5d9398ffcb8/SAI03898-Enhanced-NR.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89792b94-d46f-4f37-9d52-09a26b11d059/SAI03905.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92ac385c-1595-496d-a9ec-bc834e1c67d4/SAI03935.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/979172bb-f608-44c9-8d64-911820a3cd6c/SAI03937.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "KAROLIINA & JAN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ae8c9c6-6fee-452e-951a-91540081269f/Firefly+20230929213950.png",
        "width": 1414,
        "height": 2120,
        "alt": "KAROLIINA & JAN"
      }
    ]
  },
  {
    "slug": "project-five-rmrjs",
    "location": "Helsinki, Finland",
    "couple": "Project & Five & Rmrjs",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "RIIKKA & JULIEN",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9042f68c-f118-4026-9662-b56fcc2e4fce/DJI_0004.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "DJI_0004.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a08dcb2-5c8a-41cc-ae9e-c51072f805ff/ND8_0389-2.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "ND8_0389-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/25b31f77-96d4-4879-a88c-247bf5c84a8e/DSC_3731.jpg",
        "width": 2500,
        "height": 1869,
        "alt": "DSC_3731.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1654263133004-H7KTVCQB0IMRMA5X6B0X/ND8_1113.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "ND8_1113.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3fa0d3bb-72a1-43e2-aec2-38ff2d6b0eed/ND8_1890.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_1890.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62a41b5a-d795-4591-b3df-95e0e7a4deb9/ND8_0394-2.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "ND8_0394-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5b56d7a-6193-4ccc-a785-1f3d29b06cee/ND8_0702.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0702.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cbf53d8c-4010-4184-8fb7-b2562fe4596c/DSC_3619.jpg",
        "width": 2500,
        "height": 1771,
        "alt": "DSC_3619.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b7a8ac45-0ee9-4b57-8642-60590c6d6d9a/ND8_0216.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "ND8_0216.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c8d1381-0e02-4e86-87ca-167aaed4d65a/ND8_0230.jpg",
        "width": 2500,
        "height": 1819,
        "alt": "ND8_0230.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/51029579-ed59-4b76-8df6-38802e2310dc/ND8_0268.jpg",
        "width": 2500,
        "height": 1792,
        "alt": "ND8_0268.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c62d3e56-8f96-4460-9999-f9a9ada513fe/DSC_3716.jpg",
        "width": 2500,
        "height": 1728,
        "alt": "DSC_3716.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/27176f25-ff21-4438-ab05-927c9400570e/ND8_1839-2.jpg",
        "width": 2002,
        "height": 3000,
        "alt": "ND8_1839-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/332cb0cd-29c9-46bf-94cf-d2adc35eadd3/ND8_0711.jpg",
        "width": 1735,
        "height": 2500,
        "alt": "ND8_0711.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a87b60df-056b-4749-81c9-b37bbf0f252e/ND8_1134.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_1134.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a4ff581-a1db-4af6-98ae-3c2e01d4f49b/DSC_3733.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_3733.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a6f1d9f-ff88-4bc8-ab8d-2f8eb2f8b431/ND8_0698-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0698-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3cd0b64-296f-44ae-bb30-51713e51e0ae/DSC_3742.jpg",
        "width": 2500,
        "height": 1857,
        "alt": "DSC_3742.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ded263c3-ae94-4b44-8aa3-bf49ce5bfef1/ND8_0382-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0382-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aefa02c4-59a4-41af-9eaa-694a4708cc13/DSC_3649.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_3649.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d62c2a8-851d-424f-817e-578a6fa94e6c/ND8_0280.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0280.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/223245e0-d52d-4b20-83c2-7ec21ef9941c/DSC_3755.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_3755.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/33239ce4-5e14-4d37-9f18-fe32fa92a075/DSC_3643.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_3643.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/33f050ad-60d4-40f4-8511-c9d69f1fc492/ND8_0495-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0495-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5e725c1-d070-4fa6-867f-f1c8b01b0d4d/DSC_3782.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_3782.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/631db4b0-f655-4094-a785-35a75700f5de/ND8_0415-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0415-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/59c88197-4f72-4867-b003-47ad90306926/ND8_0669.jpg",
        "width": 2500,
        "height": 1377,
        "alt": "ND8_0669.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/994b258a-8c71-47f8-b22c-366f6474fb19/DSC_3813.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_3813.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3e8111d-7047-40e3-bf9b-7dd46b2d17ed/DSC_3735.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_3735.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55af4c9f-aa93-49bf-ab86-d9d0a948e32f/DSC_3879.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_3879.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f4c7d9a6-e3e3-4b98-b97d-0adc6a6418b4/DSC_3834.jpg",
        "width": 1669,
        "height": 2500,
        "alt": "DSC_3834.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7f361f7b-ffe5-45c0-8fe2-e22a00f7509b/DSC_3876.jpg",
        "width": 2500,
        "height": 1238,
        "alt": "DSC_3876.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/365629a4-64b8-4269-9fed-39446ce84cd5/ND8_0751.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0751.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/035c2e26-c403-4db5-9b91-d03d041be08b/DSC_3866.jpg",
        "width": 2500,
        "height": 1979,
        "alt": "DSC_3866.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/106bb50f-64cd-425e-83b0-8857d9e84f64/ND8_0445-2.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "ND8_0445-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bbdace3e-f13e-4fc1-8de3-92477636126a/ND8_0792.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0792.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/25d58a51-0527-459a-b7a8-4bdd86ae2d05/DSC_4061.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_4061.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1be321d4-2ee8-41ee-9600-90da36b7cdc2/ND8_0567.jpg",
        "width": 2500,
        "height": 1688,
        "alt": "ND8_0567.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a9c777de-a04f-457c-b647-cbacaaa57870/ND8_0281.jpg",
        "width": 3000,
        "height": 2564,
        "alt": "ND8_0281.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/54f64b5f-2ab5-46cf-a6ac-4f2a76dd3fbc/ND8_0532-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0532-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/246ee2c8-b9fe-48ea-9641-57d2560e8d82/DSC_3991.jpg",
        "width": 1706,
        "height": 2500,
        "alt": "DSC_3991.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/48613ee5-17ae-41f3-b5ff-5b25b1df1e5e/DSC_4086.jpg",
        "width": 2500,
        "height": 1498,
        "alt": "DSC_4086.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88b0e530-e87e-493b-b1f9-4c0e7ece54bc/DSC_4056.jpg",
        "width": 2500,
        "height": 2208,
        "alt": "DSC_4056.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/921bc60b-9587-42b2-99d0-17a8e7314511/ND8_0822.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0822.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8403ff95-897c-47fc-8e86-be89764bef43/ND8_0852-2.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "ND8_0852-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9a85f47d-9053-44c1-a3a9-622d05b37cb8/ND8_0942-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_0942-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2dfbf91e-c211-413b-bb46-d002ebde6b20/DSC_3973.jpg",
        "width": 1938,
        "height": 2500,
        "alt": "DSC_3973.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/233804aa-608b-4480-a97b-8988ad3e4d5a/ND8_1053.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "ND8_1053.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88a2a6e5-892c-44c4-a3d0-b1c0da4e4f94/ND8_1827-2.jpg",
        "width": 2002,
        "height": 3000,
        "alt": "ND8_1827-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5eabb06d-2fb8-4549-a24d-13cb7aaf7642/ND8_1325-2.jpg",
        "width": 1859,
        "height": 2500,
        "alt": "ND8_1325-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c75c162-dbda-4c7a-9b0e-658924aedb71/ND8_1327-2.jpg",
        "width": 1900,
        "height": 2500,
        "alt": "ND8_1327-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/df822ab2-5bae-483e-a524-c649fea4aec5/ND8_1306-2.jpg",
        "width": 2500,
        "height": 1741,
        "alt": "ND8_1306-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f826d614-8fd2-4906-8512-079167110af9/ND8_1487.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_1487.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f7b1f82-913b-451c-b88c-9532d58ec146/ND8_1413.jpg",
        "width": 2500,
        "height": 1799,
        "alt": "ND8_1413.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e785a475-65ec-429e-8adf-b4218b60ff74/ND8_1453-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_1453-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c97a2a08-5c6e-4067-9daa-1e2cc1afa1d7/ND8_1469.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_1469.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c317db2e-10ab-4ca1-8c9e-f957733ee496/ND8_1958.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_1958.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/281bb51c-5650-43b5-b324-03779dc25c29/ND8_1449.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_1449.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a6ed3244-4e58-4a1e-ba19-a58ebfcc528c/ND8_1478-2.jpg",
        "width": 2500,
        "height": 1914,
        "alt": "ND8_1478-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/78ab7d69-24c3-45c9-9764-d6bb1a3c9cb1/ND8_1495-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_1495-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0538951b-94bf-4514-900a-5e6b03a14541/ND8_1535.jpg",
        "width": 2500,
        "height": 1438,
        "alt": "ND8_1535.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6db3502e-87dc-4450-993c-941302398cbd/ND8_1966-2.jpg",
        "width": 3000,
        "height": 2002,
        "alt": "ND8_1966-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44b3ec76-67d1-4c1c-978a-f6baa1cf070f/DSC_4065.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "DSC_4065.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d77a5dec-6d4b-4dc7-acfb-63b50334eba8/ND8_1908.jpg",
        "width": 2500,
        "height": 2056,
        "alt": "ND8_1908.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/32b8be03-035e-44ed-a04e-dd80a67a7344/ND8_1971.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "ND8_1971.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/baa4f697-1140-4184-99ee-343622719759/ND8_1963-2.jpg",
        "width": 3000,
        "height": 2002,
        "alt": "ND8_1963-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c15075a2-de23-47c5-b1d2-e7d19dd32fff/ND8_1824-2.jpg",
        "width": 2002,
        "height": 3000,
        "alt": "ND8_1824-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9042f68c-f118-4026-9662-b56fcc2e4fce/DJI_0004.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a08dcb2-5c8a-41cc-ae9e-c51072f805ff/ND8_0389-2.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/25b31f77-96d4-4879-a88c-247bf5c84a8e/DSC_3731.jpg",
        "width": 2500,
        "height": 1869,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1654263133004-H7KTVCQB0IMRMA5X6B0X/ND8_1113.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3fa0d3bb-72a1-43e2-aec2-38ff2d6b0eed/ND8_1890.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62a41b5a-d795-4591-b3df-95e0e7a4deb9/ND8_0394-2.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c5b56d7a-6193-4ccc-a785-1f3d29b06cee/ND8_0702.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cbf53d8c-4010-4184-8fb7-b2562fe4596c/DSC_3619.jpg",
        "width": 2500,
        "height": 1771,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b7a8ac45-0ee9-4b57-8642-60590c6d6d9a/ND8_0216.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c8d1381-0e02-4e86-87ca-167aaed4d65a/ND8_0230.jpg",
        "width": 2500,
        "height": 1819,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/51029579-ed59-4b76-8df6-38802e2310dc/ND8_0268.jpg",
        "width": 2500,
        "height": 1792,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c62d3e56-8f96-4460-9999-f9a9ada513fe/DSC_3716.jpg",
        "width": 2500,
        "height": 1728,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/27176f25-ff21-4438-ab05-927c9400570e/ND8_1839-2.jpg",
        "width": 2002,
        "height": 3000,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/332cb0cd-29c9-46bf-94cf-d2adc35eadd3/ND8_0711.jpg",
        "width": 1735,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a87b60df-056b-4749-81c9-b37bbf0f252e/ND8_1134.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a4ff581-a1db-4af6-98ae-3c2e01d4f49b/DSC_3733.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a6f1d9f-ff88-4bc8-ab8d-2f8eb2f8b431/ND8_0698-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3cd0b64-296f-44ae-bb30-51713e51e0ae/DSC_3742.jpg",
        "width": 2500,
        "height": 1857,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ded263c3-ae94-4b44-8aa3-bf49ce5bfef1/ND8_0382-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aefa02c4-59a4-41af-9eaa-694a4708cc13/DSC_3649.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d62c2a8-851d-424f-817e-578a6fa94e6c/ND8_0280.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/223245e0-d52d-4b20-83c2-7ec21ef9941c/DSC_3755.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/33239ce4-5e14-4d37-9f18-fe32fa92a075/DSC_3643.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/33f050ad-60d4-40f4-8511-c9d69f1fc492/ND8_0495-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5e725c1-d070-4fa6-867f-f1c8b01b0d4d/DSC_3782.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/631db4b0-f655-4094-a785-35a75700f5de/ND8_0415-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/59c88197-4f72-4867-b003-47ad90306926/ND8_0669.jpg",
        "width": 2500,
        "height": 1377,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/994b258a-8c71-47f8-b22c-366f6474fb19/DSC_3813.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d3e8111d-7047-40e3-bf9b-7dd46b2d17ed/DSC_3735.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/55af4c9f-aa93-49bf-ab86-d9d0a948e32f/DSC_3879.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f4c7d9a6-e3e3-4b98-b97d-0adc6a6418b4/DSC_3834.jpg",
        "width": 1669,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7f361f7b-ffe5-45c0-8fe2-e22a00f7509b/DSC_3876.jpg",
        "width": 2500,
        "height": 1238,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/365629a4-64b8-4269-9fed-39446ce84cd5/ND8_0751.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/035c2e26-c403-4db5-9b91-d03d041be08b/DSC_3866.jpg",
        "width": 2500,
        "height": 1979,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/106bb50f-64cd-425e-83b0-8857d9e84f64/ND8_0445-2.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bbdace3e-f13e-4fc1-8de3-92477636126a/ND8_0792.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/25d58a51-0527-459a-b7a8-4bdd86ae2d05/DSC_4061.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1be321d4-2ee8-41ee-9600-90da36b7cdc2/ND8_0567.jpg",
        "width": 2500,
        "height": 1688,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a9c777de-a04f-457c-b647-cbacaaa57870/ND8_0281.jpg",
        "width": 3000,
        "height": 2564,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/54f64b5f-2ab5-46cf-a6ac-4f2a76dd3fbc/ND8_0532-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/246ee2c8-b9fe-48ea-9641-57d2560e8d82/DSC_3991.jpg",
        "width": 1706,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/48613ee5-17ae-41f3-b5ff-5b25b1df1e5e/DSC_4086.jpg",
        "width": 2500,
        "height": 1498,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88b0e530-e87e-493b-b1f9-4c0e7ece54bc/DSC_4056.jpg",
        "width": 2500,
        "height": 2208,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/921bc60b-9587-42b2-99d0-17a8e7314511/ND8_0822.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8403ff95-897c-47fc-8e86-be89764bef43/ND8_0852-2.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9a85f47d-9053-44c1-a3a9-622d05b37cb8/ND8_0942-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2dfbf91e-c211-413b-bb46-d002ebde6b20/DSC_3973.jpg",
        "width": 1938,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/233804aa-608b-4480-a97b-8988ad3e4d5a/ND8_1053.jpg",
        "width": 1668,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88a2a6e5-892c-44c4-a3d0-b1c0da4e4f94/ND8_1827-2.jpg",
        "width": 2002,
        "height": 3000,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5eabb06d-2fb8-4549-a24d-13cb7aaf7642/ND8_1325-2.jpg",
        "width": 1859,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c75c162-dbda-4c7a-9b0e-658924aedb71/ND8_1327-2.jpg",
        "width": 1900,
        "height": 2500,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/df822ab2-5bae-483e-a524-c649fea4aec5/ND8_1306-2.jpg",
        "width": 2500,
        "height": 1741,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f826d614-8fd2-4906-8512-079167110af9/ND8_1487.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f7b1f82-913b-451c-b88c-9532d58ec146/ND8_1413.jpg",
        "width": 2500,
        "height": 1799,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e785a475-65ec-429e-8adf-b4218b60ff74/ND8_1453-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c97a2a08-5c6e-4067-9daa-1e2cc1afa1d7/ND8_1469.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c317db2e-10ab-4ca1-8c9e-f957733ee496/ND8_1958.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/281bb51c-5650-43b5-b324-03779dc25c29/ND8_1449.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a6ed3244-4e58-4a1e-ba19-a58ebfcc528c/ND8_1478-2.jpg",
        "width": 2500,
        "height": 1914,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/78ab7d69-24c3-45c9-9764-d6bb1a3c9cb1/ND8_1495-2.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0538951b-94bf-4514-900a-5e6b03a14541/ND8_1535.jpg",
        "width": 2500,
        "height": 1438,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6db3502e-87dc-4450-993c-941302398cbd/ND8_1966-2.jpg",
        "width": 3000,
        "height": 2002,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/44b3ec76-67d1-4c1c-978a-f6baa1cf070f/DSC_4065.jpg",
        "width": 2500,
        "height": 1669,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d77a5dec-6d4b-4dc7-acfb-63b50334eba8/ND8_1908.jpg",
        "width": 2500,
        "height": 2056,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/32b8be03-035e-44ed-a04e-dd80a67a7344/ND8_1971.jpg",
        "width": 2500,
        "height": 1668,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/baa4f697-1140-4184-99ee-343622719759/ND8_1963-2.jpg",
        "width": 3000,
        "height": 2002,
        "alt": "RIIKKA & JULIEN"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c15075a2-de23-47c5-b1d2-e7d19dd32fff/ND8_1824-2.jpg",
        "width": 2002,
        "height": 3000,
        "alt": "RIIKKA & JULIEN"
      }
    ]
  },
  {
    "slug": "r-j",
    "location": "Helsinki, Finland",
    "couple": "R & J",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "R & J",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c77fa77-f5a5-49fe-b6f8-789ecde7ba4e/A7300600.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "A7300600.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dfaa5586-f961-4144-bfb8-c374e956da8a/A7300340.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "A7300340.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/beda643a-d7de-40d4-99b3-f01452245479/A7309986-2.jpg",
        "width": 2264,
        "height": 1324,
        "alt": "A7309986-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a85f4cf3-dd38-47ad-a9ba-a608881f00c4/A7409256-2.jpg",
        "width": 1299,
        "height": 2308,
        "alt": "A7409256-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f846d581-f0db-43e3-ab2d-7b050ebda85a/A7300340.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "A7300340.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/423320be-f1eb-4bc1-a0cc-8ecf0aa02328/A7409310-2.jpg",
        "width": 1475,
        "height": 2033,
        "alt": "A7409310-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1da0d2d9-62df-4438-b21e-7ffb8117ede6/A7400198-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7400198-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e7a4c35-a7ea-4dbd-b119-f809985ad95c/A7401278-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7401278-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd43a7e1-f730-42b5-8d58-39055c879acf/A7401317-2.jpg",
        "width": 2237,
        "height": 1340,
        "alt": "A7401317-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dcf324c6-73e9-4c16-a833-8d63e5fdd43c/A7300126.jpg",
        "width": 1958,
        "height": 1531,
        "alt": "A7300126.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9b25ee33-e61d-4602-805e-572f1e116eed/A7300324.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "A7300324.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/349fb111-5ee7-446e-8be6-2fe1847efd2e/A7300334.jpg",
        "width": 1382,
        "height": 2170,
        "alt": "A7300334.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a50b664c-57ed-4716-8134-cc7934a6500c/A7300387.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "A7300387.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/561262d4-e25e-4648-b840-22225ca1f066/A7300488.jpg",
        "width": 1841,
        "height": 1628,
        "alt": "A7300488.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98806f1f-2777-49e2-a774-f268a24e654d/A7300490.jpg",
        "width": 2290,
        "height": 1309,
        "alt": "A7300490.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8de33206-5456-4820-ac56-e5eb27ff7608/A7408646-2.jpg",
        "width": 2141,
        "height": 1401,
        "alt": "A7408646-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9555c57b-2fe1-408d-9ad9-2fd3da24df49/A7408785-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7408785-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f5c46d4-eb6e-415d-9a9b-f7bfd2e05007/A7408811-2.jpg",
        "width": 2283,
        "height": 1314,
        "alt": "A7408811-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a78fd6b3-08cf-49b5-818a-8c42baa186ca/A7408841-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7408841-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a8eacef9-faab-423e-9342-3da759902acb/A7300595.jpg",
        "width": 2270,
        "height": 1321,
        "alt": "A7300595.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c281ac31-9961-4052-9a6b-86c980a67a8d/A7408852-2.jpg",
        "width": 2250,
        "height": 1332,
        "alt": "A7408852-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1aed6f3-8af8-428c-b6ab-195eb661f091/A7408900-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7408900-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/008db778-0089-4d71-85f0-84f038227512/A7409618-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7409618-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab5eac6f-011c-421e-8d86-a0277224e7bb/A7409722-2.jpg",
        "width": 1425,
        "height": 2105,
        "alt": "A7409722-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de30ed19-4a75-43b9-bf5a-211ba33c49e5/A7409730-2.jpg",
        "width": 1440,
        "height": 2081,
        "alt": "A7409730-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/74e77e42-5d0d-44f2-a1b2-85a757f8c007/A7409804-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7409804-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/30ad00f0-a24d-40f3-a44a-1097eb449caf/A7409828-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7409828-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ccc34fa7-b2ac-47b2-ae6b-88c29ba9f761/A7409029-2.jpg",
        "width": 1416,
        "height": 2118,
        "alt": "A7409029-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7bf1495f-fb93-4bf0-8a7a-c687017db720/A7409051-2.jpg",
        "width": 1332,
        "height": 2252,
        "alt": "A7409051-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ca201f75-9399-4b4c-a2ab-204f749075e5/A7409098-2.jpg",
        "width": 1443,
        "height": 2078,
        "alt": "A7409098-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92b6b044-f3ed-4c18-a5f0-e48e9a915ec0/A7409109-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7409109-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6c6c60d-c514-4556-87c8-bcee72716f53/A7409157-2.jpg",
        "width": 1544,
        "height": 1941,
        "alt": "A7409157-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8d8741c1-ee55-48d8-a8ac-fea0dca98a24/A7309925-2.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "A7309925-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/345e92f7-045c-4d5e-85b4-8ad92069c112/A7409175-2.jpg",
        "width": 1504,
        "height": 1994,
        "alt": "A7409175-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb65ec77-61e5-4fa0-9075-bc3e0abf75eb/A7409191-2.jpg",
        "width": 1299,
        "height": 2308,
        "alt": "A7409191-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c83b2e2-53bd-4328-91ad-66db271f9bd5/A7409240-2.jpg",
        "width": 1629,
        "height": 1841,
        "alt": "A7409240-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53d15cb6-1eba-4e06-a4fb-cc71df31495c/A7409384-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7409384-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9743c5b9-6b4f-4a45-a66a-57b057a7a1ea/A7409388-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7409388-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3d758ad3-90f9-42c2-bb28-60b276d86f78/A7300025.jpg",
        "width": 2230,
        "height": 1345,
        "alt": "A7300025.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9c81704e-b560-47d4-a0ed-e7292cf52d24/A7300031.jpg",
        "width": 2230,
        "height": 1345,
        "alt": "A7300031.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5686aac-3f04-4591-bf4a-e4924f20c2ce/A7400497-2.jpg",
        "width": 2287,
        "height": 1311,
        "alt": "A7400497-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5fc2a29a-2cc1-41e0-9305-8901668b79ec/A7400515-2.jpg",
        "width": 2202,
        "height": 1361,
        "alt": "A7400515-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/efd174ce-f260-446d-889e-3541bbf42cf3/A7400543-2.jpg",
        "width": 2268,
        "height": 1322,
        "alt": "A7400543-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26910d5e-ef36-4f1a-8f5c-bdaffba7a4df/A7400547-2.jpg",
        "width": 2199,
        "height": 1363,
        "alt": "A7400547-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4400b9d5-7640-4bf0-be0d-b6b10bddfed8/A7400581-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7400581-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ce12fe5-bbd7-4ab3-a959-1a5636ffa9b0/A7400612-2.jpg",
        "width": 1941,
        "height": 1545,
        "alt": "A7400612-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a1c73c47-6e30-4f38-8052-fa23ccc86d24/A7400620-2.jpg",
        "width": 1904,
        "height": 1575,
        "alt": "A7400620-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc4213bb-e640-4bcc-a470-34904dfa3262/A7400659-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7400659-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8077adc9-b421-47f8-93eb-8a6f34f9d453/A7400664-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7400664-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a4ea8d31-9a5f-48a7-a38d-a866d7b7f6a4/A7300850.jpg",
        "width": 1580,
        "height": 1898,
        "alt": "A7300850.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/38a841a2-bc92-4bb2-a6d1-c575ceee9ef7/A7300857.jpg",
        "width": 1358,
        "height": 2209,
        "alt": "A7300857.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a1933e4-25e8-4ead-884b-108456940615/A7400693-2.jpg",
        "width": 1874,
        "height": 1600,
        "alt": "A7400693-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4dea8f74-a403-4f32-b02b-f37e8c729ecf/A7400694-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7400694-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/977ade07-f164-4032-85cc-2d47664d95af/A7400701-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7400701-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d9bf077-e624-4268-8ca4-551e7aa3abea/A7300867.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "A7300867.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/555eeacb-7f3a-4348-95e8-14a21ee9422c/A7300869.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "A7300869.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/28457e5a-8507-4e9c-a916-97aac40e2da4/A7300941-2.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "A7300941-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72481e81-d8b3-4764-a9b2-5707dcd3f405/A7300943-2.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "A7300943-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/47cb1ea8-9305-468a-8cd1-ff08fe89eb9b/A7400747-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7400747-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d4324226-315e-458c-85b1-1f4d95763a59/A7401035-2.jpg",
        "width": 1299,
        "height": 2308,
        "alt": "A7401035-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e3d294f6-9a9b-40e7-a0d9-d379e092454d/A7300994.jpg",
        "width": 1980,
        "height": 1514,
        "alt": "A7300994.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3812e444-6d6f-4acd-afce-a37f07420aed/A7300995-2.jpg",
        "width": 1984,
        "height": 1511,
        "alt": "A7300995-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e985ed8-d32a-47d9-8925-9735c3586985/A7301109.jpg",
        "width": 1571,
        "height": 1909,
        "alt": "A7301109.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9cd9dc1f-131f-4489-835d-021132ee35aa/A7401128-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7401128-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/60c31d91-5373-4683-b072-ee6ed1b63a23/A7401146-2.jpg",
        "width": 2354,
        "height": 1273,
        "alt": "A7401146-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/25822e06-af50-4b41-b18f-85eeae6c289c/A7401193-2.jpg",
        "width": 1299,
        "height": 2308,
        "alt": "A7401193-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/670d6b44-e67a-442c-a373-9dab641681ba/A7401287-2.jpg",
        "width": 1499,
        "height": 2001,
        "alt": "A7401287-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/40e9206a-939a-4990-8c2b-404d3951ddc2/A7401309-2.jpg",
        "width": 2228,
        "height": 1345,
        "alt": "A7401309-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a5c8fc58-2781-4482-881b-80c4b2a7db0c/A7300324.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "A7300324.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/40f8005c-032a-427e-ad3b-1cb89f895e4d/A7300334.jpg",
        "width": 1382,
        "height": 2170,
        "alt": "A7300334.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3765969b-e6af-4715-9b99-f9366e235a23/A7300387.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "A7300387.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/855b5c2b-3777-44da-beb4-c1abee0d7715/A7400297-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7400297-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9cf9a0e5-ea73-4849-a538-ce8b2538ccef/A7300488.jpg",
        "width": 1841,
        "height": 1628,
        "alt": "A7300488.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e099ba30-15f8-4566-a5ae-95dfe3907c78/A7300490.jpg",
        "width": 2290,
        "height": 1309,
        "alt": "A7300490.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/04000b87-a55d-4de4-8326-554b16e95b45/A7300578-2.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "A7300578-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb014042-fa50-45b7-b0f5-fefbec4a500b/A7400170-2.jpg",
        "width": 2172,
        "height": 1381,
        "alt": "A7400170-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/371f57b0-ca46-4bc8-a712-4dea71d63bcc/A7400199-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "A7400199-2.jpg"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d7d5f71-a347-43d8-b284-dcd13a6b06ee/A7400224-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "Elegant Wedding Celebration"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/224f90e1-5bdf-46f1-9968-6c6df896e169/A7400253-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "Cinematic Couple Portrait"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ada727cb-d5f2-4266-886b-1470c1dc9558/A7300593-2.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "Emotional Wedding Moment"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/766d73a6-efa6-4ce3-bdd1-a924ae34b0be/A7300622.jpg",
        "width": 1436,
        "height": 2087,
        "alt": "Artistic Wedding Detail"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70237b23-15d6-4b64-a09b-ce96b454032a/A7300654-2.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "Stunning Bridal Portrait"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66bddcbf-4b90-4662-9238-5243e6a8a64c/A7300660.jpg",
        "width": 2144,
        "height": 1399,
        "alt": "Magical Wedding Light"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6aa1d070-f56e-4d8d-99f7-e04cf043e861/A7300687.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "Candid Wedding Joy"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee6345b0-9554-406d-b519-8d8540164b37/A7400444-2.jpg",
        "width": 1469,
        "height": 2041,
        "alt": "Romantic Sunset Portrait"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7900bc3e-e3e1-4892-9d0d-e9feac518b24/A7400452-2.jpg",
        "width": 1950,
        "height": 1537,
        "alt": "Beautiful Wedding Scenery"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/97b2c8f7-8659-4f1e-9ec8-178a30d3c2b4/A7301089-2-2.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "Intimate Wedding Vows"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/78d7d292-6c53-4c42-99b2-5979be5ca1f8/A7300822.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "Graceful Bride Close-up"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c77fa77-f5a5-49fe-b6f8-789ecde7ba4e/A7300600.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dfaa5586-f961-4144-bfb8-c374e956da8a/A7300340.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/beda643a-d7de-40d4-99b3-f01452245479/A7309986-2.jpg",
        "width": 2264,
        "height": 1324,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a85f4cf3-dd38-47ad-a9ba-a608881f00c4/A7409256-2.jpg",
        "width": 1299,
        "height": 2308,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f846d581-f0db-43e3-ab2d-7b050ebda85a/A7300340.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/423320be-f1eb-4bc1-a0cc-8ecf0aa02328/A7409310-2.jpg",
        "width": 1475,
        "height": 2033,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1da0d2d9-62df-4438-b21e-7ffb8117ede6/A7400198-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e7a4c35-a7ea-4dbd-b119-f809985ad95c/A7401278-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd43a7e1-f730-42b5-8d58-39055c879acf/A7401317-2.jpg",
        "width": 2237,
        "height": 1340,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dcf324c6-73e9-4c16-a833-8d63e5fdd43c/A7300126.jpg",
        "width": 1958,
        "height": 1531,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9b25ee33-e61d-4602-805e-572f1e116eed/A7300324.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/349fb111-5ee7-446e-8be6-2fe1847efd2e/A7300334.jpg",
        "width": 1382,
        "height": 2170,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a50b664c-57ed-4716-8134-cc7934a6500c/A7300387.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/561262d4-e25e-4648-b840-22225ca1f066/A7300488.jpg",
        "width": 1841,
        "height": 1628,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98806f1f-2777-49e2-a774-f268a24e654d/A7300490.jpg",
        "width": 2290,
        "height": 1309,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8de33206-5456-4820-ac56-e5eb27ff7608/A7408646-2.jpg",
        "width": 2141,
        "height": 1401,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9555c57b-2fe1-408d-9ad9-2fd3da24df49/A7408785-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8f5c46d4-eb6e-415d-9a9b-f7bfd2e05007/A7408811-2.jpg",
        "width": 2283,
        "height": 1314,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a78fd6b3-08cf-49b5-818a-8c42baa186ca/A7408841-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a8eacef9-faab-423e-9342-3da759902acb/A7300595.jpg",
        "width": 2270,
        "height": 1321,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c281ac31-9961-4052-9a6b-86c980a67a8d/A7408852-2.jpg",
        "width": 2250,
        "height": 1332,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1aed6f3-8af8-428c-b6ab-195eb661f091/A7408900-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/008db778-0089-4d71-85f0-84f038227512/A7409618-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ab5eac6f-011c-421e-8d86-a0277224e7bb/A7409722-2.jpg",
        "width": 1425,
        "height": 2105,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de30ed19-4a75-43b9-bf5a-211ba33c49e5/A7409730-2.jpg",
        "width": 1440,
        "height": 2081,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/74e77e42-5d0d-44f2-a1b2-85a757f8c007/A7409804-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/30ad00f0-a24d-40f3-a44a-1097eb449caf/A7409828-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ccc34fa7-b2ac-47b2-ae6b-88c29ba9f761/A7409029-2.jpg",
        "width": 1416,
        "height": 2118,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7bf1495f-fb93-4bf0-8a7a-c687017db720/A7409051-2.jpg",
        "width": 1332,
        "height": 2252,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ca201f75-9399-4b4c-a2ab-204f749075e5/A7409098-2.jpg",
        "width": 1443,
        "height": 2078,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92b6b044-f3ed-4c18-a5f0-e48e9a915ec0/A7409109-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6c6c60d-c514-4556-87c8-bcee72716f53/A7409157-2.jpg",
        "width": 1544,
        "height": 1941,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8d8741c1-ee55-48d8-a8ac-fea0dca98a24/A7309925-2.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/345e92f7-045c-4d5e-85b4-8ad92069c112/A7409175-2.jpg",
        "width": 1504,
        "height": 1994,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eb65ec77-61e5-4fa0-9075-bc3e0abf75eb/A7409191-2.jpg",
        "width": 1299,
        "height": 2308,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3c83b2e2-53bd-4328-91ad-66db271f9bd5/A7409240-2.jpg",
        "width": 1629,
        "height": 1841,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/53d15cb6-1eba-4e06-a4fb-cc71df31495c/A7409384-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9743c5b9-6b4f-4a45-a66a-57b057a7a1ea/A7409388-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3d758ad3-90f9-42c2-bb28-60b276d86f78/A7300025.jpg",
        "width": 2230,
        "height": 1345,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9c81704e-b560-47d4-a0ed-e7292cf52d24/A7300031.jpg",
        "width": 2230,
        "height": 1345,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5686aac-3f04-4591-bf4a-e4924f20c2ce/A7400497-2.jpg",
        "width": 2287,
        "height": 1311,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5fc2a29a-2cc1-41e0-9305-8901668b79ec/A7400515-2.jpg",
        "width": 2202,
        "height": 1361,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/efd174ce-f260-446d-889e-3541bbf42cf3/A7400543-2.jpg",
        "width": 2268,
        "height": 1322,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26910d5e-ef36-4f1a-8f5c-bdaffba7a4df/A7400547-2.jpg",
        "width": 2199,
        "height": 1363,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4400b9d5-7640-4bf0-be0d-b6b10bddfed8/A7400581-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4ce12fe5-bbd7-4ab3-a959-1a5636ffa9b0/A7400612-2.jpg",
        "width": 1941,
        "height": 1545,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a1c73c47-6e30-4f38-8052-fa23ccc86d24/A7400620-2.jpg",
        "width": 1904,
        "height": 1575,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fc4213bb-e640-4bcc-a470-34904dfa3262/A7400659-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8077adc9-b421-47f8-93eb-8a6f34f9d453/A7400664-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a4ea8d31-9a5f-48a7-a38d-a866d7b7f6a4/A7300850.jpg",
        "width": 1580,
        "height": 1898,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/38a841a2-bc92-4bb2-a6d1-c575ceee9ef7/A7300857.jpg",
        "width": 1358,
        "height": 2209,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a1933e4-25e8-4ead-884b-108456940615/A7400693-2.jpg",
        "width": 1874,
        "height": 1600,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4dea8f74-a403-4f32-b02b-f37e8c729ecf/A7400694-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/977ade07-f164-4032-85cc-2d47664d95af/A7400701-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9d9bf077-e624-4268-8ca4-551e7aa3abea/A7300867.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/555eeacb-7f3a-4348-95e8-14a21ee9422c/A7300869.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/28457e5a-8507-4e9c-a916-97aac40e2da4/A7300941-2.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72481e81-d8b3-4764-a9b2-5707dcd3f405/A7300943-2.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/47cb1ea8-9305-468a-8cd1-ff08fe89eb9b/A7400747-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d4324226-315e-458c-85b1-1f4d95763a59/A7401035-2.jpg",
        "width": 1299,
        "height": 2308,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e3d294f6-9a9b-40e7-a0d9-d379e092454d/A7300994.jpg",
        "width": 1980,
        "height": 1514,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3812e444-6d6f-4acd-afce-a37f07420aed/A7300995-2.jpg",
        "width": 1984,
        "height": 1511,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e985ed8-d32a-47d9-8925-9735c3586985/A7301109.jpg",
        "width": 1571,
        "height": 1909,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9cd9dc1f-131f-4489-835d-021132ee35aa/A7401128-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/60c31d91-5373-4683-b072-ee6ed1b63a23/A7401146-2.jpg",
        "width": 2354,
        "height": 1273,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/25822e06-af50-4b41-b18f-85eeae6c289c/A7401193-2.jpg",
        "width": 1299,
        "height": 2308,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/670d6b44-e67a-442c-a373-9dab641681ba/A7401287-2.jpg",
        "width": 1499,
        "height": 2001,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/40e9206a-939a-4990-8c2b-404d3951ddc2/A7401309-2.jpg",
        "width": 2228,
        "height": 1345,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a5c8fc58-2781-4482-881b-80c4b2a7db0c/A7300324.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/40f8005c-032a-427e-ad3b-1cb89f895e4d/A7300334.jpg",
        "width": 1382,
        "height": 2170,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3765969b-e6af-4715-9b99-f9366e235a23/A7300387.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/855b5c2b-3777-44da-beb4-c1abee0d7715/A7400297-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9cf9a0e5-ea73-4849-a538-ce8b2538ccef/A7300488.jpg",
        "width": 1841,
        "height": 1628,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e099ba30-15f8-4566-a5ae-95dfe3907c78/A7300490.jpg",
        "width": 2290,
        "height": 1309,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/04000b87-a55d-4de4-8326-554b16e95b45/A7300578-2.jpg",
        "width": 1299,
        "height": 2309,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cb014042-fa50-45b7-b0f5-fefbec4a500b/A7400170-2.jpg",
        "width": 2172,
        "height": 1381,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/371f57b0-ca46-4bc8-a712-4dea71d63bcc/A7400199-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0d7d5f71-a347-43d8-b284-dcd13a6b06ee/A7400224-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/224f90e1-5bdf-46f1-9968-6c6df896e169/A7400253-2.jpg",
        "width": 2308,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ada727cb-d5f2-4266-886b-1470c1dc9558/A7300593-2.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/766d73a6-efa6-4ce3-bdd1-a924ae34b0be/A7300622.jpg",
        "width": 1436,
        "height": 2087,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70237b23-15d6-4b64-a09b-ce96b454032a/A7300654-2.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66bddcbf-4b90-4662-9238-5243e6a8a64c/A7300660.jpg",
        "width": 2144,
        "height": 1399,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6aa1d070-f56e-4d8d-99f7-e04cf043e861/A7300687.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee6345b0-9554-406d-b519-8d8540164b37/A7400444-2.jpg",
        "width": 1469,
        "height": 2041,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7900bc3e-e3e1-4892-9d0d-e9feac518b24/A7400452-2.jpg",
        "width": 1950,
        "height": 1537,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/97b2c8f7-8659-4f1e-9ec8-178a30d3c2b4/A7301089-2-2.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/78d7d292-6c53-4c42-99b2-5979be5ca1f8/A7300822.jpg",
        "width": 2309,
        "height": 1299,
        "alt": "R & J"
      }
    ]
  },
  {
    "slug": "lars",
    "location": "Helsinki, Finland",
    "couple": "Lars",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "Lars & Abigael",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18d36e1c-924d-49c8-aafe-870e13554b24/CM100119-2.jpg",
        "width": 2031,
        "height": 1476,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/061a96c2-a692-4a97-a801-5b5d298d622a/CM100141.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/13f5acd1-cdfa-41ac-9cac-8b02926f3729/CM100145-2.jpg",
        "width": 1713,
        "height": 1751,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f3ec8613-0e30-4689-9035-821dcb9069ad/CM100150-2-2.jpg",
        "width": 2070,
        "height": 1449,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/772b6296-216e-4688-bd2e-a5256eb812d3/CM100160-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/331ce59e-0c59-4a41-adfe-3f657a778a6b/CM100169-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c690c60-6dff-451b-9a5b-ce7bac7a5371/CM100175-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66285b7b-83e5-49b1-bf19-629b86baa087/CM100179.jpg",
        "width": 2039,
        "height": 1471,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/20bc2a92-518b-4940-99fc-f8b3959bd225/CM100181-2.jpg",
        "width": 1937,
        "height": 1548,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/730cf2a3-0c8d-466d-adfd-64f516a0016a/CM100190-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8897be0c-92e3-4fa2-a822-f5deda18a347/CM100200.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1d3db34d-17fe-4060-bc35-3740c69cc19e/CM100221-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/14df3edf-ed8f-4be0-93c8-7c9eb5f99890/CM100231.jpg",
        "width": 1823,
        "height": 1645,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c1969b1-9983-40af-8067-b98f31fa9e73/CM100236-2.jpg",
        "width": 2304,
        "height": 1302,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/956688e6-3d83-4c09-9ae7-18df193a17b7/CM100238-2.jpg",
        "width": 2158,
        "height": 1390,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebc24876-804f-4805-be92-ff519109a3ba/CM100242.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0e67c6bc-aaf2-4a6a-a5b4-b4d77bf33e3f/CM100266.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f60d555d-b5bb-4254-acb9-ad051c0d2173/CM100279.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3aa73c5f-075f-46a8-9d2c-b6da1f3fa249/CM100287-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5538c513-1678-4410-94a5-f521a4b47c85/CM100288-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/530c7140-4231-4df6-9e59-a41a8c5ab00c/CM100294.jpg",
        "width": 2295,
        "height": 1307,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/42db2e33-0263-4032-96a2-7cfbe2bedca3/CM100296.jpg",
        "width": 1461,
        "height": 2053,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6730436e-36a0-4c11-951d-d1d3cbc3cc4b/CM100301.jpg",
        "width": 2446,
        "height": 1226,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c8cccfa4-0f39-4098-8072-b8fb3c8d6883/CM100310-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c75dc714-fe48-463e-a4df-afc329f86b81/CM100312.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/03996e8b-29bd-4962-9eb3-3aed45b83aff/CM100319-2.jpg",
        "width": 1405,
        "height": 2134,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/300a6142-3031-4054-99f5-87de7300f2a1/CM100322-2.jpg",
        "width": 1449,
        "height": 2069,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7064edf6-b201-49ea-abe8-5db5a0468186/CM100326-2.jpg",
        "width": 1467,
        "height": 2044,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92c783f9-147e-4443-8a0c-c869e757dcaa/CM100340.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26b6fa21-bbe0-4101-b226-07334ed7ca82/CM100333.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9c921c6c-2d22-4f51-b6bc-4a0fa4cacf83/CM100334-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c9bfef8-b59f-4fcd-afa3-201f1e8d4141/CM100345.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de306674-b35b-4d8d-ba60-db60001ecb3e/CM100349-2.jpg",
        "width": 1406,
        "height": 2132,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f529b896-fd26-4c1a-855f-9e14d8cf2fd9/CM100353-3.jpg",
        "width": 1494,
        "height": 2008,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e2a6370-3814-4ce6-8f9f-5e2a345f5586/CM100356.jpg",
        "width": 1406,
        "height": 2132,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61aeeb35-f183-4bc0-b53c-ac7c25d3951f/CM100361.jpg",
        "width": 1447,
        "height": 2073,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dfb3ec8d-093d-49b8-b094-a8114b78cdca/CM100359.jpg",
        "width": 1522,
        "height": 1971,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1def4442-c395-4045-b1ef-8e6cdfcca349/CM100360.jpg",
        "width": 1512,
        "height": 1984,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f633c08d-6378-4287-90b8-4548d4370793/CM100363.jpg",
        "width": 1481,
        "height": 2024,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/28c196c1-ee38-4a3a-82a8-3667aa2d9a4c/CM100368.jpg",
        "width": 1986,
        "height": 1510,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98b997f4-cb2d-48ba-b781-0bd04c9e456e/CM100367-2.jpg",
        "width": 1986,
        "height": 1510,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76058e44-7df2-4fd8-a9a4-100a261de6f2/CM100374.jpg",
        "width": 1405,
        "height": 2135,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b27920b6-8e5b-4321-8971-80ac8df040d2/CM100381-2.jpg",
        "width": 1445,
        "height": 2076,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a6c4bbf-e779-4750-a263-35e39dcc1063/CM100383-2.jpg",
        "width": 1510,
        "height": 1986,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e206762b-b47d-46a0-9698-1c7fad8f2916/CM100387-2.jpg",
        "width": 2008,
        "height": 1494,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a4c979a-698f-44f3-b71c-b3ed2326fbed/CM100395-2.jpg",
        "width": 2008,
        "height": 1494,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/782dee57-1e47-4dbe-85aa-92e666caa025/CM100399.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f682137-9579-45d3-abdd-0a6fbdf94ebb/CM100413-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9564acfb-5d04-4bf2-b9f9-3d03193eb943/CM100416.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f19ecefb-33e2-4b55-b3f5-8965dd3ba6d6/CM100420-2.jpg",
        "width": 1463,
        "height": 2049,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef5171be-68d5-4b43-ac31-ce98bc96f631/CM100423.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/03f95e29-9da9-4665-b0f2-2c0f86557ac8/CM100430-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/85d95ed7-2721-478f-92ab-c4be32b724d3/CM100436.jpg",
        "width": 2154,
        "height": 1392,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/48281d8f-fca9-4e11-8993-cef2dbbbf219/CM100449-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5c9664d-31c3-4793-bf9c-e4cb27490c43/CM100476-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee0b133e-fd76-4d78-b737-81ec0d7986d8/CM100489.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18d36e1c-924d-49c8-aafe-870e13554b24/CM100119-2.jpg",
        "width": 2031,
        "height": 1476,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/061a96c2-a692-4a97-a801-5b5d298d622a/CM100141.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/13f5acd1-cdfa-41ac-9cac-8b02926f3729/CM100145-2.jpg",
        "width": 1713,
        "height": 1751,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f3ec8613-0e30-4689-9035-821dcb9069ad/CM100150-2-2.jpg",
        "width": 2070,
        "height": 1449,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/772b6296-216e-4688-bd2e-a5256eb812d3/CM100160-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/331ce59e-0c59-4a41-adfe-3f657a778a6b/CM100169-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8c690c60-6dff-451b-9a5b-ce7bac7a5371/CM100175-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66285b7b-83e5-49b1-bf19-629b86baa087/CM100179.jpg",
        "width": 2039,
        "height": 1471,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/20bc2a92-518b-4940-99fc-f8b3959bd225/CM100181-2.jpg",
        "width": 1937,
        "height": 1548,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/730cf2a3-0c8d-466d-adfd-64f516a0016a/CM100190-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8897be0c-92e3-4fa2-a822-f5deda18a347/CM100200.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1d3db34d-17fe-4060-bc35-3740c69cc19e/CM100221-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/14df3edf-ed8f-4be0-93c8-7c9eb5f99890/CM100231.jpg",
        "width": 1823,
        "height": 1645,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6c1969b1-9983-40af-8067-b98f31fa9e73/CM100236-2.jpg",
        "width": 2304,
        "height": 1302,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/956688e6-3d83-4c09-9ae7-18df193a17b7/CM100238-2.jpg",
        "width": 2158,
        "height": 1390,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebc24876-804f-4805-be92-ff519109a3ba/CM100242.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0e67c6bc-aaf2-4a6a-a5b4-b4d77bf33e3f/CM100266.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f60d555d-b5bb-4254-acb9-ad051c0d2173/CM100279.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3aa73c5f-075f-46a8-9d2c-b6da1f3fa249/CM100287-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5538c513-1678-4410-94a5-f521a4b47c85/CM100288-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/530c7140-4231-4df6-9e59-a41a8c5ab00c/CM100294.jpg",
        "width": 2295,
        "height": 1307,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/42db2e33-0263-4032-96a2-7cfbe2bedca3/CM100296.jpg",
        "width": 1461,
        "height": 2053,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6730436e-36a0-4c11-951d-d1d3cbc3cc4b/CM100301.jpg",
        "width": 2446,
        "height": 1226,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c8cccfa4-0f39-4098-8072-b8fb3c8d6883/CM100310-2.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c75dc714-fe48-463e-a4df-afc329f86b81/CM100312.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/03996e8b-29bd-4962-9eb3-3aed45b83aff/CM100319-2.jpg",
        "width": 1405,
        "height": 2134,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/300a6142-3031-4054-99f5-87de7300f2a1/CM100322-2.jpg",
        "width": 1449,
        "height": 2069,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7064edf6-b201-49ea-abe8-5db5a0468186/CM100326-2.jpg",
        "width": 1467,
        "height": 2044,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/92c783f9-147e-4443-8a0c-c869e757dcaa/CM100340.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/26b6fa21-bbe0-4101-b226-07334ed7ca82/CM100333.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9c921c6c-2d22-4f51-b6bc-4a0fa4cacf83/CM100334-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4c9bfef8-b59f-4fcd-afa3-201f1e8d4141/CM100345.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/de306674-b35b-4d8d-ba60-db60001ecb3e/CM100349-2.jpg",
        "width": 1406,
        "height": 2132,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f529b896-fd26-4c1a-855f-9e14d8cf2fd9/CM100353-3.jpg",
        "width": 1494,
        "height": 2008,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4e2a6370-3814-4ce6-8f9f-5e2a345f5586/CM100356.jpg",
        "width": 1406,
        "height": 2132,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/61aeeb35-f183-4bc0-b53c-ac7c25d3951f/CM100361.jpg",
        "width": 1447,
        "height": 2073,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dfb3ec8d-093d-49b8-b094-a8114b78cdca/CM100359.jpg",
        "width": 1522,
        "height": 1971,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1def4442-c395-4045-b1ef-8e6cdfcca349/CM100360.jpg",
        "width": 1512,
        "height": 1984,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f633c08d-6378-4287-90b8-4548d4370793/CM100363.jpg",
        "width": 1481,
        "height": 2024,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/28c196c1-ee38-4a3a-82a8-3667aa2d9a4c/CM100368.jpg",
        "width": 1986,
        "height": 1510,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/98b997f4-cb2d-48ba-b781-0bd04c9e456e/CM100367-2.jpg",
        "width": 1986,
        "height": 1510,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76058e44-7df2-4fd8-a9a4-100a261de6f2/CM100374.jpg",
        "width": 1405,
        "height": 2135,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b27920b6-8e5b-4321-8971-80ac8df040d2/CM100381-2.jpg",
        "width": 1445,
        "height": 2076,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0a6c4bbf-e779-4750-a263-35e39dcc1063/CM100383-2.jpg",
        "width": 1510,
        "height": 1986,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e206762b-b47d-46a0-9698-1c7fad8f2916/CM100387-2.jpg",
        "width": 2008,
        "height": 1494,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a4c979a-698f-44f3-b71c-b3ed2326fbed/CM100395-2.jpg",
        "width": 2008,
        "height": 1494,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/782dee57-1e47-4dbe-85aa-92e666caa025/CM100399.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f682137-9579-45d3-abdd-0a6fbdf94ebb/CM100413-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9564acfb-5d04-4bf2-b9f9-3d03193eb943/CM100416.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f19ecefb-33e2-4b55-b3f5-8965dd3ba6d6/CM100420-2.jpg",
        "width": 1463,
        "height": 2049,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ef5171be-68d5-4b43-ac31-ce98bc96f631/CM100423.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/03f95e29-9da9-4665-b0f2-2c0f86557ac8/CM100430-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/85d95ed7-2721-478f-92ab-c4be32b724d3/CM100436.jpg",
        "width": 2154,
        "height": 1392,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/48281d8f-fca9-4e11-8993-cef2dbbbf219/CM100449-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5c9664d-31c3-4793-bf9c-e4cb27490c43/CM100476-2.jpg",
        "width": 1414,
        "height": 2120,
        "alt": "Lars & Abigael"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee0b133e-fd76-4d78-b737-81ec0d7986d8/CM100489.jpg",
        "width": 2120,
        "height": 1414,
        "alt": "Lars & Abigael"
      }
    ]
  },
  {
    "slug": "project-four-bpjf9",
    "location": "Helsinki, Finland",
    "couple": "Project & Four & Bpjf9",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "S & J",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/633b89c5-1a0f-45c3-9c60-d433b4901ea4/DSC00444.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d2a1df8-350a-4ddd-a775-18a7ccf9ea2c/DSC_4665.jpg",
        "width": 1705,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8500dfb8-bd6a-4b5f-a75f-da21fd938ed0/DSC_4678.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1e89cc01-907a-4df3-b4e5-632fae761832/DSC_4682.jpg",
        "width": 1558,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/db7b0d99-2f28-4d0a-9bde-92ad930fb0c7/DSC_4745.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a37f2123-6b89-43f3-9c7b-705760a9b0b5/DSC_4744.jpg",
        "width": 1723,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d63fc2a-57fe-4328-8b93-bfe8b2ce4954/DSC_4715.jpg",
        "width": 2133,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f39fb9b-a373-4019-97ea-c0bfb3e6b39f/DSC_4716.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/593fcb82-8737-4ca4-aa70-5b9cf6bf7e57/DSC_4750.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e867fd67-5b77-4817-91fb-f79a67e2e9e7/DSC00288.jpg",
        "width": 1358,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b53649f-4a46-4d80-9caf-890d7fc70461/DSC_4727.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b77f4ae8-7866-40cc-a5cc-9327343ccfc6/DSC_4735.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc2f472d-d3e1-4f59-97dc-8056357c2583/DSC_4728.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cda99a4d-4392-4cd1-aab4-78f0b5ff1482/DSC_4805.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/50dbec1f-a894-452d-84ea-75a049a69723/DSC_5012.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d64c80b0-1ffb-4af5-9b89-2ad2702697cd/DSC00307.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/14b19b92-fa0e-4e64-924c-206f7257998b/DSC_5011.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fb0413af-56c1-47b1-8d24-fa61bff7e9b4/DSC_4784.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7ccb69be-73c1-4e42-8c1c-43aef8b2ecfa/DSC_4778.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f03c72c-c528-4f64-ba1d-ac83ee8e2383/DSC_4730.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/271e7acd-f510-4013-8a17-6477c7951f89/DSC_4770.jpg",
        "width": 1778,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9fcf8b00-6f16-4d91-b60b-8779b92be880/DSC_4871.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec40fad0-ef4e-43ad-8913-65d17603fe57/DSC_4941.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d66aa77b-ea14-482a-bb26-cfa1b56b2c16/DSC_4975.jpg",
        "width": 2500,
        "height": 1619,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6903161-11cc-4fba-b6f3-862830dd4a45/DSC00463.jpg",
        "width": 2500,
        "height": 1739,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1e03cd01-239e-4d49-8a5b-d710df439d1f/DSC00426.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/185c1756-f70d-489c-94ed-40b3db487668/DSC00467.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b20136c-657c-4ad3-a809-12c67be65fb2/DSC00475.jpg",
        "width": 1809,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e13b1741-1982-4d0a-bbce-10d3f404ce6d/DSC00451.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f65a66a2-f0ba-469c-9945-30c97d1c9c54/DSC00441.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd047200-18cf-4841-af24-61f6ca57d813/DSC_5028.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58fadc51-b4be-4ff4-9a0c-5801d3e5bbbd/DSC_5037.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebf1c083-ce85-4d39-829f-f9f3cb8be01e/DSC_5160.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a349b94-4eef-43e6-ab2b-140ddf03bb0e/DSC_5203.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c16dbdd2-de46-4467-8571-966461873cc8/DSC00493.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d658544a-3b40-42fe-970a-8201f2324855/DSC_4936.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/595f0abf-d7da-4c91-ba55-28e751ee8232/DSC00426.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24a5f252-98cc-4d9d-b84f-882aba7f13ff/DSC00526.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f6c7887-11e9-4779-ade6-e6228264a1ea/DSC_4770.jpg",
        "width": 1778,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7b287d6c-6804-4a8b-839e-3f4980a04d60/DSC_5028.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9dc84c4-b4a8-476c-8484-53a45e2c922d/DSC_5031.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c458980e-8afa-460e-ac1b-7ca5a1d139c5/DSC_5037.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a2131e32-46ff-4f8d-9c36-a7d30c1ef581/DSC_5149.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c9b5cc1d-81ba-467c-a2fb-810d3e9f6c57/DSC_5162.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0bbe8ca-b17e-4395-9ecd-5d5f4fe92842/DSC_5185.jpg",
        "width": 2030,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72522804-09c6-4ee4-abc8-37741aee28e8/DSC_5190.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06d34991-3237-422d-8d92-37d00063777f/DSC_5242.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d609e372-9944-4a33-9570-428b75af95b4/DSC_5272.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e23ab91e-e97c-40b7-80d4-8c6384994e90/DSC_5279.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/633b89c5-1a0f-45c3-9c60-d433b4901ea4/DSC00444.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d2a1df8-350a-4ddd-a775-18a7ccf9ea2c/DSC_4665.jpg",
        "width": 1705,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8500dfb8-bd6a-4b5f-a75f-da21fd938ed0/DSC_4678.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1e89cc01-907a-4df3-b4e5-632fae761832/DSC_4682.jpg",
        "width": 1558,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/db7b0d99-2f28-4d0a-9bde-92ad930fb0c7/DSC_4745.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a37f2123-6b89-43f3-9c7b-705760a9b0b5/DSC_4744.jpg",
        "width": 1723,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d63fc2a-57fe-4328-8b93-bfe8b2ce4954/DSC_4715.jpg",
        "width": 2133,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f39fb9b-a373-4019-97ea-c0bfb3e6b39f/DSC_4716.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/593fcb82-8737-4ca4-aa70-5b9cf6bf7e57/DSC_4750.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e867fd67-5b77-4817-91fb-f79a67e2e9e7/DSC00288.jpg",
        "width": 1358,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b53649f-4a46-4d80-9caf-890d7fc70461/DSC_4727.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b77f4ae8-7866-40cc-a5cc-9327343ccfc6/DSC_4735.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc2f472d-d3e1-4f59-97dc-8056357c2583/DSC_4728.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cda99a4d-4392-4cd1-aab4-78f0b5ff1482/DSC_4805.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/50dbec1f-a894-452d-84ea-75a049a69723/DSC_5012.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d64c80b0-1ffb-4af5-9b89-2ad2702697cd/DSC00307.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/14b19b92-fa0e-4e64-924c-206f7257998b/DSC_5011.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fb0413af-56c1-47b1-8d24-fa61bff7e9b4/DSC_4784.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7ccb69be-73c1-4e42-8c1c-43aef8b2ecfa/DSC_4778.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f03c72c-c528-4f64-ba1d-ac83ee8e2383/DSC_4730.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/271e7acd-f510-4013-8a17-6477c7951f89/DSC_4770.jpg",
        "width": 1778,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9fcf8b00-6f16-4d91-b60b-8779b92be880/DSC_4871.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ec40fad0-ef4e-43ad-8913-65d17603fe57/DSC_4941.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d66aa77b-ea14-482a-bb26-cfa1b56b2c16/DSC_4975.jpg",
        "width": 2500,
        "height": 1619,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6903161-11cc-4fba-b6f3-862830dd4a45/DSC00463.jpg",
        "width": 2500,
        "height": 1739,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1e03cd01-239e-4d49-8a5b-d710df439d1f/DSC00426.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/185c1756-f70d-489c-94ed-40b3db487668/DSC00467.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b20136c-657c-4ad3-a809-12c67be65fb2/DSC00475.jpg",
        "width": 1809,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e13b1741-1982-4d0a-bbce-10d3f404ce6d/DSC00451.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f65a66a2-f0ba-469c-9945-30c97d1c9c54/DSC00441.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bd047200-18cf-4841-af24-61f6ca57d813/DSC_5028.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58fadc51-b4be-4ff4-9a0c-5801d3e5bbbd/DSC_5037.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ebf1c083-ce85-4d39-829f-f9f3cb8be01e/DSC_5160.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a349b94-4eef-43e6-ab2b-140ddf03bb0e/DSC_5203.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c16dbdd2-de46-4467-8571-966461873cc8/DSC00493.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d658544a-3b40-42fe-970a-8201f2324855/DSC_4936.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/595f0abf-d7da-4c91-ba55-28e751ee8232/DSC00426.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24a5f252-98cc-4d9d-b84f-882aba7f13ff/DSC00526.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f6c7887-11e9-4779-ade6-e6228264a1ea/DSC_4770.jpg",
        "width": 1778,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7b287d6c-6804-4a8b-839e-3f4980a04d60/DSC_5028.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e9dc84c4-b4a8-476c-8484-53a45e2c922d/DSC_5031.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c458980e-8afa-460e-ac1b-7ca5a1d139c5/DSC_5037.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a2131e32-46ff-4f8d-9c36-a7d30c1ef581/DSC_5149.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c9b5cc1d-81ba-467c-a2fb-810d3e9f6c57/DSC_5162.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c0bbe8ca-b17e-4395-9ecd-5d5f4fe92842/DSC_5185.jpg",
        "width": 2030,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/72522804-09c6-4ee4-abc8-37741aee28e8/DSC_5190.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/06d34991-3237-422d-8d92-37d00063777f/DSC_5242.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d609e372-9944-4a33-9570-428b75af95b4/DSC_5272.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e23ab91e-e97c-40b7-80d4-8c6384994e90/DSC_5279.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "S & J"
      }
    ]
  },
  {
    "slug": "project-two-ky966-wfg45",
    "location": "Helsinki, Finland",
    "couple": "Project & Two & Ky966 & Wfg45",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "A . B",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9fdfe5af-fb8d-494b-8543-724d00840d28/DSC_5507.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d687d955-0224-400e-9042-7ffca5385c16/DSC_5504.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a3ea4a8-6ffb-4718-8860-6b286196cc6d/DSC_5517.jpg",
        "width": 1916,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3bd5c3ed-b0a5-4cfd-898f-7e311ab0d9f9/DSC_5520.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36f242f7-4896-4c51-a50a-41b45b81c9ec/DSC_5525.jpg",
        "width": 1851,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7e719ec1-2b00-4065-8bfa-889e07712d90/DSC_5529.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19b48897-1009-4ea8-a2a3-fc75ca1c7d8b/DSC_5532.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cbd264f0-f835-4fde-8406-085da8cd5643/DSC_5535.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77a2ea75-d0ff-47cf-9d27-da2aad196652/DSC_5538.jpg",
        "width": 1798,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c2f8242c-bd1b-4075-ac91-364008529e66/DSC_5553.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/944a6c30-144c-4fda-84e5-e73691642ae6/DSC_5556.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8bd83334-eac1-4d33-b12a-0fcf6da94519/DSC_5559.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0625f0de-7315-4852-a2f5-eef5752fbfc1/DSC_5586.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/78ef91c9-83c2-4d4f-ba80-73d17d3fc2d2/DSC_5587.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3d9e64df-332b-4c93-a8a3-85a428746e86/DSC_5597.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1c810c41-6e28-4734-bb4c-2a978ec97c1c/DSC_5606.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c516d073-7bf7-4371-938e-347d99c649fc/DSC_5613.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/485d460c-0790-4b00-a96a-31e6ca4c6ff0/DSC_5619.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2861a352-ceb2-4251-818c-9d1b595c6a8d/DSC_5620.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f3deb74-fa51-4f31-af74-d7201c47514a/DSC_5626.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f53b7e0-530d-40da-a651-ed19512d22f0/DSC_5642.jpg",
        "width": 1732,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2c365a1a-06d1-4d85-aba8-69041dbcba1a/DSC_5658.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/edd425d5-0211-4de5-bbb4-30e10cd8be25/DSC_5676.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62c3377a-1da7-410d-a4c8-057a10052973/DSC_5681.jpg",
        "width": 2500,
        "height": 1776,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/39198a82-4fd5-4503-ab5c-e0be479a6416/DSC_5703.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d7de1452-177d-493c-9c43-ec3c5839523b/DSC_5706.jpg",
        "width": 2500,
        "height": 1703,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f086884e-59e8-494c-ac8f-c49a9d267c9e/DSC_5727.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ef5e6f3-18e9-4b5d-8bc7-1731834c7efd/DSC_5754.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6bf4c70d-bb70-429b-86e7-107a1f41a3cf/DSC_5774.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5ad88e8-c220-402b-b71f-27d3c526bb0a/DSC_5780.jpg",
        "width": 2500,
        "height": 1450,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2a5534a-a43c-478f-add5-d58e2f286426/DSC_5804.jpg",
        "width": 2500,
        "height": 1699,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2587de4-0b25-4a06-97ea-08dad14cdd82/DSC_5810.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc5af086-4409-48e9-a635-8ecd0331a64d/DSC_5813.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/54e52b24-9200-4c02-8db2-b8e387dbdfdb/DSC_5817.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f86cecd2-d143-46d6-9141-257ce3be2a24/DSC_5822.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90b0d2ce-822e-462c-80d5-e245c0ea14c5/DSC_5833.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d71edee6-f715-477a-8eab-9380445dc710/DSC_5838.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5574de2e-d346-4aa7-a624-39f303263978/DSC_5851.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/101c83ea-090b-40f0-8e35-c0dd9350ec62/DSC_5858.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1902332-90af-4bc5-a245-584b08a32e2c/DSC_5861.jpg",
        "width": 2500,
        "height": 1555,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d98224c8-b161-424a-ac17-07b9e0529861/DSC_5869.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e76e5d4-00d6-4cb6-9fbb-edd6f02e9c3f/DSC_5880.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2363fac6-27f0-4d5c-b053-1d07b6f7f0aa/DSC_5908.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18749040-4da7-4450-a2ca-d4e47e58da46/DSC_5937.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d4f5e1d6-396f-4d00-b94e-249d431f30d5/DSC_5946.jpg",
        "width": 1731,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c6714aed-51aa-4a0c-bd0a-d28c4eac546f/DSC_5955.jpg",
        "width": 2500,
        "height": 1909,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/45063dc2-affc-4676-a361-6fefc5b29acb/DSC_5962.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f75a5adb-a2a7-4ca4-b665-527d7f7ce42b/DSC_5969.jpg",
        "width": 2060,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/950035d0-56ff-4098-a0c5-5cc426aae33c/DSC_6007.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/300188e1-e242-478e-abbd-918d537e05d7/DSC_6012.jpg",
        "width": 1433,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/608a44bf-2ffd-4479-97b7-f09fb767f91d/DSC_5997.jpg",
        "width": 2500,
        "height": 1642,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5152797-dd62-4647-8e60-1459954d87c4/DSC_6009.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8fefd1c7-2450-4ca8-b768-409f0fe333ea/DSC_6017.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/02c637b3-48c9-4116-95dd-9ee125814fca/DSC_6025.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0d36b59-a680-43d1-a707-0d8953822b28/DSC_6028.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5a165ecd-4e80-4eae-9094-9cd4583f3e64/DSC_6047.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d1deece-e62f-4473-9629-85e50b404bce/DSC_6066.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0418bcd-9a94-4d93-9e42-b8a34ef515f2/DSC_6075.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e7e0e0c-d512-4364-9fef-5d66eb404592/DSC_6096.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b63a0f13-859a-4ce7-8663-60fdc0fe4508/DSC_6107.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ffa0b737-fa41-4d1c-a481-1fa1042530e2/DSC_6108.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/855f9934-a9be-454d-9f6f-4a2e718bd534/DSC_6115.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8fd857d-3b73-429a-a539-aa9971b0bb3a/DSC_6132.jpg",
        "width": 1617,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cef606eb-0f78-4b41-913e-588068a4626b/DSC_6139.jpg",
        "width": 1613,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4fd44f1c-35b3-4721-8093-8bb49da53816/DSC_6141.jpg",
        "width": 1942,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee511dff-8420-4e87-a582-731fd6d31457/DSC_6180.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b741dc9-187c-44e2-bd8b-21b58492eade/DSC_6181.jpg",
        "width": 2059,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d4897c94-3c9b-43b7-afac-f29e624d1d55/DSC_6186.jpg",
        "width": 2500,
        "height": 1962,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e89de678-901f-4e44-b5e1-6d427befe078/DSC_6170.jpg",
        "width": 2500,
        "height": 1484,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/10d7eb4a-260d-4f1b-9a19-2cc2a96d0408/DSC_6202.jpg",
        "width": 2500,
        "height": 1965,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc179bf5-7404-41fd-b4be-0bde4bfcb748/DSC_6210.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9fdfe5af-fb8d-494b-8543-724d00840d28/DSC_5507.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d687d955-0224-400e-9042-7ffca5385c16/DSC_5504.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a3ea4a8-6ffb-4718-8860-6b286196cc6d/DSC_5517.jpg",
        "width": 1916,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3bd5c3ed-b0a5-4cfd-898f-7e311ab0d9f9/DSC_5520.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/36f242f7-4896-4c51-a50a-41b45b81c9ec/DSC_5525.jpg",
        "width": 1851,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7e719ec1-2b00-4065-8bfa-889e07712d90/DSC_5529.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/19b48897-1009-4ea8-a2a3-fc75ca1c7d8b/DSC_5532.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cbd264f0-f835-4fde-8406-085da8cd5643/DSC_5535.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/77a2ea75-d0ff-47cf-9d27-da2aad196652/DSC_5538.jpg",
        "width": 1798,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c2f8242c-bd1b-4075-ac91-364008529e66/DSC_5553.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/944a6c30-144c-4fda-84e5-e73691642ae6/DSC_5556.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8bd83334-eac1-4d33-b12a-0fcf6da94519/DSC_5559.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0625f0de-7315-4852-a2f5-eef5752fbfc1/DSC_5586.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/78ef91c9-83c2-4d4f-ba80-73d17d3fc2d2/DSC_5587.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3d9e64df-332b-4c93-a8a3-85a428746e86/DSC_5597.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1c810c41-6e28-4734-bb4c-2a978ec97c1c/DSC_5606.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c516d073-7bf7-4371-938e-347d99c649fc/DSC_5613.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/485d460c-0790-4b00-a96a-31e6ca4c6ff0/DSC_5619.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2861a352-ceb2-4251-818c-9d1b595c6a8d/DSC_5620.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2f3deb74-fa51-4f31-af74-d7201c47514a/DSC_5626.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4f53b7e0-530d-40da-a651-ed19512d22f0/DSC_5642.jpg",
        "width": 1732,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2c365a1a-06d1-4d85-aba8-69041dbcba1a/DSC_5658.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/edd425d5-0211-4de5-bbb4-30e10cd8be25/DSC_5676.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/62c3377a-1da7-410d-a4c8-057a10052973/DSC_5681.jpg",
        "width": 2500,
        "height": 1776,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/39198a82-4fd5-4503-ab5c-e0be479a6416/DSC_5703.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d7de1452-177d-493c-9c43-ec3c5839523b/DSC_5706.jpg",
        "width": 2500,
        "height": 1703,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f086884e-59e8-494c-ac8f-c49a9d267c9e/DSC_5727.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1ef5e6f3-18e9-4b5d-8bc7-1731834c7efd/DSC_5754.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6bf4c70d-bb70-429b-86e7-107a1f41a3cf/DSC_5774.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5ad88e8-c220-402b-b71f-27d3c526bb0a/DSC_5780.jpg",
        "width": 2500,
        "height": 1450,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e2a5534a-a43c-478f-add5-d58e2f286426/DSC_5804.jpg",
        "width": 2500,
        "height": 1699,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2587de4-0b25-4a06-97ea-08dad14cdd82/DSC_5810.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc5af086-4409-48e9-a635-8ecd0331a64d/DSC_5813.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/54e52b24-9200-4c02-8db2-b8e387dbdfdb/DSC_5817.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f86cecd2-d143-46d6-9141-257ce3be2a24/DSC_5822.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90b0d2ce-822e-462c-80d5-e245c0ea14c5/DSC_5833.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d71edee6-f715-477a-8eab-9380445dc710/DSC_5838.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5574de2e-d346-4aa7-a624-39f303263978/DSC_5851.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/101c83ea-090b-40f0-8e35-c0dd9350ec62/DSC_5858.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c1902332-90af-4bc5-a245-584b08a32e2c/DSC_5861.jpg",
        "width": 2500,
        "height": 1555,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d98224c8-b161-424a-ac17-07b9e0529861/DSC_5869.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e76e5d4-00d6-4cb6-9fbb-edd6f02e9c3f/DSC_5880.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2363fac6-27f0-4d5c-b053-1d07b6f7f0aa/DSC_5908.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18749040-4da7-4450-a2ca-d4e47e58da46/DSC_5937.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d4f5e1d6-396f-4d00-b94e-249d431f30d5/DSC_5946.jpg",
        "width": 1731,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c6714aed-51aa-4a0c-bd0a-d28c4eac546f/DSC_5955.jpg",
        "width": 2500,
        "height": 1909,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/45063dc2-affc-4676-a361-6fefc5b29acb/DSC_5962.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f75a5adb-a2a7-4ca4-b665-527d7f7ce42b/DSC_5969.jpg",
        "width": 2060,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/950035d0-56ff-4098-a0c5-5cc426aae33c/DSC_6007.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/300188e1-e242-478e-abbd-918d537e05d7/DSC_6012.jpg",
        "width": 1433,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/608a44bf-2ffd-4479-97b7-f09fb767f91d/DSC_5997.jpg",
        "width": 2500,
        "height": 1642,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5152797-dd62-4647-8e60-1459954d87c4/DSC_6009.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8fefd1c7-2450-4ca8-b768-409f0fe333ea/DSC_6017.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/02c637b3-48c9-4116-95dd-9ee125814fca/DSC_6025.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0d36b59-a680-43d1-a707-0d8953822b28/DSC_6028.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5a165ecd-4e80-4eae-9094-9cd4583f3e64/DSC_6047.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5d1deece-e62f-4473-9629-85e50b404bce/DSC_6066.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f0418bcd-9a94-4d93-9e42-b8a34ef515f2/DSC_6075.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e7e0e0c-d512-4364-9fef-5d66eb404592/DSC_6096.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b63a0f13-859a-4ce7-8663-60fdc0fe4508/DSC_6107.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ffa0b737-fa41-4d1c-a481-1fa1042530e2/DSC_6108.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/855f9934-a9be-454d-9f6f-4a2e718bd534/DSC_6115.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e8fd857d-3b73-429a-a539-aa9971b0bb3a/DSC_6132.jpg",
        "width": 1617,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cef606eb-0f78-4b41-913e-588068a4626b/DSC_6139.jpg",
        "width": 1613,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4fd44f1c-35b3-4721-8093-8bb49da53816/DSC_6141.jpg",
        "width": 1942,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ee511dff-8420-4e87-a582-731fd6d31457/DSC_6180.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8b741dc9-187c-44e2-bd8b-21b58492eade/DSC_6181.jpg",
        "width": 2059,
        "height": 2500,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d4897c94-3c9b-43b7-afac-f29e624d1d55/DSC_6186.jpg",
        "width": 2500,
        "height": 1962,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e89de678-901f-4e44-b5e1-6d427befe078/DSC_6170.jpg",
        "width": 2500,
        "height": 1484,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/10d7eb4a-260d-4f1b-9a19-2cc2a96d0408/DSC_6202.jpg",
        "width": 2500,
        "height": 1965,
        "alt": "A . B"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cc179bf5-7404-41fd-b4be-0bde4bfcb748/DSC_6210.jpg",
        "width": 1667,
        "height": 2500,
        "alt": "A . B"
      }
    ]
  },
  {
    "slug": "t-m",
    "location": "Helsinki, Finland",
    "couple": "T & M",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "T & M",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5a46aeed-6d82-4efa-a0f7-e4976cc9f53c/A7301361.jpg",
        "width": 1165,
        "height": 1715,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8485058a-dcc7-4b9b-91e5-91bb4b0f4e0f/A7401462.jpg",
        "width": 1885,
        "height": 1061,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d87162b5-0f76-4a09-8a3a-a0ea6d7ea3e9/A7401368.jpg",
        "width": 1192,
        "height": 1676,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7c48d1f7-bde4-489f-a82a-66087e417edc/A7401419.jpg",
        "width": 1061,
        "height": 1885,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/805d41f4-c679-483a-a577-4ed4b34b6ab5/A7401439.jpg",
        "width": 1706,
        "height": 1172,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6952f051-4ff8-4513-a373-6cf2967cd30d/A7401679.jpg",
        "width": 1316,
        "height": 1518,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5a46aeed-6d82-4efa-a0f7-e4976cc9f53c/A7301361.jpg",
        "width": 1165,
        "height": 1715,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8485058a-dcc7-4b9b-91e5-91bb4b0f4e0f/A7401462.jpg",
        "width": 1885,
        "height": 1061,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d87162b5-0f76-4a09-8a3a-a0ea6d7ea3e9/A7401368.jpg",
        "width": 1192,
        "height": 1676,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7c48d1f7-bde4-489f-a82a-66087e417edc/A7401419.jpg",
        "width": 1061,
        "height": 1885,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/805d41f4-c679-483a-a577-4ed4b34b6ab5/A7401439.jpg",
        "width": 1706,
        "height": 1172,
        "alt": "T & M"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6952f051-4ff8-4513-a373-6cf2967cd30d/A7401679.jpg",
        "width": 1316,
        "height": 1518,
        "alt": "T & M"
      }
    ]
  },
  {
    "slug": "erika-j",
    "location": "Helsinki, Finland",
    "couple": "Erika & J",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "Erika & J",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22c084ba-a558-450d-87f3-e169a7205cb1/JPM07341.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f87175c-c6ea-4f26-a0cc-4b24590d4732/JPM06752.jpg",
        "width": 5267,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d049fbc8-aeb1-488c-add4-e657868dd24c/JPM07307.jpg",
        "width": 6000,
        "height": 3881,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cefcd6bf-4057-4cbf-863b-add496221de7/JPM06761.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d831ab9b-04fa-4eb5-8110-20ef7654f19e/JPM07311.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4fc13451-b449-46c7-8eb3-2c1236697dc5/JPM06865.jpg",
        "width": 5842,
        "height": 3895,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3d72812c-5de8-49d5-a6e5-cea2ebe53a13/JPM06980.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b63e940f-f977-4d57-8794-9aab676a51bd/JPM07078.jpg",
        "width": 5234,
        "height": 3929,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1714074458404-BXUSDE4WZVQQD5TZXD4C/JPM07260.jpg",
        "width": 2500,
        "height": 1666,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b630d558-1e35-469d-bc7a-4997633e5d8e/JPM07282.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22c084ba-a558-450d-87f3-e169a7205cb1/JPM07341.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3f87175c-c6ea-4f26-a0cc-4b24590d4732/JPM06752.jpg",
        "width": 5267,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d049fbc8-aeb1-488c-add4-e657868dd24c/JPM07307.jpg",
        "width": 6000,
        "height": 3881,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cefcd6bf-4057-4cbf-863b-add496221de7/JPM06761.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d831ab9b-04fa-4eb5-8110-20ef7654f19e/JPM07311.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4fc13451-b449-46c7-8eb3-2c1236697dc5/JPM06865.jpg",
        "width": 5842,
        "height": 3895,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3d72812c-5de8-49d5-a6e5-cea2ebe53a13/JPM06980.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b63e940f-f977-4d57-8794-9aab676a51bd/JPM07078.jpg",
        "width": 5234,
        "height": 3929,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1714074458404-BXUSDE4WZVQQD5TZXD4C/JPM07260.jpg",
        "width": 2500,
        "height": 1666,
        "alt": "Erika & J"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b630d558-1e35-469d-bc7a-4997633e5d8e/JPM07282.jpg",
        "width": 6000,
        "height": 4000,
        "alt": "Erika & J"
      }
    ]
  },
  {
    "slug": "project-two-kynyb",
    "location": "Helsinki, Finland",
    "couple": "Project & Two & Kynyb",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "AMARA & VILMA",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7dc71c0f-1038-4c4d-8d3d-abfaa5ff2e22/DSC09151.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0240c5b2-a15f-4d84-b223-f2a51261f6d5/DSC09154.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1955b374-b5d4-4f70-aa64-c27799264927/DSC09217.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a6fdb52-fafd-458a-b31d-55d58a10d52e/DSC09155_.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/82632866-9012-4b74-ba12-6dc9c9449cb4/Wilma+and+the+family.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66b2427b-1a46-4bf1-b5d1-01ecda7cb24a/DSC09304.jpg",
        "width": 2500,
        "height": 1405,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0cfd44b-9731-4f68-8982-4a0f7745b656/DSC09174.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09180d1b-4fde-4b8c-86cb-e7db8dfb965f/DSC09161.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8695f20f-e611-49d4-92ef-84c06be31a81/DSC09163.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b29dab6b-9433-4539-ad2d-c4bdeac926a3/DSC09138.jpg",
        "width": 1498,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b3c69bf7-8bdf-4833-b69e-3c799a48fe82/DSC09248.jpg",
        "width": 1611,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e672ef18-d457-4b8b-b697-7369a31b35e7/Wima.Amara.onbridge-2.jpg",
        "width": 1579,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fd5dc553-cfbd-4f4d-86be-c86ecd3110f5/DSC09255-2.jpg",
        "width": 2500,
        "height": 1483,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aa920996-349f-4e9e-871f-b458bd52da12/DSC09239.jpg",
        "width": 1441,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bed01625-0dc2-4025-a63a-603c440bc0ca/DSC09292-2.jpg",
        "width": 1544,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8421e331-649c-4ff4-8ae7-e472d2e0a524/DSC09224.jpg",
        "width": 1405,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc69597f-5fae-4694-a20a-86441b30b8da/DSC09182.jpg",
        "width": 1490,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e5f7754-0581-4bdd-a518-e411b568d75d/DSC09226.jpg",
        "width": 1704,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f312692b-85fc-49cb-b63d-bf57a4bb2b27/DSC09235.jpg",
        "width": 1486,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7fe43790-53db-453d-9816-828fadab475f/DSC09299.jpg",
        "width": 2500,
        "height": 1679,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/07e29bfe-6157-4e00-a508-850a17e0532b/DSC09288.jpg",
        "width": 1405,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5604dfa-abca-4520-892f-05d307e91277/DSC09231.jpg",
        "width": 1342,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a142137b-9b1f-4c8c-b56e-855af52dfb80/_MG_3427.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35747ddb-27a4-4318-bb1c-98c3bd74c883/DSC09299.jpg",
        "width": 2500,
        "height": 1679,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88774a58-b513-408a-92f4-7303ce72731d/DSC09292-2.jpg",
        "width": 1560,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/43acc328-0a0a-41ef-9476-0407fd1e1a8e/DSC09298.jpg",
        "width": 1903,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d3cdc96-1901-4c94-a955-02c398c0adf8/DSC09311.jpg",
        "width": 2500,
        "height": 2024,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18a6d1f1-51ac-4064-98a6-7a2d3e1deed4/DSC09361.jpg",
        "width": 2500,
        "height": 1405,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16e9f1f2-e735-45e4-8c85-9b144413f4cb/DSC09370.jpg",
        "width": 2500,
        "height": 1405,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22c81220-e0a5-4b07-965c-2a99393b19ce/DSC09416.jpg",
        "width": 1405,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/14d37c28-25d5-4477-8bb8-e2460c143cc1/DSC09268.jpg",
        "width": 2500,
        "height": 1747,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/64f68c7b-4cdd-4704-be07-b3ffd39df3f7/Dancing+Green+trousrs.jpg",
        "width": 2500,
        "height": 1405,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a357dac-a6eb-4113-90ce-7b7555576685/_MG_6128.jpg",
        "width": 1997,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5b595d1-0f96-479f-8aec-afa1261513c3/_MG_6059.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70818dc1-5e0f-4e36-8240-61b2072de00d/IMG_6052.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b9c7999-ca0a-4d88-bc89-ec57c81def36/IMG_6053.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7b8479e-756c-4a4f-a702-238d022e388f/IMG_6056.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/05da0a73-cb06-40cb-8be1-668c2a5c6fdb/IMG_6110.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90dd0f76-7279-4ed6-9f93-17026216c40e/IMG_6120.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7dc71c0f-1038-4c4d-8d3d-abfaa5ff2e22/DSC09151.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0240c5b2-a15f-4d84-b223-f2a51261f6d5/DSC09154.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1955b374-b5d4-4f70-aa64-c27799264927/DSC09217.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6a6fdb52-fafd-458a-b31d-55d58a10d52e/DSC09155_.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/82632866-9012-4b74-ba12-6dc9c9449cb4/Wilma+and+the+family.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66b2427b-1a46-4bf1-b5d1-01ecda7cb24a/DSC09304.jpg",
        "width": 2500,
        "height": 1405,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0cfd44b-9731-4f68-8982-4a0f7745b656/DSC09174.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/09180d1b-4fde-4b8c-86cb-e7db8dfb965f/DSC09161.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8695f20f-e611-49d4-92ef-84c06be31a81/DSC09163.jpg",
        "width": 2500,
        "height": 1404,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b29dab6b-9433-4539-ad2d-c4bdeac926a3/DSC09138.jpg",
        "width": 1498,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b3c69bf7-8bdf-4833-b69e-3c799a48fe82/DSC09248.jpg",
        "width": 1611,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e672ef18-d457-4b8b-b697-7369a31b35e7/Wima.Amara.onbridge-2.jpg",
        "width": 1579,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fd5dc553-cfbd-4f4d-86be-c86ecd3110f5/DSC09255-2.jpg",
        "width": 2500,
        "height": 1483,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aa920996-349f-4e9e-871f-b458bd52da12/DSC09239.jpg",
        "width": 1441,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bed01625-0dc2-4025-a63a-603c440bc0ca/DSC09292-2.jpg",
        "width": 1544,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8421e331-649c-4ff4-8ae7-e472d2e0a524/DSC09224.jpg",
        "width": 1405,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dc69597f-5fae-4694-a20a-86441b30b8da/DSC09182.jpg",
        "width": 1490,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9e5f7754-0581-4bdd-a518-e411b568d75d/DSC09226.jpg",
        "width": 1704,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f312692b-85fc-49cb-b63d-bf57a4bb2b27/DSC09235.jpg",
        "width": 1486,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7fe43790-53db-453d-9816-828fadab475f/DSC09299.jpg",
        "width": 2500,
        "height": 1679,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/07e29bfe-6157-4e00-a508-850a17e0532b/DSC09288.jpg",
        "width": 1405,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f5604dfa-abca-4520-892f-05d307e91277/DSC09231.jpg",
        "width": 1342,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a142137b-9b1f-4c8c-b56e-855af52dfb80/_MG_3427.jpg",
        "width": 2500,
        "height": 1667,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/35747ddb-27a4-4318-bb1c-98c3bd74c883/DSC09299.jpg",
        "width": 2500,
        "height": 1679,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/88774a58-b513-408a-92f4-7303ce72731d/DSC09292-2.jpg",
        "width": 1560,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/43acc328-0a0a-41ef-9476-0407fd1e1a8e/DSC09298.jpg",
        "width": 1903,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6d3cdc96-1901-4c94-a955-02c398c0adf8/DSC09311.jpg",
        "width": 2500,
        "height": 2024,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18a6d1f1-51ac-4064-98a6-7a2d3e1deed4/DSC09361.jpg",
        "width": 2500,
        "height": 1405,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16e9f1f2-e735-45e4-8c85-9b144413f4cb/DSC09370.jpg",
        "width": 2500,
        "height": 1405,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/22c81220-e0a5-4b07-965c-2a99393b19ce/DSC09416.jpg",
        "width": 1405,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/14d37c28-25d5-4477-8bb8-e2460c143cc1/DSC09268.jpg",
        "width": 2500,
        "height": 1747,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/64f68c7b-4cdd-4704-be07-b3ffd39df3f7/Dancing+Green+trousrs.jpg",
        "width": 2500,
        "height": 1405,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7a357dac-a6eb-4113-90ce-7b7555576685/_MG_6128.jpg",
        "width": 1997,
        "height": 2500,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b5b595d1-0f96-479f-8aec-afa1261513c3/_MG_6059.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70818dc1-5e0f-4e36-8240-61b2072de00d/IMG_6052.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2b9c7999-ca0a-4d88-bc89-ec57c81def36/IMG_6053.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e7b8479e-756c-4a4f-a702-238d022e388f/IMG_6056.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/05da0a73-cb06-40cb-8be1-668c2a5c6fdb/IMG_6110.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/90dd0f76-7279-4ed6-9f93-17026216c40e/IMG_6120.jpg",
        "width": 3888,
        "height": 2592,
        "alt": "AMARA & VILMA"
      }
    ]
  },
  {
    "slug": "project-one-3wgjx",
    "location": "Helsinki, Finland",
    "couple": "Project & One & 3wgjx",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "T & S",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1653226633196-S4WRGZAUJBGBFKO9YY09/Copy%252Bof%252BND8_2291.jpg",
        "width": 2092,
        "height": 1569,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/caa718e2-9da1-499d-9788-210fe67a3755/ND8_2622.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f798d09b-0d1f-4c7c-9245-303f9a230111/ND8_2410.jpg",
        "width": 7171,
        "height": 4592,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66a916a7-8f30-4717-b604-abd55d8b9ce6/ND8_2547.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3576c652-7f4f-435a-af4d-f1e2d0fc9906/ND8_2615.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89bed519-2941-4c6a-80d7-e4e010db2e99/ND8_2629.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58eb8515-ffbb-4fe6-a013-18f240e60e1c/ND8_2410.jpg",
        "width": 7171,
        "height": 4592,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aadf7ab3-e849-45ec-a8ea-4066bd8413bd/ND8_2540.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/190fc099-e3e2-4c58-89de-7f0e7d8ea4c8/ND8_2639.jpg",
        "width": 4639,
        "height": 3093,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a400649f-28c9-489b-9d75-232c983496ef/ND8_2659.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fe553c9d-5c49-4a0b-a2b8-7b5b0bb2ac07/ND8_2573.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1653226633196-S4WRGZAUJBGBFKO9YY09/Copy%252Bof%252BND8_2291.jpg",
        "width": 2092,
        "height": 1569,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/caa718e2-9da1-499d-9788-210fe67a3755/ND8_2622.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f798d09b-0d1f-4c7c-9245-303f9a230111/ND8_2410.jpg",
        "width": 7171,
        "height": 4592,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/66a916a7-8f30-4717-b604-abd55d8b9ce6/ND8_2547.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3576c652-7f4f-435a-af4d-f1e2d0fc9906/ND8_2615.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/89bed519-2941-4c6a-80d7-e4e010db2e99/ND8_2629.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/58eb8515-ffbb-4fe6-a013-18f240e60e1c/ND8_2410.jpg",
        "width": 7171,
        "height": 4592,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/aadf7ab3-e849-45ec-a8ea-4066bd8413bd/ND8_2540.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/190fc099-e3e2-4c58-89de-7f0e7d8ea4c8/ND8_2639.jpg",
        "width": 4639,
        "height": 3093,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a400649f-28c9-489b-9d75-232c983496ef/ND8_2659.jpg",
        "width": 7360,
        "height": 4912,
        "alt": "T & S"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fe553c9d-5c49-4a0b-a2b8-7b5b0bb2ac07/ND8_2573.jpg",
        "width": 4912,
        "height": 7360,
        "alt": "T & S"
      }
    ]
  },
  {
    "slug": "t-v",
    "location": "Helsinki, Finland",
    "couple": "T & V",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "T @ V",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b4b7fa7-b9d3-4f2e-a9b1-1daa96a41dc3/IMG_8526.jpg",
        "width": 3648,
        "height": 5351,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f3caf81-7441-4a4f-bcd3-df47eecb88f1/IMG_8462.jpg",
        "width": 5351,
        "height": 3527,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b30c8a8-6e97-426f-86c5-c35306ae52bc/IMG_8483.jpg",
        "width": 2590,
        "height": 3885,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/635ef1ad-f9ac-40a0-a212-c11260c25b6b/IMG_8496.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0bafeb98-c14c-4e6d-9023-1308f2ad0f5b/IMG_8481.jpg",
        "width": 5311,
        "height": 3535,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f30ddbd3-6845-4459-9996-3c017c47c717/IMG_8512.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b7b7db3-abea-4b97-a6cf-5936625bb8e1/IMG_8519.jpg",
        "width": 3515,
        "height": 5416,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a744aca-0ffa-48ec-893d-11b25e6ea032/IMG_8513.jpg",
        "width": 3484,
        "height": 5226,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/150dc7df-5684-4c3f-8074-8bfcf1d2a7c0/IMG_8528.jpg",
        "width": 3648,
        "height": 5436,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9adafea1-e254-49e9-b4fb-0f9a4c4b07ea/IMG_8546.jpg",
        "width": 5028,
        "height": 3301,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69394f78-2162-470f-ba1a-07333c84d885/IMG_8556.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afecbab5-97fd-4586-9e36-3798563d010f/IMG_8565.jpg",
        "width": 5472,
        "height": 3648,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70260858-f106-4a9a-bcbc-3d5bb0c55cb8/IMG_8577.jpg",
        "width": 3055,
        "height": 4854,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c9d17774-9834-40ab-9a15-027880008f72/IMG_8497.jpg",
        "width": 2886,
        "height": 4637,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b475d9f2-1cce-4907-b3dd-17feb6760550/IMG_8595.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7d690c0c-aaf9-4678-947c-72bb8ba9feb7/IMG_8618.jpg",
        "width": 3885,
        "height": 2590,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/929e05c5-0b74-4b14-80d0-0481795081aa/IMG_8637.jpg",
        "width": 2590,
        "height": 3885,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2280f98e-3ca5-4ace-91ac-a0ebf6299f69/IMG_8519.jpg",
        "width": 3528,
        "height": 5292,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ae397b71-52fb-4f5e-99f4-0067ef209b85/IMG_8525.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/64a8bf59-3520-461c-9e4c-d51c2745a96a/IMG_8595.jpg",
        "width": 3440,
        "height": 5173,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b4b7fa7-b9d3-4f2e-a9b1-1daa96a41dc3/IMG_8526.jpg",
        "width": 3648,
        "height": 5351,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f3caf81-7441-4a4f-bcd3-df47eecb88f1/IMG_8462.jpg",
        "width": 5351,
        "height": 3527,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b30c8a8-6e97-426f-86c5-c35306ae52bc/IMG_8483.jpg",
        "width": 2590,
        "height": 3885,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/635ef1ad-f9ac-40a0-a212-c11260c25b6b/IMG_8496.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0bafeb98-c14c-4e6d-9023-1308f2ad0f5b/IMG_8481.jpg",
        "width": 5311,
        "height": 3535,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f30ddbd3-6845-4459-9996-3c017c47c717/IMG_8512.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6b7b7db3-abea-4b97-a6cf-5936625bb8e1/IMG_8519.jpg",
        "width": 3515,
        "height": 5416,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a744aca-0ffa-48ec-893d-11b25e6ea032/IMG_8513.jpg",
        "width": 3484,
        "height": 5226,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/150dc7df-5684-4c3f-8074-8bfcf1d2a7c0/IMG_8528.jpg",
        "width": 3648,
        "height": 5436,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/9adafea1-e254-49e9-b4fb-0f9a4c4b07ea/IMG_8546.jpg",
        "width": 5028,
        "height": 3301,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/69394f78-2162-470f-ba1a-07333c84d885/IMG_8556.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/afecbab5-97fd-4586-9e36-3798563d010f/IMG_8565.jpg",
        "width": 5472,
        "height": 3648,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/70260858-f106-4a9a-bcbc-3d5bb0c55cb8/IMG_8577.jpg",
        "width": 3055,
        "height": 4854,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c9d17774-9834-40ab-9a15-027880008f72/IMG_8497.jpg",
        "width": 2886,
        "height": 4637,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b475d9f2-1cce-4907-b3dd-17feb6760550/IMG_8595.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7d690c0c-aaf9-4678-947c-72bb8ba9feb7/IMG_8618.jpg",
        "width": 3885,
        "height": 2590,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/929e05c5-0b74-4b14-80d0-0481795081aa/IMG_8637.jpg",
        "width": 2590,
        "height": 3885,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2280f98e-3ca5-4ace-91ac-a0ebf6299f69/IMG_8519.jpg",
        "width": 3528,
        "height": 5292,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ae397b71-52fb-4f5e-99f4-0067ef209b85/IMG_8525.jpg",
        "width": 3648,
        "height": 5472,
        "alt": "T @ V"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/64a8bf59-3520-461c-9e4c-d51c2745a96a/IMG_8595.jpg",
        "width": 3440,
        "height": 5173,
        "alt": "T @ V"
      }
    ]
  },
  {
    "slug": "kalle-anni",
    "location": "Helsinki, Finland",
    "couple": "Kalle & Anni",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "KALLE & ANNI",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/539ecb28-229e-4cb3-907e-b0043dff621b/069_ND8_4758.jpg",
        "width": 1965,
        "height": 1526,
        "alt": "KALLE & ANNI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3a4d417b-5a20-4701-9296-4b932b274a86/111_ND8_4800.jpg",
        "width": 2436,
        "height": 1231,
        "alt": "KALLE & ANNI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c77564f6-f3d4-4205-b0d9-5df8333758cc/146_ND8_4835.jpg",
        "width": 1977,
        "height": 1516,
        "alt": "KALLE & ANNI"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/83f379bf-b85c-4a2a-85d7-f3f23884fa30/122_ND8_4811.jpg",
        "width": 1473,
        "height": 2035,
        "alt": "KALLE & ANNI"
      }
    ]
  },
  {
    "slug": "project-two-ky966-4bm2m",
    "location": "Helsinki, Finland",
    "couple": "Project & Two & Ky966 & 4bm2m",
    "date": "September 20, 2023",
    "story": "An atmospheric wedding story captured with a focus on cinematic details and emotional moments.",    "title": "O & O",
    "images": [
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3e9567b0-1506-4eb8-8f61-a882d1abf062/DSC09836.jpg",
        "width": 6919,
        "height": 3894,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/780da373-cf93-4ddc-bf07-c35869e21361/DSC09929.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fb5faa42-e827-4172-9d14-1b11f0ab60c2/DSC00106.jpg",
        "width": 3526,
        "height": 4542,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7e357944-7ef6-4cd8-93d3-25c3b2ea4383/DSC00027.jpg",
        "width": 4612,
        "height": 4449,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b78d49c0-45ad-489a-9fa7-0e73cc16ace2/DSC00042.jpg",
        "width": 4083,
        "height": 5264,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4587a74c-3ec5-42c6-859f-dd7af67817e1/DSC09800.jpg",
        "width": 5033,
        "height": 3810,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6517af57-de0f-4604-aef2-d0b03f0ca58b/DSC09480.jpg",
        "width": 4622,
        "height": 3172,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/91cc04ca-a4c1-4e80-8ab0-0a309ca787eb/DSC00075.jpg",
        "width": 6816,
        "height": 4501,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/42e4128b-9443-4545-b182-b4bbbc88815d/DSC00109.jpg",
        "width": 4459,
        "height": 6587,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4d03c0ad-c290-4055-973b-6f0d40179754/DSC09592.jpg",
        "width": 6048,
        "height": 4308,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2a8ee819-2d0d-41e7-8553-c13d7423ebac/DSC00340.jpg",
        "width": 4173,
        "height": 6623,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/24c14215-d146-4759-add4-2e520a9754fb/DSC00149-Enhanced-NR.jpg",
        "width": 4308,
        "height": 6978,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e48bb63c-6078-438c-8912-ac4760917a43/DSC00179.jpg",
        "width": 4404,
        "height": 5772,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5dafd865-0164-4e83-ac8e-cc210d041e7d/DSC09390.jpg",
        "width": 4672,
        "height": 5624,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/870ab297-6abc-4307-94e1-d65bb8979ac8/DSC09351.jpg",
        "width": 4672,
        "height": 6978,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1191892a-46b5-4eb6-8150-1719157ba2f0/DSC09354.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0e858c9c-1fc9-4654-994d-06b962dc9356/DSC09369.jpg",
        "width": 5404,
        "height": 4014,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c650dbf9-34b7-462b-9684-2e1cbc54bb84/DSC09375.jpg",
        "width": 5514,
        "height": 2951,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1767736995914-I3J5NSVSWE6KEXLONYEP/DSC09386.jpg",
        "width": 2500,
        "height": 3680,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/863de96e-4d5e-4465-b4ac-d05703c7519e/DSC09389.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/091b64d6-12fc-425a-aaba-5dc2da290cb9/DSC09412.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5ceee039-434f-473f-94ed-196de175cfed/DSC09416.jpg",
        "width": 2988,
        "height": 2233,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/68b9a469-b6cb-403b-8148-bfae69ca0f23/DSC09430.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/884c9b15-597e-40b3-b64b-210b25294f12/DSC09817.jpg",
        "width": 1779,
        "height": 2256,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/ce2daac9-01a4-4223-a017-fe1c5a9b2ecb/DSC09433.jpg",
        "width": 4639,
        "height": 6572,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/49cc7b9a-82f7-4556-8e7c-240b6b0fbb1f/DSC09438.jpg",
        "width": 4015,
        "height": 6014,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/777e5b31-f3e9-4ffd-a77c-8e99b29947cf/DSC09446.jpg",
        "width": 3679,
        "height": 4677,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fb8e6311-3e2c-450e-83f5-3932779687ca/DSC09473.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/eea7a8db-a52e-4cc5-8ee5-cb30d2e02e56/DSC09478.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d6c651aa-beb5-4696-8b2c-831b3d4d357f/DSC09474.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d4f98296-a9eb-4ae9-9e72-e767805621a9/DSC09489.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dfb3b689-d8a4-4a57-914c-18e7a37c2505/DSC09485.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/67c4ff11-1feb-4a66-95f1-cd586a7f79b9/DSC09493.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/020935c8-e542-4cdf-a65f-5736d8c67543/DSC09497.jpg",
        "width": 4498,
        "height": 6660,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1cd9fa0b-8055-4f8e-bf85-0597990531d9/DSC09513.jpg",
        "width": 3840,
        "height": 3954,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/e0c73114-7416-46b4-919e-0cd5e39ed014/DSC09521.jpg",
        "width": 5454,
        "height": 3904,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d18118f3-94ac-42b9-bbdc-6d4f182b80bb/DSC09552.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/16ac1613-5a15-4bcc-a62e-c51914bca6de/DSC09560.jpg",
        "width": 6548,
        "height": 4149,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2208bd5d-9119-48f4-b1ae-f542301f23a6/DSC09565.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/bafe6535-5974-44a0-84c2-358f66532993/DSC09585.jpg",
        "width": 7008,
        "height": 4308,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b514087-ea3e-43bb-8746-becf79289fb8/DSC09596.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a0273626-34b1-4153-b4ed-b0de5f119dc2/DSC09607.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/200a16d5-ca74-45e8-b5e2-e254bf580226/DSC09609.jpg",
        "width": 5868,
        "height": 4308,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f2269e9e-b5be-428c-813f-5e432a4d1b24/DSC09617.jpg",
        "width": 6106,
        "height": 3927,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6ec332d9-721c-4acc-baee-a257d45f6afe/DSC09620.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/cd1e8f0d-d34e-4019-901a-9dde11a67d55/DSC09621.jpg",
        "width": 6086,
        "height": 3907,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fb8bfb46-6be5-4dcb-a5c2-6df56304f602/DSC09623.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d8c5c223-1718-4998-a82d-67ab97dda4f3/DSC09632.jpg",
        "width": 6236,
        "height": 4308,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/18c3d568-db4b-42af-a0c1-16c6494b0a71/DSC09636.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/7ecedc9a-7236-44b2-9c48-203f92df13bd/DSC09670.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1144b74f-5a7e-47c8-8ae6-cba9b0f901ae/DSC09675.jpg",
        "width": 6916,
        "height": 3892,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/df273173-ba17-40b7-84ff-37cba58d45a0/DSC09682.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/0f09076e-86bb-434e-b690-db74a86acc06/DSC09688.jpg",
        "width": 6751,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/493d4154-5e19-4751-a718-73625014be0e/DSC09690.jpg",
        "width": 6691,
        "height": 4250,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/255ea9cd-cb41-4056-9aa8-918214b7b7fc/DSC09695.jpg",
        "width": 5405,
        "height": 3987,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6f2438a1-d3c1-483e-ba1c-6ea76da2d34b/DSC09698.jpg",
        "width": 4624,
        "height": 7008,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/46d70627-cb08-4176-81a1-8aca72df96db/DSC09708.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1675b407-44dd-4a06-b1d2-d7ef020718d2/DSC09709.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/624b78b4-50cf-45f1-85cc-15466d3e9a25/DSC09714.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/b6f7340e-9d5a-4bc2-90e3-14251e0b5a49/DSC09716.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8085b23a-772b-48d7-ac65-b5c19fb0462c/DSC09718.jpg",
        "width": 4428,
        "height": 6376,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/6bd58a6c-19cc-4806-aa1e-94d9b9d18db9/DSC09720.jpg",
        "width": 4554,
        "height": 6376,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3b9b8a0b-5b2b-42dc-b58a-68d20d259d15/DSC09727.jpg",
        "width": 7008,
        "height": 4589,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/08cc849d-c545-435a-a139-f105e408b030/DSC09730.jpg",
        "width": 7008,
        "height": 4589,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f1eb0698-90ca-4509-9802-001d6fe41794/DSC09736.jpg",
        "width": 4605,
        "height": 6641,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f318c327-de43-4694-9cb0-3a4c9b13dcc9/DSC09741.jpg",
        "width": 3915,
        "height": 5853,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5e7d3830-e8d2-4657-80b5-50aba21f5403/DSC09743.jpg",
        "width": 4030,
        "height": 6210,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/980f664e-6d2b-42e4-a558-858799d43664/DSC09745.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1b1e4d54-ac54-49bc-b375-647f0f29c83c/DSC09747.jpg",
        "width": 4357,
        "height": 5956,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c245c276-331e-496d-b139-e1f4630dc58a/DSC09751.jpg",
        "width": 3944,
        "height": 7008,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/5b6517f9-c644-4435-82d6-0d86dea53604/DSC09753.jpg",
        "width": 4165,
        "height": 6090,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/1c0e4412-d57e-47b5-9c2e-471ce619698c/DSC09754.jpg",
        "width": 4288,
        "height": 6052,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/33aa2446-b683-4635-8a4f-2b157360eb5a/DSC09797-Enhanced-NR.jpg",
        "width": 6808,
        "height": 4161,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/986833a5-096c-4937-9c26-cbef7a559178/DSC09805.jpg",
        "width": 3278,
        "height": 3593,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/76f6ed7a-2e52-4c9d-a090-4532d324ce00/DSC09807.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dfc059aa-eb59-488d-88a9-73d850191c35/DSC09820.jpg",
        "width": 4672,
        "height": 7008,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/360a7199-75fb-4e9d-bad3-ed059a18f6b8/DSC09829.jpg",
        "width": 4308,
        "height": 7008,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3e9567b0-1506-4eb8-8f61-a882d1abf062/DSC09836.jpg",
        "width": 6919,
        "height": 3894,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/8a96bfe8-fdab-4d61-8f6c-96ff0efe4f03/DSC09844.jpg",
        "width": 4233,
        "height": 5715,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/dbec044e-5b55-4eae-a41c-224eb3a60cee/DSC09871.jpg",
        "width": 6728,
        "height": 4190,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/99e69e96-6c95-4830-ae64-dd747262e47a/DSC09881.jpg",
        "width": 4672,
        "height": 6602,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f897b0b6-fca2-4169-8a1b-f12a0a210555/DSC09896-Edit.jpg",
        "width": 3168,
        "height": 3021,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/71c3149c-f0ee-49ee-8074-27f8daccd258/DSC09938.jpg",
        "width": 4428,
        "height": 6737,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/2e443158-5a69-4def-9ac8-8536f49b8fbf/DSC09940.jpg",
        "width": 4217,
        "height": 6421,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/d9d3811f-e185-4365-b1af-8b949d7c76d3/DSC09946.jpg",
        "width": 4489,
        "height": 6452,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/c57c550a-9bbb-4afa-b2e3-2ae38705dc2f/DSC09955.jpg",
        "width": 3944,
        "height": 7008,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/39a0729c-0fa8-48d4-9f78-deedf45454c3/DSC09962.jpg",
        "width": 4669,
        "height": 6587,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/43a4c53a-b30c-4de6-bd88-0f9e57f43845/DSC09977.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/48ccd5ce-2258-4d9f-8219-d14581375c95/DSC09978.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/fcc17000-76a4-45e2-9461-5d7badcd0e7d/DSC09979.jpg",
        "width": 4311,
        "height": 4265,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/4a07a323-eba4-4933-ad81-5d6d39e14663/DSC09980.jpg",
        "width": 7008,
        "height": 3944,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/a110072b-ce03-400c-9ce5-36b22ec82e31/DSC09986.jpg",
        "width": 4580,
        "height": 6664,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/96ab8621-954f-40da-ab34-0e567d593941/DSC09988.jpg",
        "width": 4569,
        "height": 6854,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/3ef6279e-99dd-42b3-98ec-25394d48c57e/DSC09989.jpg",
        "width": 4537,
        "height": 4644,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/f15739a7-4bd3-42ec-9904-86fa95bde2ad/DSC09992.jpg",
        "width": 6427,
        "height": 3967,
        "alt": "O & O"
      },
      {
        "url": "https://images.squarespace-cdn.com/content/v1/6283cf4349f1dd700fa9a5ee/affff9db-b64b-4e40-af8e-bebf135cadc5/DSC09994.jpg",
        "width": 6858,
        "height": 4572,
        "alt": "O & O"
      }
    ]
  }
];
