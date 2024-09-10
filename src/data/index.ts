import { Category } from "@/types/category";
import { Product } from "@/types/product";

type Data = {
  categories: Category[];
  products: Product[];
};

export const data: Data = {
  categories: [
    {
      id: 1,
      title: "Laptops",
      cover: "https://picsum.photos/id/6/1000/300",
    },
    {
      id: 2,
      title: "Smartphones",
      cover: "https://picsum.photos/id/504/1000/300",
    },
    {
      id: 3,
      title: "Cameras",
      cover: "https://picsum.photos/id/456/1000/300",
    },
  ],
  products: [
    {
      id: 4,
      idCategory: 1,
      image: "https://picsum.photos/id/1/500/400",
      title: "UltraComp X1",
      description:
        'Sleek laptop with a 15.6" Full HD screen and Intel Core i5. Great for work and play.',
      price: 1099.99,
    },
    {
      id: 23,
      idCategory: 3,
      image: "https://picsum.photos/id/319/500/400",
      title: "CamMaster DSLR 4000",
      description:
        "A 24MP camera with 4K video, fast autofocus, and interchangeable lenses for pro-level photography.",
      price: 799.99,
    },
    {
      id: 15,
      idCategory: 2,
      image: "https://picsum.photos/id/816/500/400",
      title: "Nexon Fold 7",
      description:
        "Unfolds to a large screen, great for multitasking and media.",
      price: 799.99,
    },
    {
      id: 9,
      idCategory: 1,
      image: "https://picsum.photos/id/8/500/400",
      title: "NanoBook Z2",
      description:
        'Compact 11.6" laptop with AMD A4 processor. Perfect for on-the-go.',
      price: 890.99,
    },
    {
      id: 12,
      idCategory: 2,
      image: "https://picsum.photos/id/160/500/400",
      title: "Nova Elite X",
      description: "Features a large display and top-notch performance.",
      price: 1199.99,
    },
    {
      id: 21,
      idCategory: 3,
      image: "https://picsum.photos/id/823/500/400",
      title: "PixelSnap DSLR X7",
      description:
        "20MP camera with a robust body and crystal-clear image quality, perfect for all conditions.",
      price: 699.99,
    },
    {
      id: 25,
      idCategory: 3,
      image: "https://picsum.photos/id/250/500/400",
      title: "ZoomLite DSLR Mark II",
      description:
        "A professional-grade 32MP camera with dual pixel autofocus and enhanced ISO for low-light performance.",
      price: 999.99,
    },
    {
      id: 5,
      idCategory: 1,
      image: "https://picsum.photos/id/0/500/400",
      title: "PowerBook Pro 5000",
      description:
        "High-performance laptop with Intel Core i7, 16GB RAM, and 1TB SSD. Ideal for gaming and heavy tasks.",
      price: 1849.99,
    },
    {
      id: 8,
      idCategory: 2,
      image: "https://picsum.photos/id/373/500/400",
      title: "PixelStar Max",
      description: "Excellent camera and smooth performance.",
      price: 999.99,
    },
    {
      id: 24,
      idCategory: 3,
      image: "https://picsum.photos/id/91/500/400",
      title: "ShutterMax Z5",
      description:
        "Entry-level 18MP camera with intuitive controls and 1080p video, great for beginners.",
      price: 549.99,
    },
    {
      id: 28,
      idCategory: 3,
      image: "https://picsum.photos/id/435/500/400",
      title: "FocusPro X900",
      description:
        "A 36MP full-frame camera with 5-axis stabilization and ultra-fast continuous shooting at 12fps.",
      price: 1299.99,
    },
    {
      id: 3,
      idCategory: 1,
      image: "https://picsum.photos/id/48/500/400",
      title: "MiniBook Elite",
      description:
        "Ultra-portable laptop with 4GB RAM and 128GB SSD. Compact and efficient for daily tasks.",
      price: 1099.99,
    },
    {
      id: 18,
      idCategory: 2,
      image: "https://picsum.photos/id/7/500/400",
      title: "TurboOne S",
      description: "Fast charging and powerful performance.",
      price: 899.99,
    },
    {
      id: 30,
      idCategory: 3,
      image: "https://picsum.photos/id/454/500/400",
      title: "CaptureMate V3",
      description:
        "A versatile 24MP camera with built-in Wi-Fi and Bluetooth, ideal for travel photography.",
      price: 649.99,
    },
    {
      id: 11,
      idCategory: 2,
      image: "https://picsum.photos/id/3/500/400",
      title: "Zenith Pro Z",
      description: "Stunning display and great for photos.",
      price: 1299.99,
    },
    {
      id: 19,
      idCategory: 2,
      image: "https://picsum.photos/id/20/500/400",
      title: "Visionary 5",
      description: "4K display and pro camera features.",
      price: 1199.99,
    },
    {
      id: 16,
      idCategory: 2,
      image: "https://picsum.photos/id/42/500/400",
      title: "Galaxy Titan 24",
      description: "High performance and vibrant display.",
      price: 1299.99,
    },
    {
      id: 29,
      idCategory: 3,
      image: "https://picsum.photos/id/531/500/400",
      title: "VisionCam Pro",
      description:
        "A 26MP camera with 4K video and exceptional dynamic range, designed for landscape and portrait photographers.",
      price: 899.99,
    },
    {
      id: 1,
      idCategory: 1,
      image: "https://picsum.photos/id/201/500/400",
      title: "TechPad A10",
      description:
        '2-in-1 laptop with a 10.1" touchscreen and detachable keyboard. Versatile for work and entertainment.',
      price: 1099.99,
    },
    {
      id: 2,
      idCategory: 1,
      image: "https://picsum.photos/id/180/500/400",
      title: "GamingRex X500",
      description:
        'Gaming laptop with a 17.3" display, NVIDIA GTX 1660 Ti, and 32GB RAM for top-tier gaming performance.',
      price: 1849.99,
    },
    {
      id: 17,
      idCategory: 2,
      image: "https://picsum.photos/id/882/500/400",
      title: "Luna Edge",
      description: "Sleek design with advanced camera tech.",
      price: 1099.99,
    },
    {
      id: 13,
      idCategory: 2,
      image: "https://picsum.photos/id/60/500/400",
      title: "Eclipse X6",
      description: "Great camera and fast performance.",
      price: 1049.99,
    },
    {
      id: 22,
      idCategory: 3,
      image: "https://picsum.photos/id/628/500/400",
      title: "SnapPro Lite",
      description:
        "A compact 16MP camera with lightweight body and easy-to-use features, perfect for new enthusiasts.",
      price: 499.99,
    },
    {
      id: 10,
      idCategory: 1,
      image: "https://picsum.photos/id/119/500/400",
      title: "OfficeBook Q1",
      description:
        'Reliable 15.6" laptop with Intel Pentium processor and 8GB RAM, perfect for office tasks.',
      price: 1099.99,
    },
  ],
};
