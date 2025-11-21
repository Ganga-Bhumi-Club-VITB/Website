(function ($) {
  "use strict";

  /*
  |--------------------------------------------------------------------------
  | Template Name: Gangabhumi Club
  | Author: Gangabhumi Club
  | Version: 1.0
  |--------------------------------------------------------------------------
  |--------------------------------------------------------------------------
  | TABLE OF CONTENTS:
  |--------------------------------------------------------------------------
  | 1. Preloader  
  | 2. Mobile Menu
  | 3. Dark Mode
  | 4. Sticky Header
  | 5. Dynamic Background
  | 6. Swiper Initialization
  | 7. Modal Video
  | 8. Scroll Up
  | 9. Accordion
  | 10. Countdown Timer
  | 11. Title Animation 
  | 12. Fade Animation
  | 13. Text Color Change 
  | 14. Video Section ParallaxBg
  | 15. Hover Blog Card Animation
  | 16. Hover Price Package 
  | 17. Circle Button Animation
  | 18. Images Left Show Animation
  | 19. PlayVideo Buttons Animation
  | 20. Blog Crad Animation
  | 21. Image Scroll Animation
  | 22. Hero One Animation
  | 23. Services Branding Animation
  | 24. Update Background Image
  | 25. Methodology Animation
  | 26. Slider Text Context
  | 27. Skill Bar Animation
  | 28. Footer Text Animation
  | 29. Isotop Filter
  | 30. About aAimate Stars
  | 31. Contact Stroke TitleAnim
  | 32. Newsletter Content
  | 33. Feature Item HoverAnim
  | 34. Comming Soon Count Down
  | 35. NEW TEAM MODAL
  | 36. NEW FOUNDER MODAL
  | 37. DYNAMIC LATEST NEWS
  | 38. DYNAMIC EVENTS PAGE (NEW)
  | 39. GALLERY FILTER & LIGHTBOX (NEW)
  */
  /*--------------------------------------------------------------
    Scripts initialization
  --------------------------------------------------------------*/

  $.exists = function (selector) {
    return $(selector).length > 0;
  };

  $(window).on("load", function (e) {
    $(window).trigger("scroll");
    $(window).trigger("resize");
    initPreloader();
  });

  $(window).on("scroll", function () {
    showScrollUp();
  });

  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);
  gsap.config({
    nullTargetWarn: false,
  });

  const lenis = new Lenis({
    lerp: 0.07,
    prevent: (node) => {
        // Prevent Lenis from controlling modal scroll
        return node.closest('.event-modal-right') !== null;
    }
  });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });


  $(function () {
    mainNav();
    stickyHeader();
    dynamicBackground();
    initSwiper();
    modalVideo();
    scrollUp();
    initAccordion();
    funFactCounter();
    initializeTitleAnimation();
    fadeAnimation();
    textColorShiption();
    parallaxBg();
    hoverImagesServiceCard();
    packageContent();
    circleBtnAnim();
    // imgAnimLeftShow();
    playVideoBlockAnim();
    blogCardAnim();
    imageScroll();
    heroOne();
    heroFactCounter();
    skillBar();
    footerText();
    startCountdown();
    animateStars();
    updateBackgroundImage();
    contactStrokeTitleAnim();
    isotopItems();
    servicesBrandingAnimation();
    methodologyCardContent();
    sliderTextContext();
    newsletterContentAnim();
    featureItemHoverAnim();

    // Initialize the new team modal functionality
    initTeamModal();
    populateLatestNews();
    initDynamicEventsPage();
    initGalleryFilter(); // NEW
    initImageLightbox(); // NEW
    renderFeaturedSlider(); 
    initFeaturedSlider();
    // DYNAMIC ALBUMS & MODAL
    renderEventAlbums();
    initAlbumModal();
    imgAnimLeftShow();
  });

  /*--------------------------------------------------------------
    NEW: 1. RENDER FEATURED SLIDER CONTENT (Dynamic)
  --------------------------------------------------------------*/
  function renderFeaturedSlider() {
    const $wrapper = $(".featured-event-slider .swiper-wrapper");
    if (!$wrapper.length) {
        return;
    }

    // Data
    const featuredEvents = [
        {
            title: "Sangam: Cultural Fest",
            venue: "OPEN AUDITORIUM",
            date: "21 FEB 2025",
            timing: "9:00AM - 12:30PM",
            image: "assets/img/events/Sliders/Slider.jpg"
        },
        {
            title: "Winter Fest Debut",
            venue: "MAIN STAGE",
            date: "14 DEC 2024",
            timing: "6:00PM - 10:00PM",
            image: "assets/img/events/Sliders/Slider1 (1).jpg"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (1).webp"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (2).jpg"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (2).webp"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (3).jpg"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (3).webp"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (4).jpg"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (4).webp"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (5).jpg"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (5).webp"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (6).jpg"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (7).jpg"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (8).jpg"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (9).jpg"
        },
        {
            title: "Ram Navami Celebration",
            venue: "TEMPLE GROUND",
            date: "16 APR 2025",
            timing: "8:00AM - 11:00AM",
            image: "assets/img/events/Sliders/Slider1 (10).jpg"
        }
        
    ];

    let html = "";
    featuredEvents.forEach(event => {
        html += `
        <div class="swiper-slide">
            <div class="featured-card">
                <img src="${event.image}" onerror="this.src='https://images.unsplash.com/photo-1533174072545-e8d4aa97edf9?q=80&w=1600'" alt="${event.title}">
                <!-- Overlay removed as requested -->
            </div>
        </div>
        `;
    });

    $wrapper.html(html);
  }

  /*--------------------------------------------------------------
    NEW: 2. INITIALIZE FEATURED SLIDER
  --------------------------------------------------------------*/
  function initFeaturedSlider() {
    if ($.exists(".featured-event-slider")) {
      new Swiper(".featured-event-slider", {
        loop: true,
        speed: 1000,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false,
        },
        effect: "fade", 
        fadeEffect: { crossFade: true },
        pagination: {
          el: ".featured-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".featured-next",
          prevEl: ".featured-prev",
        },
      });
    }
  }


  /*--------------------------------------------------------------
    DYNAMIC EVENT ALBUMS & MODAL
  --------------------------------------------------------------*/
  const eventAlbumsData = [
    {
      id: 1,
      title: "Ram Navmi & Gudi Padwa",
      date: "16 Apr 2025",
      desc: "",
      cover: "assets/img/events/RamNavmi/ramnavmi.png", // Use your actual image paths
      count: 4,
      images: [
        "assets/img/events/RamNavmi/ramnavmi1 (1).jpg",
        "assets/img/events/RamNavmi/ramnavmi1 (1).png", 
        "assets/img/events/RamNavmi/ramnavmi1 (3).png",
        "assets/img/events/RamNavmi/ramnavmi1 (4).jpg",
        "assets/img/events/RamNavmi/ramnavmi1 (4).jpg",
        "assets/img/events/RamNavmi/ramnavmi1 (4).jpg",
        "assets/img/events/RamNavmi/ramnavmi1 (4).jpg",
        "assets/img/events/RamNavmi/ramnavmi1 (4).jpg",
        "assets/img/events/RamNavmi/ramnavmi1 (4).jpg",
        "assets/img/events/RamNavmi/ramnavmi1 (4).jpg",
      ]
    },
    {
      id: 2,
      title: "Sangam - Advitya 2025",
      date: "21 Feb 2025",
      desc: "",
      cover: "assets/img/events/Sangam/sangam.jpg",
      count: 20,
      images: [
        "assets/img/events/Sangam/sangam1 (1).jpg",
        "assets/img/events/Sangam/sangam1 (2).jpg",
        "assets/img/events/Sangam/sangam1 (3).jpg",
        "assets/img/events/Sangam/sangam1 (4).jpg",
        "assets/img/events/Sangam/sangam1 (5).jpg",
        "assets/img/events/Sangam/sangam1 (6).jpg",
        "assets/img/events/Sangam/sangam1 (7).jpg",
        "assets/img/events/Sangam/sangam1 (8).jpg",
        "assets/img/events/Sangam/sangam1 (9).jpg",
        "assets/img/events/Sangam/sangam1 (10).jpg",
        "assets/img/events/Sangam/sangam1 (11).jpg",
        "assets/img/events/Sangam/sangam1 (12).jpg",
        "assets/img/events/Sangam/sangam1 (13).jpg",
        "assets/img/events/Sangam/sangam1 (14).jpg",
        "assets/img/events/Sangam/sangam1 (15).jpg",
        "assets/img/events/Sangam/sangam1 (16).jpg",
        "assets/img/events/Sangam/sangam1 (17).jpg",
        "assets/img/events/Sangam/sangam1 (18).jpg",
        "assets/img/events/Sangam/sangam1 (19).jpg",
        "assets/img/events/Sangam/sangam1 (20).jpg"
      ]
    },
    {
      id: 3,
      title: "Debut at Winter Fest",
      date: "14 Dec 2024",
      desc: "",
      cover: "assets/img/events/Winterfest/winterfest.jpg",
      count: 10,
      images: [
        "assets/img/events/Winterfest/winterfest1 (1).jpg",
        "assets/img/events/Winterfest/winterfest1 (2).jpg", 
        "assets/img/events/Winterfest/winterfest1 (3).jpg",
        "assets/img/events/Winterfest/winterfest1 (4).jpg",
        "assets/img/events/Winterfest/winterfest1 (5).jpg",
        "assets/img/events/Winterfest/winterfest1 (6).jpg",
        "assets/img/events/Winterfest/winterfest1 (7).jpg",
        "assets/img/events/Winterfest/winterfest1 (8).jpg",
        "assets/img/events/Winterfest/winterfest1 (9).jpg",
        "assets/img/events/Winterfest/winterfest1 (10).jpg"
      ]
    }
    // {
    //   id: 4,
    //   title: "Beat Making Masterclass",
    //   date: "Oct 15, 2025",
    //   desc: "Learn production techniques from industry professionals",
    //   cover: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=600",
    //   count: 3,
    //   images: [
    //     "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?q=80&w=600",
    //     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600",
    //     "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600"
    //   ]
    // },
    // {
    //   id: 5,
    //   title: "Indie Music Festival",
    //   date: "Oct 1, 2025",
    //   desc: "Celebrating independent artists and original compositions",
    //   cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600",
    //   count: 3,
    //   images: [
    //     "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600",
    //     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600",
    //     "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600"
    //   ]
    // },
    // {
    //   id: 6,
    //   title: "DJ Night Extravaganza",
    //   date: "Sep 30, 2025",
    //   desc: "Non-stop beats from our talented DJs",
    //   cover: "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600",
    //   count: 3,
    //   images: [
    //     "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=600",
    //     "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=600",
    //     "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=600"
    //   ]
    // }
  ];

  function renderEventAlbums() {
    const $grid = $(".album-grid");
    if (!$grid.length) return;

    let html = "";
    eventAlbumsData.forEach(album => {
      html += `
        <div class="album-card" data-id="${album.id}">
            <div class="album-img-wrapper">
              <img src="${album.cover}" alt="${album.title}">
              <div class="photo-count-badge">
                <i class="fa-regular fa-images"></i> ${album.count} photos
              </div>
            </div>
            <div class="album-content">
              <div class="album-date"><i class="fa-regular fa-calendar"></i> ${album.date}</div>
              <h4 class="album-title">${album.title}</h4>
              <p class="album-desc">${album.desc}</p>
            </div>
        </div>
      `;
    });
    $grid.html(html);
  }

  function initAlbumModal() {
    const $modal = $(".ak-image-popup");
    const $modalContent = $(".ak-image-popup-content");
    
    $(document).on("click", ".album-card", function() {
        const id = $(this).data("id");
        const album = eventAlbumsData.find(a => a.id === id);
        
        if (!album) return;

        // Build Slider HTML for Modal
        let slidesHtml = "";
        album.images.forEach(img => {
            slidesHtml += `<div class="swiper-slide"><img src="${img}" alt="Album Image"></div>`;
        });

        const modalHtml = `
            <div class="ak-image-popup-close"><i class="fa-solid fa-xmark"></i></div>
            <div class="swiper album-modal-slider">
                <div class="swiper-wrapper">${slidesHtml}</div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>
            <h4 id="ak-lightbox-caption">${album.title}</h4>
        `;

        $modalContent.html(modalHtml);
        $modal.addClass("active");
        $("body").css("overflow", "hidden");
        if(typeof lenis !== 'undefined') lenis.stop();

        // Init Swiper inside Modal
        new Swiper(".album-modal-slider", {
            loop: true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            zoom: true,
        });
    });

    // Close Modal Logic
    $(document).on("click", ".ak-image-popup-close, .ak-image-popup-overlay", function() {
        $modal.removeClass("active");
        $("body").css("overflow", "auto");
        if(typeof lenis !== 'undefined') lenis.start();
        setTimeout(() => { $modalContent.html(''); }, 300); 
    });
  }
  

  /*--------------------------------------------------------------
    NEW HERO COUNTER (Added 11/16/2025)
  --------------------------------------------------------------*/
  function heroFactCounter() {
    if ($.exists(".hero-counter")) {
      const counters = gsap.utils.toArray(".hero-counter");
      
      counters.forEach((counter) => {
        let goal = $(counter).data("goal");
        if (goal === undefined) return; // Skip if no data-goal

        let counterObj = { val: 0 }; // Start from 0

        gsap.to(counterObj, {
          val: goal,
          duration: 2, // 2-second "fast" animation
          ease: "power1.out",
          delay: 2.9, // Start after preloader and hero text animations
          onUpdate: function () {
            counter.innerHTML = Math.floor(counterObj.val) + "+";
          },
        });
      });
    }
  }

  /*--------------------------------------------------------------
    1. Preloader  
  --------------------------------------------------------------*/
  function initPreloader() {
    if ($.exists("#preloader")) {
      const loadingPercent = document.querySelector(".loading-percent");
      const preloader = document.getElementById("preloader");
      const text = document.querySelector("#svgText");

      const length = text.getComputedTextLength();
      text.style.strokeDasharray = length;
      text.style.strokeDashoffset = length;

      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(preloader, {
            duration: 0.6,
            ease: "power1.inOut",
            opacity: 0,
            onComplete: () => {
              preloader.style.display = "none";
            },
          });
        },
      });

      gsap.to(
        text,
        {
          strokeDashoffset: 1,
          duration: 4,
          delay: 0.3,
          opacity: 1,
          ease: "power1.inOut",
        },
        0.2
      );

      tl.to(
        loadingPercent,
        {
          innerText: 100,
          duration: 2.5,
          ease: "power4.inOut",
          roundProps: "innerText",
          onUpdate: function () {
            loadingPercent.innerText =
              Math.floor(this.targets()[0].innerText) + "%";
          },
        },
        0
      );
    }
  }

  /*--------------------------------------------------------------
    2. Mobile Menu  
  --------------------------------------------------------------*/
  function mainNav() {
    $(".ak-nav").append('<span class="ak-munu_toggle"><span></span></span>');
    $(".menu-item-has-children").append(
      '<span class="ak-munu_dropdown_toggle"></span>'
    );

    $(".ak-munu_toggle").on("click", function () {
      $(this)
        .toggleClass("ak-toggle_active")
        .siblings(".ak-nav_list")
        .slideToggle();
    });

    $(".ak-munu_dropdown_toggle").on("click", function () {
      $(this)
        .toggleClass("active")
        .siblings("ul")
        .slideToggle()
        .parent()
        .toggleClass("active");
    });

    $(".menu-item-has-black-section").append(
      '<span class="ak-munu_dropdown_toggle_1"></span>'
    );

    $(".ak-munu_dropdown_toggle_1").on("click", function () {
      $(this)
        .toggleClass("active")
        .siblings("ul")
        .slideToggle()
        .parent()
        .toggleClass("active");
    });
  }

  /*--------------------------------------------------------------
    3. Dark Mode
  --------------------------------------------------------------*/
  if ($.exists(".mode-toggle")) {
    $("#open").on("click", function () {
      $(this).hide();
      $("#clecel").show();
      $(".setting-mode").css("right", "35px");
      $(".mode-btn").css({
        right: "0",
      });
    });

    $("#clecel").on("click", function () {
      $(this).hide();
      $("#open").show();
      $(".setting-mode").css("right", "0");
      $(".mode-btn").css({
        right: "-40px",
      });
    });

    $(".js-mode-type button").on("click", function () {
      $(this).addClass("active").siblings().removeClass("active");
      let mode_val = $(".js-mode-type button.active").attr("data-mode");
      if (mode_val === "dark") {
        $("body").addClass("dark");
        textColorShiption();
        updateBackgroundImage();
      } else {
        $("body").removeClass("dark");
        textColorShiption();
        updateBackgroundImage();
      }
    });
  }

  /*--------------------------------------------------------------
    4. Sticky Header
  --------------------------------------------------------------*/
  function stickyHeader() {
    // MODIFIED: Replaced original function with simpler scroll detection
    const $header = $(".ak-sticky_header");
    // This is the point where the navbar changes.
    // 50px is usually enough to feel instant.
    const scrollThreshold = 50; 

    $(window).on("scroll", function () {
      const windowTop = $(window).scrollTop();

      if (windowTop >= scrollThreshold) {
        // We've scrolled down, add the 'scrolled' class
        $header.addClass("ak-header-scrolled");
      } else {
        // We are at the top, remove the 'scrolled' class
        $header.removeClass("ak-header-scrolled");
      }
    });
    // END OF MODIFICATION
  }

  /*--------------------------------------------------------------
    5. Dynamic Background
  --------------------------------------------------------------*/
  function dynamicBackground() {
    $("[data-src]").each(function () {
      const src = $(this).attr("data-src");
      $(this).css("background-image", `url(${src})`);
    });
  }

  /*--------------------------------------------------------------
    6. Swiper Initialization
  --------------------------------------------------------------*/

  function initSwiper() {
    if ($.exists(".partners-logos-slider")) {
      let swiper = new Swiper(".partners-logos-slider", {
        loop: true,
        speed: 500,
        autoplay: false,
        slidesPerView: "auto",
        centeredSlides: false,
        grabCursor: true,
        keyboard: {
          enabled: true,
        },
        scrollbar: {
          el: ".partners-logs-scrollbar",
        },
        navigation: {
          nextEl: ".partners-logs-button-next",
          prevEl: ".partners-logs-button-prev",
        },
      });
    }

    if ($.exists(".creators-slider")) {
      new Swiper(".creators-slider", {
        loop: true,
        speed: 4000, // Adjust speed (higher is slower)
        autoplay: {
          delay: 0,
          disableOnInteraction: false, // Continue scrolling even if touched
        },
        slidesPerView: 1,
        spaceBetween: 30,
        allowTouchMove: false, // Optional: disables manual swiping for a pure marquee feel
        breakpoints: {
          480: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          992: { slidesPerView: 4 },
          1200: { slidesPerView: 5 },
        },
      });
    }

    // if ($.exists(".ak-team-slider")) {
    //   let swiper = new Swiper(".ak-team-slider", {
    //     loop: true,
    //     speed: 500,
    //     autoplay: false,
    //     spaceBetween: 15,
    //     slidesPerView: "4.5",
    //     breakpoints: {
    //       320: { slidesPerView: 1 },
    //       480: { slidesPerView: 2 },
    //       768: { slidesPerView: 2.5 },
    //       1200: { slidesPerView: 4.5 },
    //     },
    //     pagination: {
    //       clickable: true,
    //     },
    //     scrollbar: {
    //       el: ".team-logs-scrollbar",
    //     },
    //     navigation: {
    //       nextEl: ".team-logs-button-next",
    //       prevEl: ".team-logs-button-prev",
    //     },
    //     on: {
    //       onComplete: function () {
    //         animateSwiperSlides();
    //       },
    //     },
    //   });

    //   function animateSwiperSlides() {
    //     gsap.utils.toArray(".swiper-slide .team-img-top").forEach((element) => {
    //       let img = element.querySelector("img");
    //       let imgHeight = img.clientHeight;

    //       gsap.set(element, { overflow: "hidden" });

    //       let tl = gsap.timeline({
    //         scrollTrigger: {
    //           trigger: element,
    //           scrub: true,
    //           pin: false,
    //           start: "top bottom",
    //           end: "bottom top",
    //         },
    //       });

    //       tl.fromTo(
    //         img,
    //         {
    //           yPercent: -20,
    //           ease: "none",
    //         },
    //         {
    //           yPercent: 20,
    //           ease: "none",
    //         }
    //       );
    //     });
    //   }

    //   animateSwiperSlides();
    // }
    if ($.exists(".ak-news-blog-slider")) {
      let swiper = new Swiper(".ak-news-blog-slider", {
        loop: true,
        speed: 500,
        autoplay: false,
        spaceBetween: 15,
        slidesPerView: "auto",
        centeredSlides: false,
        breakpoints: {
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        },
        pagination: {
          clickable: true,
        },
        scrollbar: {
          el: ".news-blog-scrollbar",
        },
        navigation: {
          nextEl: ".news-blog-button-next",
          prevEl: ".news-blog-button-prev",
        },
      });
    }
    if ($.exists(".ak-news-slider")) {
      let swiper = new Swiper(".ak-news-slider", {
        loop: true,
        speed: 500,
        autoplay: false,
        spaceBetween: 20,
        slidesPerView: "auto",
        pagination: {
          clickable: true,
        },
        scrollbar: {
          el: ".news-logs-scrollbar",
        },
        navigation: {
          nextEl: ".news-logs-button-next",
          prevEl: ".news-logs-button-prev",
        },
        on: {
          onComplete: function () {
            animateSwiperSlides();
          },
        },
      });

      function animateSwiperSlides() {
        gsap.utils.toArray(".swiper-slide .news-img-top").forEach((element) => {
          let img = element.querySelector("img");
          let imgHeight = img.clientHeight;

          gsap.set(element, { overflow: "hidden" });

          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: element,
              scrub: true,
              pin: false,
              start: "top bottom",
              end: "bottom top",
            },
          });

          tl.fromTo(
            img,
            {
              yPercent: -20,
              ease: "none",
            },
            {
              yPercent: 20,
              ease: "none",
            }
          );
        });
      }

      animateSwiperSlides();
    }
    if ($.exists(".testmonial-slider")) {
      let swiper = new Swiper(".testmonial-slider", {
        loop: false,
        speed: 500,
        autoplay: false,
        spaceBetween: 0,
        slidesPerView: "1",
        breakpoints: {
          991: {
            slidesPerView: 2,
          },
        },
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".testmonial-button-next",
          prevEl: ".testmonial-button-prev",
        },
      });
    }
    if ($.exists(".testmonial-slider-2")) {
      let swiper = new Swiper(".testmonial-slider-2", {
        loop: true,
        speed: 1000,
        autoplay: false,
        spaceBetween: 0,
        slidesPerView: "1",
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".ts-next-2",
          prevEl: ".ts-prev-2",
        },
      });
    }
    if ($.exists(".creactive-portflio-slider")) {
      let swiper = new Swiper(".creactive-portflio-slider", {
        loop: true,
        speed: 1500,
        autoplay: false,
        slidesPerView: "auto",
        runCallbacksOnInit: true,
        parallax: true,
        zoom: {
          maxRatio: 1.2,
          minRation: 1,
        },
        keyboard: {
          enabled: true,
        },

        pagination: {
          el: ".cp-swiper-pagination",
          type: "fraction",
          renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
          },
          formatFractionCurrent: function (number) {
            return String(number).padStart(2, "0");
          },
          formatFractionTotal: function (number) {
            return String(number).padStart(2, "0");
          },
        },

        navigation: {
          nextEl: ".partners-logs-button-next",
          prevEl: ".partners-logs-button-prev",
        },
        on: {
          slideChangeTransitionStart: function () {
            animateSwiperSlides();
          },
        },
      });
      function animateSwiperSlides() {
        let activeSlide = document.querySelector(
          ".swiper-slide-active .cp-hero-title"
        );
        if (activeSlide) {
          let split = new SplitText(activeSlide, { type: "chars, words" });
          gsap.fromTo(
            split.chars,
            { opacity: 0, y: 20, rotateX: 90 },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              duration: 1,
              stagger: 0.05,
              ease: "power2.out",
            }
          );
        }
      }
      animateSwiperSlides();
    }
    if ($.exists(".client-logo-slider")) {
      let swiper = new Swiper(".client-logo-slider", {
        loop: true,
        speed: 500,
        autoplay: false,
        spaceBetween: 0,
        slidesPerView: "auto",
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".client-logo-next",
          prevEl: ".client-logo-prev",
        },
      });
    }
    if ($.exists(".marketing-agency-slider")) {
      let swiper = new Swiper(".marketing-agency-slider", {
        speed: 500,
        autoplay: false,
        spaceBetween: 0,
        slidesPerView: "auto",
        effect: "fade",
        on: {
          slideChangeTransitionStart: function () {
            let activeSlide = $(".swiper-slide-active");
            let subTitle = activeSlide.find(".sub-title");
            let mainTitle = activeSlide.find(".main-title");
            let caption = activeSlide.find(".marketing-agency-caption");
            let heroImg = activeSlide.find(".hero-bg-img");

            let tl = gsap.timeline({ defaults: { duration: 1 } });

            tl.fromTo(
              heroImg,
              { opacity: 0, scale: 1.5 },
              { opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" }
            );

            tl.fromTo(
              subTitle,
              { y: 50, opacity: 0 },
              {
                y: 0,
                opacity: 1,
                duration: 1.2,
                ease: "power3.out",
              },
              "-=0.8"
            );

            tl.fromTo(
              mainTitle,
              { y: 50, opacity: 0 },
              { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" },
              "-=0.8"
            );

            tl.fromTo(
              caption,
              { x: -100, opacity: 0 },
              { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
              "-=0.6"
            );
          },
        },
      });
    }
    if ($.exists(".core-features.style2")) {
      let swiper = new Swiper(".core-features.style2", {
        loop: true,
        speed: 500,
        autoplay: false,
        spaceBetween: 30,
        slidesPerView: "5",
        breakpoints: {
          400: { slidesPerView: 1 },
          580: { slidesPerView: 2 },
          991: { slidesPerView: 3 },
          1199: { slidesPerView: 3 },
          1399: { slidesPerView: 4 },
          1499: { slidesPerView: 5 },
        },
        pagination: {
          clickable: true,
        },
        navigation: {
          nextEl: ".core-features-button-next",
          prevEl: ".core-features-button-prev",
        },
      });
    }
    // UPDATED: Marquee Effect for Core Features
    // On Mobile, we leave it as a static vertical stack (HTML only) to prevent duplicates/reordering.
    if ($.exists(".core-features.slider-two")) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        new Swiper(".core-features.slider-two", {
          loop: true,
          speed: 5000,
          autoplay: {
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          },
          slidesPerView: 2,
          spaceBetween: 30,
          breakpoints: {
            991: {
              slidesPerView: 3,
            },
          },
        });
      }
    }
  }

  /*--------------------------------------------------------------
    7. Modal Video
  --------------------------------------------------------------*/
  function modalVideo() {
    $(document).on("click", ".ak-video-open", function (e) {
      e.preventDefault();
      
      let urlString = $(this).attr("href");
      let videoId = "";
      
      console.log("Clicked Video Link:", urlString);

      if (!urlString) return;

      // Regex to extract video ID from various YouTube URL formats
      const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = urlString.match(regExp);

      if (match && match[2].length === 11) {
        videoId = match[2];
        console.log("Extracted Video ID:", videoId);
        
        // Use standard youtube.com domain and removed 'origin' parameter which can block localhost
        const finalSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
        
        $(".ak-video-popup-container iframe").attr("src", finalSrc);
        $(".ak-video-popup").addClass("active");
      } else {
        console.error("Failed to extract video ID");
        alert("Could not parse YouTube URL. Please check the console.");
      }
    });

    $(".ak-video-popup-close, .ak-video-popup-layer").on("click", function (e) {
      e.preventDefault();
      $(".ak-video-popup").removeClass("active");
      $("html").removeClass("overflow-hidden");
      // Clear the source to stop playback
      $(".ak-video-popup-container iframe").attr("src", "about:blank");
    });
  }

  /*--------------------------------------------------------------
    8. Scroll Up
  --------------------------------------------------------------*/
  function scrollUp() {
    $(".ak-scrollup").on("click", function (e) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: 0 }, 0);
    });
  }

  function showScrollUp() {
    const scroll = $(window).scrollTop();
    $(".ak-scrollup").toggleClass("ak-scrollup-show", scroll >= 350);
  }

  /*--------------------------------------------------------------
    9. Accordion
  --------------------------------------------------------------*/
  function initAccordion() {
    if ($.exists(".ak-accordion-item")) {
      $(".ak-accordion-title-content").on("click", function () {
        $(this).toggleClass("active");
        $(this)
          .next(".ak-accordion-tab")
          .slideToggle()
          .parent()
          .siblings()
          .find(".ak-accordion-tab")
          .slideUp()
          .prev()
          .removeClass("active");
      });
    }
  }

  /*--------------------------------------------------------------
    10. Countdown Timer
  --------------------------------------------------------------*/
  function funFactCounter() {
    if ($.exists(".funfact.style1")) {
      const count_number = gsap.utils.toArray(".funfact.style1");
      const count_id = gsap.utils.toArray(".amin_auto_count");

      if (count_number && count_id) {
        count_id.forEach((num) => {
          gsap.from(num, {
            scrollTrigger: {
              trigger: count_number,
              start: "top center+=200",
              markers: false,
            },
            delay: 0.3,
            innerText: 0,
            duration: 3,
            snap: {
              innerText: 1,
            },
          });
        });
        gsap.from(count_number, {
          scrollTrigger: {
            trigger: count_number,
            start: "top center+=200",
            markers: false,
          },
          scale: 0.5,
          opacity: 0,
          stagger: 0.2,
          duration: 2,
          ease: "elastic",
          force3D: true,
        });
      }
    }
  }

  /*--------------------------------------------------------------
    11. Title Animation
  --------------------------------------------------------------*/

  function initializeTitleAnimation() {
    if ($.exists(".title-anim")) {
      const cnt_title = document.querySelectorAll(".title-anim");

      cnt_title.forEach((title) => {
        let delay_value = +title.getAttribute("data-delay") || 0;
        const words = title.querySelectorAll(".anim-line-words");

        const anim = gsap.timeline({
          delay: delay_value,
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none none",
            markers: false,
          },
        });

        words.forEach((word, wordIndex) => {
          let duration_value = +title.getAttribute("data-duration") || 1;

          const split = new SplitText(word, {
            type: "chars,words",
          });

          gsap.set(split.words, {
            position: "relative",
            overflow: "hidden",
          });

          const wordDelay = wordIndex * 0.15;

          split.chars.forEach((char, charIndex) => {
            anim.fromTo(
              char,
              {
                translateY: "100%",
              },
              {
                translateY: "0%",
                duration: duration_value,
                ease: "power2.inOut",
              },
              charIndex * 0.02 + wordDelay
            );
          });
        });
      });
    }
    if ($.exists(".anim-title-2")) {
      function animateFromDataSettings(selector) {
        const element = document.querySelector(selector);
        if (!element) return;
        gsap.from(element.querySelectorAll(".anim-title-2 div"), {
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
          },
          duration: 0.75,
          y: 40,
          opacity: 0,
          ease: "power2.out",
          transformOrigin: "top center -50",
          delay: 0.15,
          rotationX: -80,
          stagger: 0.02,
        });
      }

      animateFromDataSettings(".title-animation-content");
    }
    if ($.exists(".text-animation")) {
      const fadeArray = gsap.utils.toArray(".text-animation");

      fadeArray.forEach((item) => {
        let split_text = item.getAttribute("data-split-text") || "chars";

        let titleSplit = new SplitText(item, { type: "chars,words" });

        let fade_direction = item.getAttribute("data-direction") || "textLeft";

        let ease_value = item.getAttribute("data-ease") || "back.out(1.7)";
        let fade_offset = +item.getAttribute("data-offset") || 50;
        let duration_value = +item.getAttribute("data-duration") || 1;
        let delay_value = +item.getAttribute("data-delay") || 0.15;
        let onscroll_value = +item.getAttribute("data-on-scroll") || 1;
        let stagger = +item.getAttribute("data-stagger") || 0.02;

        gsap.set(item, { perspective: 400 });

        if (fade_direction === "textTop") {
          gsap.set(titleSplit.words, { overflow: "hidden" });
        }

        const animationProps = {
          opacity: 0,
          duration: duration_value,
          delay: delay_value,
          ease: ease_value,
          stagger: stagger,
        };
        let elementsToAnimate = titleSplit.chars;
        switch (split_text) {
          case "chars":
            elementsToAnimate = titleSplit.chars;
            break;
          case "words":
            elementsToAnimate = titleSplit.words;
            break;
          default:
            elementsToAnimate = [item];
        }

        switch (fade_direction) {
          case "textLeft":
            animationProps.x = fade_offset;
            break;
          case "textRight":
            animationProps.x = -fade_offset;
            break;
          case "textTop":
            animationProps.y = fade_offset;
            break;
          case "textBottom":
            animationProps.y = -fade_offset;
            break;
        }
        if (onscroll_value === 1) {
          animationProps.scrollTrigger = {
            trigger: item,
            start: "top 85%",
            scrub: false,
            markers: false,
            onEnter: () => {
              if (item.querySelectorAll(".underline-anim")) {
                item.querySelectorAll(".underline-anim").forEach((line) => {
                  if (line) line.classList.add("active");
                  else return 0;
                });
              } else return 0;
            },
          };
        }
        gsap.from(elementsToAnimate, animationProps);
      });
    }
  }

  /*--------------------------------------------------------------
  12. Fade Animation
--------------------------------------------------------------*/
  function fadeAnimation() {
    if ($.exists(".fade-animation")) {
      const fadeArray = gsap.utils.toArray(".fade-animation");
      fadeArray.forEach((item) => {
        let fade_direction = item.getAttribute("data-direction") || "bottom";
        let fade_offset = +item.getAttribute("data-offset") || 50;
        let duration_value = +item.getAttribute("data-duration") || 1.5;
        let delay_value = +item.getAttribute("data-delay") || 0.15;
        let ease_value = item.getAttribute("data-ease") || "power2.out";
        let onscroll_value = +item.getAttribute("data-on-scroll") || 1;

        const animationProps = {
          opacity: 0,
          duration: duration_value,
          delay: delay_value,
          ease: ease_value,
        };

        switch (fade_direction) {
          case "top":
            animationProps.y = -fade_offset;
            break;
          case "left":
            animationProps.x = -fade_offset;
            break;
          case "right":
            animationProps.x = fade_offset;
            break;
          case "bottom":
            animationProps.y = fade_offset;
            break;
          default:
            animationProps.y = fade_offset;
        }

        if (onscroll_value === 1) {
          animationProps.scrollTrigger = {
            trigger: item,
            start: "top 85%",
            markers: false,
            scrub: false,
          };
        }
        gsap.from(item, animationProps);
      });
    }
  }

  /*--------------------------------------------------------------
   13. Text Color Change
   --------------------------------------------------------------*/
  function textColorShiption() {
    if ($.exists(".text-color-shiption")) {
      const darkMode = gsap.utils.toArray(".dark");

      const textColorShiption = gsap.utils.toArray(".text-color-shiption");

      textColorShiption.forEach((elem) => {
        let colorText = +elem.getAttribute("data-color") || 0;

        const splitTexdsft = new SplitText(elem, {
          type: "chars, words",
          linesClass: "split-line",
        });

        if (darkMode.length !== 0) {
          gsap.set(splitTexdsft.chars, { color: "#656565" });
        } else {
          gsap.set(splitTexdsft.chars, { color: "#c1c1c1" });
        }

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
            end: "bottom center",
            scrub: true,
            markers: false,
          },
        });
        tl.to(splitTexdsft.chars, {
          color: "var(--black-color)",
          stagger: 0.2,
          ease: "power2.out",
          duration: 1.2,
        });

        if (colorText !== 0) {
          tl.to(
            splitTexdsft.chars,
            {
              color: `${colorText}`,
              stagger: 0.2,
              ease: "power2.out",
              duration: 1.5,
            },
            "2"
          );
        }
      });
    }
  }

  /*--------------------------------------------------------------
  14. Video Section ParallaxBg
  --------------------------------------------------------------*/
  function parallaxBg() {
    if ($.exists(".ak-parallax")) {
      gsap.utils.toArray(".ak-parallax").forEach((element) => {
        if (element.length > 0) return;
        let img = element.querySelector("img")
          ? element.querySelector("img")
          : element;

        gsap.set(element, { overflow: "hidden" });
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            scrub: true,
            pin: false,
            start: "top bottom",
            end: "bottom top",
          },
        });

        tl.fromTo(
          img,
          {
            yPercent: -20,
            ease: "none",
          },
          {
            yPercent: 20,
            ease: "none",
          }
        );
      });
    }
  }

  /*--------------------------------------------------------------
  15. Hover Blog Card Animation
  --------------------------------------------------------------*/
  function hoverImagesServiceCard() {
    if ($(".service-content").length > 0) {
      const $serviceContent = $(".service-content");

      $(".service-card img").each(function () {
        gsap.set(this, { scale: 0.8, opacity: 0 });
      });
      $serviceContent.on("mouseenter", ".service-card", function () {
        const $img = $(this).find("img");
        if ($img.length === 0) return;

        gsap.to($img[0], {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      });

      $serviceContent.on("mouseleave", ".service-card", function () {
        const $img = $(this).find("img");
        if ($img.length === 0) return;

        gsap.to($img[0], {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "power3.out",
        });
      });

      $serviceContent.on("mousemove", ".service-card", function (e) {
        const $card = $(this);
        const $img = $card.find("img");
        if ($img.length === 0) return;

        const rect = $card[0].getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 10;
        const y = (e.clientY - rect.top - rect.height / 2) / 10;
        gsap.to($img[0], { x, y, duration: 0.3 });
      });
    }

    if ($(".awards-list").length > 0) {
      const $awardsList = $(".awards-list");
      const $hoverImageContainer = $(".awards-hover-image");
      const $hoverImage = $("#awardsHover");
      if ($hoverImage.length === 0 || $hoverImageContainer.length === 0) return;

      const $elements = $(".awards-card");

      if ($elements.length > 0) {
        const $firstElem = $elements.first();
        const firstImgSrc = $firstElem.find("img").prop("src") || "";
        if (firstImgSrc !== "") {
          $hoverImage.prop("src", firstImgSrc);
          gsap.set($hoverImageContainer[0], { x: 0, y: 0 });
          gsap.to($hoverImageContainer[0], {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          });
        }

        $elements.on("mouseenter", function () {
          const $elem = $(this);
          const imgSrc = $elem.find("img").prop("src") || "";
          if (imgSrc === "") return;

          $hoverImage.prop("src", imgSrc);
          gsap.set($hoverImageContainer[0], { x: 0, y: 0 });
          gsap.to($hoverImageContainer[0], {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
          });
        });

        $elements.on("mouseleave", function () {
          gsap.to($hoverImageContainer[0], {
            scale: 0.5,
            opacity: 0,
            duration: 0.5,
            ease: "power3.out",
          });
        });

        $elements.on("mousemove", function (e) {
          const $elem = $(this);
          const rect = $elem[0].getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) / 10;
          const y = (e.clientY - rect.top - rect.height / 2) / 10;
          gsap.to($hoverImageContainer[0], { x, y, duration: 0.3 });
        });
      }
    }
  }

  /*--------------------------------------------------------------
  16. Hover Price Package
  --------------------------------------------------------------*/
  function packageContent() {
    const $packageContent = $(".package-content");
    if (!$packageContent.length) return;
    $packageContent.on("mouseenter", ".style2", function () {
      $(".package-content .style2").removeClass("active");
      $(this).addClass("active");
    });
    $packageContent.on("mouseleave", function () {
      $(".package-content .style2").removeClass("active");
      const $defaultItem = $(".package-content .style2").eq(1);
      if ($defaultItem.length) $defaultItem.addClass("active");
    });
  }

  /*--------------------------------------------------------------
  17. Circle Button Animation
  --------------------------------------------------------------*/

  function circleBtnAnim() {
    if ($.exists(".circle-btn-anim")) {
      const strength = 40;
      $(".circle-btn-anim").on("mousemove", function (event) {
        let $circleButton = $(this);
        let bounding = this.getBoundingClientRect();
        const newX =
          (event.clientX - bounding.left) / $circleButton.outerWidth() - 0.5;
        const newY =
          (event.clientY - bounding.top) / $circleButton.outerHeight() - 0.5;
        gsap.to($circleButton, {
          x: newX * strength,
          y: newY * strength,
          ease: "power4.out",
        });
      });

      $(".circle-btn-anim").on("mouseleave", function () {
        let $circleButton = $(this);
        let $btnText = $circleButton.find(".text");
        gsap.to($circleButton, { x: 0, y: 0, ease: "power2.out" });
        if ($btnText.length > 0) {
          gsap.to($btnText, { x: 0, y: 0, ease: "power2.out" });
        }
      });
    }
  }

  /*--------------------------------------------------------------
  18. Images Left Show Animation
  --------------------------------------------------------------*/
  function imgAnimLeftShow() {
    if ($.exists(".img-anim-left-show")) {
      $(".img-anim-left-show").each(function () {
        let $imgReveal = $(this);
        let $image = $imgReveal.find("img");
        let delayValue = parseFloat($imgReveal.attr("data-delay")) || 0.15;

        gsap
          .timeline({
            delay: delayValue,
            scrollTrigger: {
              trigger: $imgReveal[0],
              start: "top 85%",
              scrub: false,
              markers: false,
            },
          })
          .set($imgReveal, { autoAlpha: 1 })
          .from($imgReveal, {
            xPercent: -100,
            duration: 1.2,
            ease: "power2.out",
          })
          .from($image, {
            xPercent: 100,
            scale: 1.2,
            duration: 1.5,
            ease: "power2.out",
            delay: -1.5,
          })
          .fromTo(
            $image,
            { yPercent: -20 },
            {
              yPercent: 20,
              scrollTrigger: {
                trigger: $imgReveal[0],
                scrub: true,
                start: "top bottom",
                end: "bottom top",
                ease: "power2.out",
              },
            }
          );
      });
    }
  }

  /*--------------------------------------------------------------
  19. PlayVideo Buttons Animation
  --------------------------------------------------------------*/
  function playVideoBlockAnim() {
    if ($.exists(".ak-video-block")) {
      gsap.utils.toArray(".ak-video-block").forEach((element) => {
        const image = element.querySelector(".video-img");
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: element,
            scrub: true,
            pin: false,
            start: "top bottom",
            end: "bottom top",
          },
        });

        tl.fromTo(
          image,
          {
            yPercent: -20,
            ease: "none",
            scale: 1,
          },
          {
            yPercent: 20,
            ease: "none",
            scale: 1.2,
          }
        );
      });
    }
  }

  /*--------------------------------------------------------------
  20. Blog Crad Animation
  --------------------------------------------------------------*/
  function blogCardAnim() {
    if ($.exists(".blog-card")) {
      const blogCard = gsap.utils.toArray(".blog-card");
      blogCard.forEach((element) => {
        const image = element.querySelector("img");
        gsap.fromTo(
          image,
          {
            yPercent: -20,
            ease: "none",
          },
          {
            yPercent: 20,
            scrollTrigger: {
              trigger: element,
              scrub: true,
              start: "top bottom",
              end: "bottom top",
              ease: Power2.out,
            },
          }
        );
      });
    }
  }
  /*--------------------------------------------------------------
  21. Image Scroll Animation
  --------------------------------------------------------------*/
  function imageScroll() {
    if ($.exists(".image-scroll")) {
      const imageScroll = gsap.utils.toArray(".image-scroll");
      imageScroll.forEach((element) => {
        let data_height = +element.getAttribute("data-height") || 250;
        if (data_height) {
          gsap.set(element, { height: `${data_height}px` });
        }

        const image = element.querySelector("img");
        gsap.fromTo(
          image,
          {
            yPercent: -20,
            ease: "none",
          },
          {
            yPercent: 20,
            scrollTrigger: {
              trigger: element,
              scrub: true,
              start: "top bottom",
              end: "bottom top",
              ease: Power2.out,
            },
          }
        );
      });
    }
  }

  /*--------------------------------------------------------------
  22. Hero One Animation
  --------------------------------------------------------------*/
  function heroOne() {
    if ($.exists(".digital-agencye-hero")) {
      let heroTimeline = gsap.timeline({ delay: 3.2 });
      let digitalText = document.querySelectorAll(
        ".digital-agencye-hero .digital"
      );
      let agencyText = document.querySelectorAll(
        ".digital-agencye-hero .agency"
      );
      let heroButtons = gsap.utils.toArray(".digital-agencye-hero .hero-btn");
      const imgReveal = document.querySelectorAll(".hero-right-image");

      if (digitalText.length && agencyText.length && heroButtons.length) {
        let splitDigital = new SplitText(digitalText, {
          type: "chars,words,lines",
        });
        let splitAgency = new SplitText(agencyText, {
          type: "chars,words,lines",
        });

        heroTimeline.from(splitAgency.chars, {
          duration: 2.5,
          x: -250,
          autoAlpha: 0,
          stagger: 0.02,
          ease: "elastic.out(1, 0.3)",
        });

        heroTimeline.from(
          splitDigital.chars,
          {
            duration: 1,
            y: -150,
            autoAlpha: 0,
            stagger: 0.05,
            ease: "bounce.out",
          },
          "0.8"
        );

        heroTimeline.from(
          heroButtons,
          {
            duration: 1,
            autoAlpha: 0,
            y: -100,
            ease: "bounce.out",
          },
          "0.5"
        );

        heroTimeline.to(
          imgReveal,
          {
            duration: 2,
            width: "-0%",
            ease: "expo.in",
            delay: 0.5,
          },
          "-=3.5"
        );
      }
    }
  }

  /*--------------------------------------------------------------
  23. Services Branding Animation
  --------------------------------------------------------------*/
  function servicesBrandingAnimation() {
    if ($.exists(".services-branding")) {
      const $servicesBrandingSection = $(".services-branding");

      {
        const $headings = $servicesBrandingSection.find("h2");
        if ($headings.length === 0) return;
        $headings.on("mouseenter", function () {
          const $image = $(this).next();
          gsap.to($image[0], {
            opacity: 1,
            scale: 1,
            duration: 0.1,
            ease: "power2.out",
          });
        });

        $headings.on("mousemove", function (e) {
          const $image = $(this).next();
          const rect = this.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;

          gsap.to($image[0], {
            x: x - this.offsetWidth / 2,
            y: y - this.offsetHeight / 2,
            duration: 0.1,
            ease: "power1.out",
          });
        });

        $headings.on("mouseleave", function () {
          const $image = $(this).next();
          gsap.to($image[0], {
            opacity: 0,
            scale: 0.5,
            duration: 0.1,
            ease: "power2.in",
          });
        });
      }
    }
  }

  /*--------------------------------------------------------------
    24. Update Background Image
  --------------------------------------------------------------*/
  function updateBackgroundImage() {
    // MODIFICATION: Changed selector to '#home-hero-section'
    if ($.exists("#home-hero-section")) {
      const body = $("body");
      // MODIFICATION: Changed selector to '#home-hero-section'
      const section = $("#home-hero-section");
      
      // MODIFICATION: Updated paths to the new image.
      // You can set a different image for dark mode if you have one.
      if (body.hasClass("dark") === false) {
        section.css(
          "background-image",
          // MODIFICATION: Using the new image path from your CSS
          'url("assets/img/bg/ram_mandir.webp")'
        );
      } else {
        section.css(
          "background-image",
          // MODIFICATION: Using the new image path from your CSS
          'url("assets/img/bg/ram_mandir.webp")' 
        );
      }
    }
  }
  /*--------------------------------------------------------------
  25. Methodology Animation
  --------------------------------------------------------------*/

  function methodologyCardContent() {
    if ($.exists(".methodology-wrapper")) {
      ScrollTrigger.matchMedia({
        "(min-width: 1200px)": function () {
          let pbmitpanels = gsap.utils.toArray(".methodology-wrapper .col");
          const spacer = 0;
          let pbmitheight = pbmitpanels[0].offsetHeight + 125;

          pbmitpanels.forEach((pbmitpanel, i) => {
            gsap.set(pbmitpanel, { left: `${i * 25}%` });
            ScrollTrigger.create({
              trigger: pbmitpanel,
              start: () => "top 125px",
              endTrigger: ".methodology-wrapper",
              end: `bottom top+=${pbmitheight + pbmitpanels.length * spacer}`,

              pin: true,
              pinSpacing: false,
            });
          });
        },
      });
    }
  }

  /*--------------------------------------------------------------
  26. Slider Text Context
    --------------------------------------------------------------*/
  function sliderTextContext() {
    if ($.exists(".slideing-text-content")) {
      const slideingContent = document.querySelector(".slideing-text-content");
      gsap.utils.toArray(".slideing-text").forEach((card, index) => {
        gsap.fromTo(
          card,
          {
            xPercent: index === 0 ? -10 : 10,
            ease: "none",
          },
          {
            xPercent: index === 0 ? 10 : -10,
            scrollTrigger: {
              trigger: slideingContent,
              scrub: 2,
              start: "top bottom",
              end: "bottom top",
              markers: false,
              ease: "power2.out",
            },
          }
        );
      });
    }
  }
  /*--------------------------------------------------------------
   27. Skill Bar Animation
   --------------------------------------------------------------*/
  function skillBar() {
    if ($.exists(".ak-skill-fill")) {
      const skillBars = document.querySelectorAll(".ak-skill-fill");
      skillBars.forEach((skillBar) => {
        const percentage = skillBar.dataset.percentage;

        gsap.to(skillBar, {
          width: `${percentage}%`,
          duration: 2,
          ease: "power4.out",
          scrollTrigger: {
            trigger: skillBar,
            start: "top 80%",
          },
        });
      });
    }
  }

  /*--------------------------------------------------------------
   28. Footer Text Animation
   --------------------------------------------------------------*/
  function footerText() {
    if ($.exists(".footer-cta-info")) {
      let footerTitleTwo = document.querySelectorAll(
        ".footer-cta-info .footer-cta-title-two"
      );

      let splitFooterTitleTwo = new SplitText(footerTitleTwo, {
        type: "chars",
      });

      let footerTimeline = gsap.timeline({ delay: 1, repeat: -1, yoyo: true });

      footerTimeline.from(splitFooterTitleTwo.chars, {
        duration: 2.5,
        x: -10,
        autoAlpha: 0,
        stagger: 0.02,
        ease: "elastic.out(1, 0.3)",
      });
    }
  }

  /*--------------------------------------------------------------
    29. Isotop Filter
    --------------------------------------------------------------*/
  function isotopItems() {
    if ($.exists(".isotop-items-portfolio")) {
      let $portfolio = $(".isotop-items-portfolio").isotope({});

      $(".isotop-item-menu").on("click", "li", function () {
        let filterValue = $(this).attr("data-filter");
        $portfolio.isotope({
          filter: filterValue,
        });
        $(".isotop-item-menu li").removeClass("is-clicked");
        $(this).addClass("is-clicked");
      });
    }
  }
  /*--------------------------------------------------------------
   30. About aAimate Stars
   --------------------------------------------------------------*/
  function animateStars() {
    gsap.to(".star-1", {
      scrollTrigger: {
        trigger: ".star-content",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      rotation: 360,
      ease: "none",
    });
    gsap.to(".star-2", {
      scrollTrigger: {
        trigger: ".star-content",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      rotation: -360,
      ease: "none",
    });
  }

  /*--------------------------------------------------------------
  31. Contact Stroke TitleAnim
  --------------------------------------------------------------*/
  function contactStrokeTitleAnim() {
    if ($.exists(".contact-title-stroke")) {
      let footerTitleTwo = document.querySelectorAll(".contact-title-stroke");

      gsap.set(footerTitleTwo, { perspective: 600 });

      let splitFooterTitleTwo = new SplitText(footerTitleTwo, {
        type: "chars,words,lines",
      });

      const tlds = gsap.timeline({
        scrollTrigger: {
          trigger: footerTitleTwo,
          scrub: false,
          start: "top bottom",
          end: "bottom top",
        },
      });

      tlds.fromTo(
        splitFooterTitleTwo.lines,
        {
          y: 60,
          rotationY: 65,
          opacity: 0,
          transformOrigin: "50% 50% 80px",
        },
        {
          y: 0,
          rotationY: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power4.out",
          transformOrigin: "50% 50% 0px",
          stagger: 0.2,
        }
      );
    }
  }

  /*--------------------------------------------------------------
  32. Newsletter Content
  --------------------------------------------------------------*/
  function newsletterContentAnim() {
    if ($.exists(".newsletter-content")) {
      const cnt_title = document.querySelectorAll(".newsletter-anim");

      cnt_title.forEach((title) => {
        let delay_value = +title.getAttribute("data-delay") || 0;
        const words = title.querySelectorAll(".anim-line-words");

        const anim = gsap.timeline({
          delay: delay_value,
          scrollTrigger: {
            trigger: title,
            start: "top 85%",
            toggleActions: "play none none none",
            markers: false,
          },
          onComplete: () => {
            const newsletter_wapper_active =
              document.querySelectorAll(".newsletter-wapper");
            if (newsletter_wapper_active) {
              newsletter_wapper_active.forEach((line) => {
                return line.classList.add("active");
              });
            }
          },
        });

        words.forEach((word, wordIndex) => {
          let duration_value = +title.getAttribute("data-duration") || 1;

          const split = new SplitText(word, {
            type: "chars,words",
          });

          gsap.set(split.words, {
            position: "relative",
            overflow: "hidden",
          });

          const wordDelay = wordIndex * 0.15;

          split.chars.forEach((char, charIndex) => {
            anim.fromTo(
              char,
              {
                translateY: "100%",
              },
              {
                translateY: "0%",
                duration: duration_value,
                ease: "power2.inOut",
              },
              charIndex * 0.02 + wordDelay
            );
          });
        });
      });
    }
  }

  /*--------------------------------------------------------------
 33. Feature Item HoverAnim
 --------------------------------------------------------------*/

  function featureItemHoverAnim() {
    if ($.exists(".feature-area")) {
      const $featureArea = $(".feature-area");
      const $featureAreaImg = $(".feature-area-img");
      const $featureItems = $(".feature-item");

      if ($featureAreaImg.length === 0 || $featureItems.length === 0) return;

      const setActiveItem = (item) => {
        $featureItems.removeClass("active");
        $(item).addClass("active");
        const $featureItemBg = $(item).find(".feature-item-bg");
        if ($featureItemBg.length > 0 && $featureItemBg.prop("src") !== "") {
          $featureAreaImg.prop("src", $featureItemBg.prop("src"));
        }
      };

      setActiveItem($featureItems[0]);
      $featureArea.on("mouseenter", ".feature-item", function () {
        setActiveItem(this);
      });
      $featureArea.on("mouseleave", function () {
        setActiveItem($featureItems[0]);
      });
    }
  }

  /*--------------------------------------------------------------
   34. Comming Soon Count Down
   --------------------------------------------------------------*/

  function startCountdown() {
    if ($.exists(".funfact.style1")) {
      const countdownElements = {
        months: document.getElementById("months"),
        days: document.getElementById("days"),
        hours: document.getElementById("hours"),
        minutes: document.getElementById("minutes"),
      };
      if (!Object.values(countdownElements).every((el) => el)) {
        return;
      }

      const targetDate = new Date("2025-08-31T00:00:00").getTime();

      const updateCountdown = () => {
        const now = Date.now();
        const timeRemaining = targetDate - now;

        if (timeRemaining <= 0) {
          clearInterval(interval);
          Object.values(countdownElements).forEach((el) => {
            el.textContent = "0";
          });
          return;
        }

        const msPerMinute = 1000 * 60;
        const msPerHour = msPerMinute * 60;
        const msPerDay = msPerHour * 24;
        const msPerMonth = msPerDay * 30.44;
        const months = Math.floor(timeRemaining / msPerMonth);
        const days = Math.floor((timeRemaining % msPerMonth) / msPerDay);
        const hours = Math.floor((timeRemaining % msPerDay) / msPerHour);
        const minutes = Math.floor((timeRemaining % msPerHour) / msPerMinute);

        countdownElements.months.textContent = months;
        countdownElements.days.textContent = days;
        countdownElements.hours.textContent = hours;
        countdownElements.minutes.textContent = minutes;
      };

      const interval = setInterval(updateCountdown, 60000);
      updateCountdown();
    }
  }

  /*--------------------------------------------------------------
    35. NEW TEAM MODAL
  --------------------------------------------------------------*/
  function initTeamModal() {
    // --- START: EDIT THIS SECTION WITH YOUR TEAM DATA ---
    // Use the 'team-id' from the HTML as the key
    // Add real image URLs and social media links

    const teamData = {
      board: [
        {
          name: "Tarun Kumar Singh",
          role: "President",
          img: "assets/img/team/board/IMG_20250406_235350_004 - Tarun Kumar Singh 23bce11421.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/tarun-singh-112428294",
            instagram: "https://www.instagram.com/0209.tarun",
          },
        },
        {
          name: "Vishal Kumar",
          role: "Vice President, Founder",
          img: "assets/img/team/board/20241214_143908 - Vishal Kumar 23mim10133.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/vishal-kumar-5b5b30276",
            instagram: "https://www.instagram.com/vishalkumar10_",
          },
        },
        {
          name: "Vishwas singh Chouhan",
          role: "General Secretary",
          img: "assets/img/team/board/IMG_20251112_175943 - Vishwas Chouhan 23bce10111.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/vishwas-chouhan-82663828a",
            instagram: "https://www.instagram.com/vishwas_chouhan14",
          },
        },
      ],
      technical: [
        {
          name: "Himalaya Yadav",
          role: "Lead",
          img: "assets/img/team/tech/Himalaya_23MEI10069 - HIMALAYA YADAV 23MEI10069.jpg",
          links: {
            linkedin: "#",
            instagram: "#",
          },
        },
        {
          name: "Aryan Kumar Rai",
          role: "Core Member",
          img: "assets/img/team/tech/AryanKumarRai_24bai10151 - ARYAN KUMAR RAI 24BAI10151.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/aryankumarrai",
            instagram: "https://www.instagram.com/aryan_islost",
          },
        },
        {
          name: "Rahul Kumar",
          role: "Core Member",
          img: "assets/img/team/tech/Rahul_kumar_24BCE10727 - RAHUL KUMAR 24BCE10727.png",
          links: {
            linkedin: "https://www.linkedin.com/in/rahulkumar-web",
            instagram: "https://www.instagram.com/rahulkr_1623",
          },
        },
        {
          name: "Sonu Kumar",
          role: "Core Member",
          img: "assets/img/team/tech/SONU_KUMAR_24BSA10142 - SONU KUMAR 24BSA10142.jpg",
          links: {
            linkedin: "http://linkedin.com/in/sonu-kumar-29b83b308",
            instagram: "https://www.instagram.com/sonu_.kr_25",
          },
        },
        {
          name: "Divyanshu Karma",
          role: "Core Member",
          img: "assets/img/team/tech/divyanshu__24BET10016.png",
          links: {
            linkedin: "https://www.linkedin.com/in/divyanshu-karma-77121b329",
            instagram: "#",
          },
        },
      ],
      design: [
        {
          name: "Design Head",
          role: "UI/UX",
          img: "https://placehold.co/220x280/8b5cf6/white?text=Head",
          links: {
            linkedin: "#",
            instagram: "#",
          },
        },
      ],
      event: [
        {
          name: "Devendra Mewada",
          role: "Lead",
          img: "assets/img/team/evm/IMG_20251003_201848 - Devendra Mewada 23bce10089.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/ronin_10",
          },
        },
        {
          name: "Anuradha Kumari",
          role: "Co-Lead",
          img: "assets/img/team/evm/20251106_173221 - Anuradha Kumari 23bcg10043.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/anuradha-kumari-8791a4270",
            instagram: "https://www.instagram.com/anuradha_110104",
          },
        },
        {
          name: "Beauty Singh",
          role: "Core Member",
          img: "assets/img/team/evm/IMG_20251019_114038 - BEAUTY SINGH 24BCE10889.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/beauty-singh-9a6263293",
            instagram: "https://www.instagram.com/beauty__singh_10",
          },
        },
        {
          name: "Aaditya Singhal",
          role: "Core Member",
          img: "assets/img/team/evm/1000041900 - AADITYA SINGHAL 25MIP10134.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/aaditya-singhal-b048502a0",
            instagram: "https://www.instagram.com/mrsinghal_09",
          },
        },
        {
          name: "Ojasva Pandey",
          role: "Core Member",
          img: "assets/img/team/evm/OjasvaPandey_25bce10500 - OJASVA PANDEY 25BCE10500.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/ojasva-pandey-508a2a380",
            instagram: "https://www.instagram.com/ojasxa_p",
          },
        },
        {
          name: "Aditi Singh",
          role: "Core Member",
          img: "assets/img/team/evm/aditiSingh_24BAI10047 - ADITI SINGH 24BAI10047.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/aditi-singh-b67289324",
            instagram: "https://www.instagram.com/aditiiss7",
          },
        },
        {
          name: "Sara",
          role: "Core Member",
          img: "assets/img/team/evm/IMG_20251102_010210_362 - SARA 24BSA10335.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/sara-4a1a25344",
            instagram: "https://www.instagram.com/saramanocha23",
          },
        },
        {
          name: "Nikhil Mishra",
          role: "Core Member",
          img: "assets/img/team/evm/IMG_20240719_173816 - NIKHIL KUMAR MISHRA 24BSA10179.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/nikhil-mishra-837765310",
            instagram: "https://www.instagram.com/nikhilmishra_2005",
          },
        },
        {
          name: "DRON KAUSHIK",
          role: "Core Member",
          img: "assets/img/team/evm/dronkaushik_24bey10101 - DRON KAUSHIK 24BEY10101.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/dronkaushik2005",
            instagram: "https://www.instagram.com/dron.kaushik",
          },
        },
        {
          name: "Nandine Pandey",
          role: "Core Member",
          img: "assets/img/team/evm/1000116345 - NANDINE PANDEY 24BAI10446.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/pilotnandini4718",
          },
        },
        {
          name: "Harshvardhan Singh Jaisawat",
          role: "Core Member",
          img: "assets/img/team/evm/harshvardhan Singh jaisawat _24bce11064 - HARSHVARDHAN SINGH JAISAWAT 24BCE11064.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/harshvardhan-singh6131",
            instagram: "https://www.instagram.com/harsxh___06",
          },
        },
        {
          name: "Ayush Shukla",
          role: "Core Member",
          img: "assets/img/team/evm/Ayush_24BEC10006 - AYUSH SHUKLA 24BEC10006.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/shuklamayush",
          },
        },
        {
          name: "Sananda Bhowmik",
          role: "Core Member",
          img: "assets/img/team/evm/Sananda Bhowmik _ 25BAI11406 - SANANDA BHOWMIK 25BAI11406.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/sananda-bhowmik-47642337b",
            instagram: "https://www.instagram.com/sananda_bhowmik_",
          },
        },
        {
          name: "Arun Chaudhary",
          role: "Core Member",
          img: "assets/img/team/evm/arun_25bce10971 - ARUN CHAUDHARY 25BCE10971.png",
          links: {
            linkedin: "http://www.linkedin.com/in/arun-chaudhary-9b9547363",
            instagram: "https://www.instagram.com/arun_chaudhary_29",
          },
        },
        {
          name: "Abhishek Tiwari",
          role: "Core Member",
          img: "assets/img/team/evm/Abhishek_24BCE11220 - ABHISHEK TIWARI 24BCE11220.webp",
          links: {
            linkedin: "https://www.linkedin.com/in/abhishek-tiwari-1a65b4322",
            instagram: "https://www.instagram.com/abhishekkp3103",
          },
        },
        {
          name: "Tanya Tripathi",
          role: "Core Member",
          img: "assets/img/team/evm/SAVE_20251111_195454 - TANYA TRIPATHI 24BAI10414.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/tanya-tripathi-702468322",
            instagram: "#",
          },
        },
        {
          name: "Riddhi Sharma",
          role: "Core Member",
          img: "assets/img/team/evm/IMG_20251112_120106 - RIDDHI SHARMA 24BAI10674.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/riddhi-sharma-a47565398",
            instagram: "https://www.instagram.com/riddhiishrma",
          },
        },
        {
          name: "Ashish Ranjan",
          role: "Core Member",
          img: "assets/img/team/evm/IMG_20251112_120432 - ASHISH RANJAN 25BHI10057.jpg",
          links: {
            linkedin: "http://www.linkedin.com/in/ashish-ranjan-bb9175367",
            instagram: "https://www.instagram.com/debug.ashh",
          },
        },
        {
          name: "Kushal Keshav",
          role: "Core Member",
          img: "assets/img/team/evm/Kushal Keshav 25BSA10104 - KUSHAL KESHAV 25BSA10104.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/kkeshav_25",
          },
        },
        {
          name: "Alisha Sinha",
          role: "Core Member",
          img: "assets/img/team/evm/alishasinha_24bhi10116 - Alisha Sinha 24BHI10116.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/alishaa_810",
          },
        },
        {
          name: "Siya Panwar",
          role: "Core Member",
          img: "assets/img/team/evm/siya_25bai10149 - SIYA PANWAR 25BAI10149.webp",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/siyapanwar.2604",
          },
        },
        {
          name: "Rudranshu Tiwari",
          role: "Core Member",
          img: "assets/img/team/evm/IMG_20241209_191456_11zon - RUDRANSHU TIWARI 24BCE10852.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/rudranshu-tiwari-682b38237",
            instagram: "https://www.instagram.com/_rudra_25_",
          },
        },
        {
          name: "Prantik Kesariya",
          role: "Core Member",
          img: "assets/img/team/evm/prantik_24bce11016 - PRANTIK KESARIYA 24BCE11016.jpg",
          links: {
            linkedin: "http://www.linkedin.com/in/prantik-kesariya",
            instagram: "https://www.instagram.com/not_prantik",
          },
        },
        {
          name: "Dashkrat Srivastava",
          role: "Core Member",
          img: "assets/img/team/evm/Dashkrat _24BCE11239 - DASHKRAT SRIVASTAVA 24BCE11239.jpg",
          links: {
            linkedin: "#",
            instagram: "#",
          },
        },
        {
          name: "Abhinaya Singh",
          role: "Core Member",
          img: "assets/img/team/evm/IMG-20251112-WA0006 - ABHINAYA SINGH 23MIP10115.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/abhinaya-singh-ba436828a",
            instagram: "https://www.instagram.com/abhinaya.2404",
          },
        },
        {
          name: "Srijan Varma",
          role: "Core Member",
          img: "assets/img/team/evm/Photo - SRIJAN VARMA 24BCE11103.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/srijan_varma_",
          },
        },
        {
          name: "Aryan Mishra",
          role: "Core Member",
          img: "assets/img/team/evm/AryanMishra_24MIP10041 - ARYAN MISHRA 24MIP10041.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/aryan-mishra-0a886530a",
            instagram: "https://www.instagram.com/aryan_mishra62",
          },
        },
        {
          name: "Ridhima Pandey",
          role: "Core Member",
          img: "assets/img/team/evm/ridhima_25bai11233 - RIDHIMA PANDEY 25BAI11233.png",
          links: {
            linkedin: "https://www.linkedin.com/in/ridhima-pandey-980a21270",
            instagram: "https://www.instagram.com/ridhimip",
          },
        },
        {
          name: "Yash Pratap Singh",
          role: "Core Member",
          img: "assets/img/team/evm/Yash_25MIM10193 - YASH PRATAP SINGH 25MIM10193.jpeg",
          links: {
            linkedin: "http://linkedin.com/in/yash-pratap-singh-957408380",
            instagram: "https://www.instagram.com/yaassshhhhs",
          },
        },
        {
          name: "Aditya Raj Tiwari",
          role: "Core Member",
          img: "assets/img/team/evm/Aditya Raj Tiwari_24BCE10218 - ADITYA RAJ TIWARI 24BCE10218.jpeg",
          links: {
            linkedin: "https://www.linkedin.com/in/aditya-raj-tiwari-0aba50321",
            instagram: "https://www.instagram.com/aditya_tiwari06",
          },
        },
        {
          name: "Ayushi",
          role: "Core Member",
          img: "assets/img/team/evm/Ayushi_25BSA10037 - AYUSHI 25BSA10037.jpeg",
          links: {
            linkedin: "https://www.linkedin.com/in/ayushi-rai-560011380",
            instagram: "https://www.instagram.com/a_yushiroy",
          },
        },
        {
          name: "Hirdyansh Garg",
          role: "Core Member",
          img: "assets/img/team/evm/DSC_0087 - HIRDYANSH GARG 24BCY10157.JPG",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/urbro._.hirdyansh",
          },
        },
        {
          name: "Kritika Maurya",
          role: "Core Member",
          img: "assets/img/team/evm/KritikaMaurya_24BCE10437 - KRITIKA MAURYA 24BCE10437.jpg",
          links: {
            linkedin: "http://www.linkedin.com/in/kritika-maurya-b362b1361",
            instagram: "https://www.instagram.com/kritika_m_01",
          },
        },
        {
          name: "Leena Vaishnav",
          role: "Core Member",
          img: "assets/img/team/evm/IMG_20251112_212321 - LEENA VAISHNAV 25BCE11206.png",
          links: {
            linkedin: "https://www.linkedin.com/in/ leena-vaishnav-52724a384",
            instagram: "https://www.instagram.com/leenaavaishnav",
          },
        },
        {
          name: "Manvi",
          role: "Core Member",
          img: "assets/img/team/evm/Manvi_24BAI10510 - MANVI 24BAI10510.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/manvipunia",
            instagram: "https://www.instagram.com/manvi_punia3",
          },
        },
        {
          name: "Nayansi Anand",
          role: "Core Member",
          img: "assets/img/team/evm/IMG_20251112_210538 - NAYANSI ANAND 24MEI10051.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/nayansi-anand-35a99a31b",
            instagram: "https://www.instagram.com/nayan._si",
          },
        },
        {
          name: "Raj Ratan",
          role: "Core Member",
          img: "assets/img/team/evm/RajRatan_24BCE10959 - RAJ RATAN 24BCE10959.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/rajrrt",
            instagram: "https://www.instagram.com/raj_rrt_",
          },
        },
        {
          name: "Uttara Chaturvedi",
          role: "Core Member",
          img: "assets/img/team/evm/UttaraChaturvedi_25MIM10159 - UTTARA CHATURVEDI 25MIM10159.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/uttara-chaturvedi-67070632b",
            instagram: "https://www.instagram.com/_uttarashares_",
          },
        },
        {
          name: "AMBUJ SINGH",
          role: "Core Member",
          img: "assets/img/team/evm/Ambuj_24bai10729 - AMBUJ SINGH 24BAI10729.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/de4th.d4gger",
          },
        },
        {
          name: "SUMIRAN DHAKED",
          role: "Core Member",
          img: "assets/img/team/evm/SUMIRAN_24BCY10102 - SUMIRAN DHAKED 24BCY10102.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/_sim_simmii_",
          },
        },
        {
          name: "NAINI  NAUTIYAL",
          role: "Core Member",
          img: "assets/img/team/evm/IMG_0550 - NAINI NAUTIYAL 24BAI10526.png",
          links: {
            linkedin: "https://www.linkedin.com/in/naini-nautiyal-736b29317",
            instagram: "https://www.instagram.com/naini.nautiyal_7",
          },
        },
        {
          name: "Shivam Choubey",
          role: "Core Member",
          img: "https://placehold.co/220x280/ec4899/white?text=Core-Member",
          links: {
            linkedin: "#",
            instagram: "#",
          },
        },
        {
          name: "Chavi Agrawal",
          role: "Core Member",
          img: "https://placehold.co/220x280/ec4899/white?text=Core-Member",
          links: {
            linkedin: "#",
            instagram: "#",
          },
        },
      ],
      content: [
        {
          name: "Aditya Singh",
          role: "Lead",
          img: "assets/img/team/content/Aditya_24BSA10344 - ADITYA KUMAR SINGH 24BSA10344.jpg",
          links: {
            linkedin: "https://in.linkedin.com/in/aditya-kumar-singh-462752363",
            instagram: "https://www.instagram.com/its__adi07",
          },
        },
        {
          name: "Rishav Raj",
          role: "Co-Lead",
          img: "assets/img/team/content/Rishav Raj_24BCE11519 - Rishav Raj 24BCE11519.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/riraj.0620",
          },
        },
        {
          name: "Suwid Shreyansh",
          role: "Core Member",
          img: "assets/img/team/content/IMG_20251111_185343 - SUWID SHREYANSH 25BHI10105.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/suwid_shreyansh11",
          },
        },
        {
          name: "ADWITIYA DAS",
          role: "Core Member",
          img: "assets/img/team/content/IMG_20251111_185424 - ADWITIYA DAS 25BOE10031.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/adwitiya-das-19505a37b",
            instagram: "https://www.instagram.com/itsbr.ishti",
          },
        },
        {
          name: "Devyani Hemraj Bidve",
          role: "Core Member",
          img: "assets/img/team/content/Devyani_25MIP10156 - BIDVE DEVYANI HEMRAJ 25MIP10156.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/devyani-bidve-126944380",
            instagram: "#",
          },
        },
        {
          name: "Akanksha Shahi",
          role: "Core Member",
          img: "assets/img/team/content/Akanksha_24BCE11512 - AKANKSHA SHAHI 24BCE11512.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/akanksha-shahi-6609b3312",
            instagram: "https://www.instagram.com/akanksha27_shahi",
          },
        },
        {
          name: "Animesh Arjariya",
          role: "Core Member",
          img: "assets/img/team/content/20251112_183735_-_ANIMESH_ARJARIYA_25BAI11301.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/a.mesh_17",
          },
        },
        {
          name: "Arnav Singh",
          role: "Core Member",
          img: "assets/img/team/content/IMG_20251112_204123 - ARNAV SINGH 25BAI10072.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/arnav50433",
          },
        },
      ],
      pr: [
        {
          name: "Krish Raj Singh",
          role: "Lead",
          img: "assets/img/team/pr/Krish_24BCE10956 - KRISH RAJ SINGH 24BCE10956.JPG",
          links: {
            linkedin: "https://www.linkedin.com/in/krish-raj-singh-896790324",
            instagram: "https://www.instagram.com/krishsingh_028?igsh=YnB3aXlkcmZyejV1",
          },
        },
        {
          name: "Ayush",
          role: "Co-Lead",
          img: "assets/img/team/pr/Ayush_prcolead.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/ayushofficial7",
            instagram: "https://www.instagram.com/ayushofficial_10",
          },
        },
        {
          name: "Tejas",
          role: "Core Member",
          img: "assets/img/team/pr/Tejas_24BAS10025 - TEJAS 24BAS10025.jpg",
          links: {
            linkedin: "http://www.linkedin.com/in/tejas-k-61aaa8326",
            instagram: "https://www.instagram.com/tejas_kr_5",
          },
        },
        {
          name: "Kumari Shikha Kushwaha",
          role: "Core Member",
          img: "assets/img/team/pr/Shikha_25BCE11243 - KUMARI SHIKHA KUSHWAHA 25BCE11243.jpeg",
          links: {
            linkedin: "https://www.linkedin.com/in/shikha-kushwaha-a71977391",
            instagram: "https://www.instagram.com/shikha.hahaha",
          },
        },
        {
          name: "Satyam Kumar Singh",
          role: "Core Member",
          img: "assets/img/team/pr/satyam Kumar Singh _25BAI11327 - SATYAM KUMAR SINGH 25BAI11327.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/satyam_singh_2909",
          },
        },
        {
          name: "Ved Naman",
          role: "Core Member",
          img: "assets/img/team/pr/VED_25BAI10163 - VED NAMAN 25BAI10163.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/vedchauhann",
          },
        },
        {
          name: "dipika anand",
          role: "Core Member",
          img: "assets/img/team/pr/dipika_25BCE10703 - DIPIKA ANAND 25BCE10703.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/dipika-anand-b98316396",
            instagram: "https://www.instagram.com/dipika.loxve",
          },
        },
        {
          name: "Mishti Singh ",
          role: "Core Member",
          img: "assets/img/team/pr/MishtiSingh _24BCE10184 - MISHTI SINGH 24BCE10184.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/mishti-singh-7b3a3b332",
            instagram: "https://www.instagram.com/mishtiiii_s",
          },
        },
        {
          name: "Vineha Gupta",
          role: "Core Member",
          img: "assets/img/team/pr/vineha.gupta_25bai10610 - VINEHA GUPTA 25BAI10610.jpeg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/vineha_17",
          },
        },
        {
          name: "Khushi Purwar",
          role: "Core Member",
          img: "assets/img/team/pr/Snapchat-1751045452 - KHUSHI PURWAR 25BCE10021.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/khushi_purwar09",
          },
        },
        {
          name: "Prerna Bajpai",
          role: "Core Member",
          img: "assets/img/team/pr/Prerna-Bajpai_24BAI10917 - PRERNA BAJPAI 24BAI10917.jpeg",
          links: {
            linkedin: "http://www.linkedin.com/in/prerna-bajpai-a35bb6384",
            instagram: "https://www.instagram.com/prerna_23",
          },
        },
        {
          name: "Surbhi Bhardwaj",
          role: "Core Member",
          img: "assets/img/team/pr/surbhi_25BAI10325 - SURBHI BHARDWAJ 25BAI10325.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/_surbhii.06",
          },
        },
        {
          name: "Itiksha Bhardwaj",
          role: "Core Member",
          img: "assets/img/team/pr/Itiksha_25BAI10069 - ITIKSHA BHARDWAJ 25BAI10069.jpg",
          links: {
            linkedin: "http://www.linkedin.com/in/itikshabhardwaj",
            instagram: "https://www.instagram.com/itikshabhardwaj",
          },
        },
      ],
      social: [
        {
          name: "Aryan Jain",
          role: "Lead",
          img: "assets/img/team/social/aryan_24bce11080 - ARYAN JAIN 24BCE11080.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/aryanjain2666",
            instagram: "https://www.instagram.com/_.aryan.editz._",
          },
        },
        {
          name: "Amish Chaturvedi",
          role: "Co-Lead",
          img: "assets/img/team/social/Amish chaturvedi_24BAI10192 - AMISH CHATURVEDI 24BAI10192.png",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/___amish_23",
          },
        },
        {
          name: "Asmit Srivastava",
          role: "Core Member",
          img: "assets/img/team/social/IMG_8299_jpg - ASMIT SRIVASTAVA 24BCE10634.jpeg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/asmit.srivastava06",
          },
        },
        {
          name: "Somil Asati",
          role: "Core Member",
          img: "assets/img/team/social/IMG_7081 - Somil Asati 23bce10364.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/asatisomil",
          },
        },
        {
          name: "Vidisha",
          role: "Core Member",
          img: "assets/img/team/social/IMG_3216 - VIDISHA 24BEC10065.jpeg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/vidishamishraa",
          },
        },
        {
          name: "Arnav Kumar",
          role: "Core Member",
          img: "assets/img/team/social/Arnav Kumar_25BAI10304 - ARNAV KUMAR 25BAI10304.jpeg",
          links: {
            linkedin: "https://www.linkedin.com/in/arnav-kumar-597214388",
            instagram: "https://www.instagram.com/ydv_arnav_8",
          },
        },
        {
          name: "Aditya Ray",
          role: "Core Member",
          img: "assets/img/team/social/20240330_174140 - ADITYA RAY 25BAI11434.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/aditya.ziz",
          },
        },
        {
          name: "DEEPTANSHU KUMAR SINGH",
          role: "Core Member",
          img: "assets/img/team/social/IMG_0160 - DEEPTANSHU KUMAR SINGH 24MEI10018.jpeg",
          links: {
            linkedin: "https://www.linkedin.com/in/deeptanshu-kumar-singh-17a40a327",
            instagram: "https://www.instagram.com/prince.pixl",
          },
        },
        {
          name: "Tushar kumar Yadav",
          role: "Core Member",
          img: "assets/img/team/social/IMG_20251103_224208_684 - TUSHAR KUMAR YADAV 25BAI10839.webp",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/iamtushar_yadav",
          },
        },
        {
          name: "Dev Santosh Sarangdhar",
          role: "Core Member",
          img: "assets/img/team/social/Dev_24bce10233 - DEV SANTOSH SARANGDHAR 24BCE10233.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/devsarangdhar._",
          },
        },
      ],
      cultural: [
        {
          name: "Syed Haider Abbas",
          role: "Lead",
          img: "assets/img/team/cultural/HAIDER_24BAI10449.png - SYED HAIDER ABBAS 24BAI10449.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/haider_syed_1",
          },
        },
        {
          name: "Avishi Verma",
          role: "Co-Lead",
          img: "assets/img/team/cultural/IMG_20251111_193804 - AVISHI VERMA 24BAI10063.png",
          links: {
            linkedin: "https://www.linkedin.com/in/avishi-verma-901b86313",
            instagram: "https://www.instagram.com/avishi.diaries",
          },
        },
        {
          name: "Prateek Mishra",
          role: "Core Member",
          img: "assets/img/team/cultural/prateek_24BCY10072 - PRATEEK MISHRA 24BCY10072.jpeg",
          links: {
            linkedin: "https://www.linkedin.com/in/prateek-mishra-b41a87324",
            instagram: "https://www.instagram.com/medium_td",
          },
        },
        {
          name: "Shlok Sagar",
          role: "Core Member",
          img: "assets/img/team/cultural/Shlok_25BAI10567 - SHLOK SAGAR 25BAI10567.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/shlokcore",
          },
        },
        {
          name: "Sanchita Yadav",
          role: "Core Member",
          img: "assets/img/team/cultural/Sanchita_25BAI11100 - SANCHITA YADAV 25BAI11100.JPG",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/sanchita_y0807",
          },
        },
        {
          name: "Alfiya rashid jamal",
          role: "Core Member",
          img: "assets/img/team/cultural/alfiya_25bas10079 - ALFIYA RASHID JAMAL SIDDIQUI 25BAS10079.jpeg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/alfiyarashid07",
          },
        },
        {
          name: "Keshav Sharma",
          role: "Core Member",
          img: "assets/img/team/cultural/b0db97c2-f502-45bf-ae6b-464446a8b475 - KESHAV SHARMA 24BCE11506.jpeg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/_keshav_11_",
          },
        },
        {
          name: "Bhavya Aggarwal",
          role: "Core Member",
          img: "assets/img/team/cultural/bhavya_25bce10474 - BHAVYA AGGARWAL 25BCE10474.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/aggarwalbhavya204",
          },
        },
        {
          name: "Khushi Thakur",
          role: "Core Member",
          img: "assets/img/team/cultural/KhushiThakur_25BAI10429 - KHUSHI THAKUR 25BAI10429.webp",
          links: {
            linkedin: "http://linkedin.com/in/khushi-thakur-450498386",
            instagram: "https://www.instagram.com/thakurkudi_kt",
          },
        },
        {
          name: "Riya Konwar",
          role: "Core Member",
          img: "assets/img/team/cultural/riya_25bai11240 - RIYA KONWAR 25BAI11240.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/__.ria.aa__",
          },
        },
        {
          name: "Abhinav Saxena",
          role: "Core Member",
          img: "assets/img/team/cultural/WhatsApp Image 2025-11-11 at 23.39.23_44d76582 - ABHINAV SAXENA 24BAI10734.jpg",
          links: {
            linkedin: "http://www.linkedin.com/in/abhinav-saxena-21300a324",
            instagram: "https://www.instagram.com/abhinavsaxena_06",
          },
        },
        {
          name: "Rishan Manna",
          role: "Core Member",
          img: "assets/img/team/cultural/Rishan_25BCY10018 - RISHAN MANNA 25BCY10018.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/rizz_shawn",
          },
        },
        {
          name: "Pari Pancholiya",
          role: "Core Member",
          img: "assets/img/team/cultural/Pari_25BSA10049 - PARI PANCHOLIYA 25BSA10049.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/pari_pancholiya",
          },
        },
        {
          name: "Adarsh Shukla",
          role: "Core Member",
          img: "assets/img/team/cultural/Screenshot_20251103-180536 (1) (2) - ADARSH SHUKLA 24BEY10152.png",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/nikarsh,_21",
          },
        },
        {
          name: "Abhishek khandait",
          role: "Core Member",
          img: "assets/img/team/cultural/Screenshot_2025-11-12-11-03-49-02_99c04817c0de5652397fc8b56c3b3817 - ABHISHEK KHANDAIT 24MIM10238.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/abhishek-khandait-a13535308",
            instagram: "https://www.instagram.com/abhishekkhandait15",
          },
        },
        {
          name: "Kshitij Jha",
          role: "Core Member",
          img: "assets/img/team/cultural/IMG-20251111-WA0017 - KSHITIJ JHA 25BAI10543.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/kshi.iitiij",
          },
        },
        {
          name: "Anushika sharma",
          role: "Core Member",
          img: "assets/img/team/cultural/Anushika_25Bai11362 - ANUSHIKA SHARMA 25BAI11362.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/anushika-sharma-8362b9315",
            instagram: "https://www.instagram.com/anu.shika13",
          },
        },
        {
          name: "Arjun Vashishtha",
          role: "Core Member",
          img: "assets/img/team/cultural/IMG_9977_Original - ARJUN VASHISHTHA 23BCE11644.jpeg",
          links: {
            linkedin: "https://www.linkedin.com/in/arjun-vashishtha-b856a328a",
            instagram: "https://www.instagram.com/__arjunaa__",
          },
        },
        {
          name: "Nehal sonal",
          role: "Core Member",
          img: "assets/img/team/cultural/Nehal sonal_25BHI10068 - NEHAL SONAL 25BHI10068.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/nehs_09",
          },
        },
        {
          name: "Vanshika Kalyani",
          role: "Core Member",
          img: "assets/img/team/cultural/IMG-20250518-WA0214 - VANSHIKA KALYANI 24BEY10009.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/vanshika-kalyani-8a8a7b31b",
            instagram: "https://www.instagram.com/vanshikayaar06",
          },
        },
        {
          name: "Murtaza Ansari",
          role: "Core Member",
          img: "assets/img/team/cultural/IMG_20251112_215100 - ANSARI MURTAZA MUZAMMIL AKHTAR 24BAI10109.jpg",
          links: {
            linkedin: "#",
            instagram: "https://www.instagram.com/murtaza_ansari2504",
          },
        },
        {
          name: "Divyanshi Agrawal",
          role: "Core Member",
          img: "assets/img/team/cultural/Divyanshi Agrawal_24BCE11489 - DIVYANSHI AGRAWAL 24BCE11489.jpg",
          links: {
            linkedin: "divyanshi-agrawal3b",
            instagram: "https://www.instagram.com/yanshii__agr",
          },
        },
        {
          name: "Pranjal Chaudhary",
          role: "Core Member",
          img: "assets/img/team/cultural/IMG-20251112-WA0066 - PRANJAL CHAUDHARY 25MEI10090.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/pranjal-chaudhary-205453377",
            instagram: "#",
          },
        },
        {
          name: "Shreya Kumar",
          role: "Core Member",
          img: "assets/img/team/cultural/club photo - SHREYA KUMAR 24BCY10136.jpg",
          links: {
            linkedin: "https://www.linkedin.com/in/shreya-kumar-ba9510373",
            instagram: "https://www.instagram.com/shreyaaaa__05",
          },
        },
        {
          name: "Aman Ankur",
          role: "Core Member",
          img: "assets/img/team/cultural/Screenshot 2025-10-29 at 10.25.27 AM - AMAN ANKUR 24BAI10758.png",
          links: {
            linkedin: "http://www.linkedin.com/in/aa3111s",
            instagram: "https://www.instagram.com/aa3111s_",
          },
        },
      ],
    };

    // --- END: EDIT SECTION ---

    // Function to create the HTML for a single member card
    function createMemberCardHTML(member) {
      // Use placeholder image if none provided
      const imageUrl =
        member.img || "https://placehold.co/220x280/333/fff?text=Member";

      return `
        <div class="gbc-member-card">
          <b></b>
          <img src="${imageUrl}" alt="${member.name}">
          <div class="content">
            <p class="title">${member.name}<br><span>${member.role}</span></p>
            <ul class="sci">
              <li>
                <a href="${member.links.linkedin || "#"}">
                  <svg class="fa-brands fa-linkedin-in" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg>
                </a>
              </li>
              <li>
                <a href="${member.links.instagram || "#"}">
                  <svg class="fa-brands fa-instagram" width="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
      `;
    }

    // Modal open/close logic
    const $modal = $("#team-modal");
    const $overlay = $("#team-modal-overlay");
    const $modalGrid = $("#team-modal-grid");
    const $modalTitle = $("#team-modal-title");

    // Open Modal
    $(".gbc-team-card-wrapper").on("click", function () {
      const teamId = $(this).data("team-id");
      const teamName = $(this).data("team-name");
      const members = teamData[teamId] || [];

      // Set title
      $modalTitle.text(teamName || "Team Members");

      // Clear old members and add new ones
      $modalGrid.html(""); // Clear previous content
      if (members.length > 0) {
        members.forEach((member) => {
          const cardHTML = createMemberCardHTML(member);
          $modalGrid.append(cardHTML);
        });
      } else {
        $modalGrid.html("<p>This team's members will be updated soon!</p>");
      }

      // Show modal
      $overlay.addClass("active");
      $modal.addClass("active");
      // $("body").css("overflow", "hidden"); // Prevent background scrolling
      if (typeof lenis !== 'undefined') {
        lenis.stop(); // <-- This is the correct way to stop Lenis scroll
      } else {
        $("body").css("overflow", "hidden"); // Fallback
      }
    });

    // Close Modal
    function closeModal() {
      $overlay.removeClass("active");
      $modal.removeClass("active");
      // $("body").css("overflow", "auto"); // Restore scrolling
      if (typeof lenis !== "undefined") {
        lenis.start(); // <-- This is the correct way to resume Lenis scroll
      } else {
        $("body").css("overflow", "auto"); // Fallback
      }

      // Clear the grid *after* the modal is hidden
      setTimeout(() => {
        $modalGrid.html("");
      }, 300);
    }

    $("#team-modal-close").on("click", closeModal);
    $overlay.on("click", closeModal);
  }

  /*--------------------------------------------------------------
    36. NEW FOUNDER MODAL (Added 11/16/2025)
  --------------------------------------------------------------*/
  // This is a new, separate modal system just for the founder cards
  
  const $founderModalOverlay = $(".founder-modal-overlay");

  // Open Modal
  $(".founder-card").on("click", function () {
    const modalId = $(this).data("modal-target");
    const $modal = $(modalId);

    if ($modal.length) {
      $founderModalOverlay.addClass("active");
      $modal.addClass("active");
      // $("body").addClass("founder-modal-open");
      if (typeof lenis !== 'undefined') {
        lenis.stop();
      } else {
        $("body").css("overflow", "hidden");
      }
    }
  });

  // Close Modal
  function closeFounderModal() {
    $founderModalOverlay.removeClass("active");
    $(".founder-modal").removeClass("active");
    // $("body").removeClass("founder-modal-open");
    if (typeof lenis !== "undefined") {
      lenis.start();
    } else {
      $("body").css("overflow", "auto");
    }
  }
  $(".founder-modal-close, .founder-modal-overlay").on("click", closeFounderModal);

    /*--------------------------------------------------------------
    /* NEW: 37. DYNAMIC LATEST NEWS (Replaces Recent Events)
  --------------------------------------------------------------*/
  function populateLatestNews() {
    
    // --- START: EDIT THIS SECTION ---
    // Set the current status. Options are: "event", "recruitment", "none"
    const currentStatus = "none"; // <-- CHANGE THIS VALUE TO TEST (e.g., "recruitment" or "none")

    // 1. Data for "event" status
    const eventsData = [
      {
        title: "Sangam: Cultural Fest",
        image: "assets/img/team/team-5.png", // Event poster
        url: "event.html" // Link to event page
      },
      {
        title: "Tech Bootcamp",
        image: "assets/img/portfolio/portfolio-2.png",
        url: "event.html"
      },
      {
        title: "Holi Celebration",
        image: "assets/img/team/team-8.png",
        url: "event.html"
      },
    ];

    // 2. Data for "recruitment" status
    const recruitmentData = [
      {
        title: "Recruitment Open", // This text will show on hover
        image: "https://placehold.co/600x400/ff4a23/white?text=Join+Us&font=epilogue", // Use a generic recruitment image
        url: "https://forms.gle/UyVGYNqY52Eaydhm6" // Link to your Google Form
      }
      // You can add more recruitment cards here if needed
    ];
    
    // 3. Data for "none" status
    const nothingMessage = "Something great coming soon. Stay tuned!";

    // --- END: EDIT SECTION ---


    const $container = $("#dynamic-events-container");
    if (!$container.length) {
      return; // Stop if the container doesn't exist
    }

    let contentHtml = "";

    switch (currentStatus) {
      
      case "event":
        // --- Remove recruitment class if it exists ---
        $container.removeClass('recruitment-mode');
        // --- Build HTML for EVENTS ---
        // --- FIX: Added ', index' to the function parameters ---
        eventsData.forEach((item, index) => { 
          // --- Reverted test code: Apply animation to all items ---
          const animationClass = "img-anim-left-show";
          contentHtml += `
            <a href="${item.url}" class="portfolio-card style-1">
              <div class="portfolio-img img-anim-left-show">
                <img src="${item.image}" alt="${item.title}" />
              </div>
              <div class="portfolio-info">
                <div class="portfolio-subtitle">Event</div> 
                <div class="portfolio-text style-1">
                  <h4 class="portfolio-title">${item.title}</h4>
                  <div class="portfolio-btn">
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </a>
          `;
        });
        break;

      case "recruitment":
        // --- Add recruitment class ---
        $container.addClass('recruitment-mode');
        // --- Build HTML for RECRUITMENT ---
        // Note: We link to the URL and open in a new tab
        // --- FIX: Added ', index' here as well for consistency ---
        recruitmentData.forEach(item => {
          contentHtml += `
            <a href="${item.url}" target="_blank" class="portfolio-card style-1">
              <div class="portfolio-img img-anim-left-show">
                <img src="${item.image}" alt="${item.title}" />
              </div>
              <div class="portfolio-info">
                <div class="portfolio-subtitle">Opportunities</div>
                <div class="portfolio-text style-1">
                  <h4 class="portfolio-title">${item.title}</h4>
                  <div class="portfolio-btn">
                    <i class="fa-solid fa-arrow-right"></i>
                  </div>
                </div>
              </div>
            </a>
          `;
        });
        break;

      case "none":
      default:
        // --- Remove recruitment class if it exists ---
        $container.removeClass('recruitment-mode');
        // --- Build HTML for NOTHING ---
        // This will replace the grid with a single message
        contentHtml = `
          <div style="
            grid-column: 1 / -1; 
            text-align: center; 
            padding: 80px 20px; 
            background: var(--gray-bg); 
            border-radius: 12px;
          ">
            <h3 style="
              font-size: 2rem; 
              color: var(--heading-color); 
              font-weight: 500;
              font-family: var(--body-font-family);
            ">
              ${nothingMessage}
            </h3>
          </div>
        `;
        break;
    }

    // Set the container's inner HTML
    $container.html(contentHtml);
    
    // We need to re-trigger the image animation function 
    // since we've added new elements.
    // Check if the function exists before calling it.
    // if (typeof imgAnimLeftShow === "function") {
    //   // We must re-select the elements for the animation function
    //   $(".img-anim-left-show").each(function () {
    //     let $imgReveal = $(this);
    //     // Skip if already animated or visible
    //     if ($imgReveal.css('visibility') === 'visible') {
    //       return;
    //     }
    //     let $image = $imgReveal.find("img");
    //     let delayValue = parseFloat($imgReveal.attr("data-delay")) || 0.15;

    //     gsap
    //       .timeline({
    //         delay: delayValue,
    //         scrollTrigger: {
    //           trigger: $imgReveal[0],
    //           start: "top 85%",
    //           scrub: false,
    //           markers: false,
    //         },
    //       })
    //       .set($imgReveal, { autoAlpha: 1 })
    //       .from($imgReveal, {
    //         xPercent: -100,
    //         duration: 1.2,
    //         ease: "power2.out",
    //       })
    //       .from($image, {
    //         xPercent: 100,
    //         scale: 1.2,
    //         duration: 1.5,
    //         ease: "power2.out",
    //         delay: -1.5,
    //       })
    //       .fromTo(
    //         $image,
    //         { yPercent: -20 },
    //         {
    //           yPercent: 20,
    //           scrollTrigger: {
    //             trigger: $imgReveal[0],
    //             scrub: true,
    //             start: "top bottom",
    //             end: "bottom top",
    //             ease: "power2.out",
    //           },
    //         }
    //       );
    //   });
    // }
  }
  /* --- END NEW FUNCTION --- */

  /*--------------------------------------------------------------
    38. DYNAMIC EVENTS PAGE (UPDATED WITH GRID & MODAL)
  --------------------------------------------------------------*/
  function initDynamicEventsPage() {
    const $container = $("#events-dynamic-container");
    const $tabs = $(".event-tab");
    const $modal = $("#event-details-modal");
    const $overlay = $("#event-details-modal-overlay");

    if (!$container.length) return;

    // --- CONFIGURATION ---
    // Set to 'false' to display "Something great coming soon" for upcoming events
    const showUpcomingEvents = false; 

    // --- EDIT EVENTS HERE ---
    // IMPORTANT: 'id' must be unique for modal lookup
    const eventsData = {
        upcoming: [
            {
                id: "u1",
                title: "Web Development Workshop",
                date: "01 Dec 2025",
                tag: "Technical",
                description: "Join us for a hands-on workshop where we will dive into the fundamentals of HTML, CSS, and JavaScript. Whether you are a complete beginner or looking to refresh your skills, this session is designed to get you coding your first website in no time. Laptop required!",
                img: "assets/img/blogs/blog-2.png", 
                registerLink: "https://forms.gle/exampleFormLink" // Replace with actual form
            },
            {
                id: "u2",
                title: "Diwali Celebration Night",
                date: "15 Nov 2025",
                tag: "Cultural",
                description: "Let's celebrate the festival of lights together! An evening filled with music, dance performances, rangoli competitions, and delicious snacks. Wear your best traditional attire and join the Gangabhumi family.",
                img: "assets/img/blogs/blog-1.png",
                registerLink: "https://forms.gle/exampleFormLink"
            },
            {
                id: "u3",
                title: "AI & Future Tech Talk",
                date: "10 Jan 2026",
                tag: "Seminar",
                description: "An insightful session featuring industry experts discussing the future of Artificial Intelligence and its impact on modern engineering. Don't miss this chance to network and learn about cutting-edge trends.",
                img: "https://placehold.co/600x600/101010/FFF?text=AI+Tech", 
                registerLink: "https://forms.gle/exampleFormLink"
            }
        ],
        past: [
            {
                id: "p3",
                title: "Ram Navami & Gudi Padwa",
                date: "16 Apr 2025",
                tag: "Event",
                description: `In a beautiful demonstration of cultural unity, the Ganga Bhumi Club and the Marathi Club collaborated to host a joint celebration of Ram Navami and Gudi Padwa.<br><br>
                The centerpiece was the sacred arrival and installation of an idol of Lord Ram inside the campus, establishing a powerful atmosphere of devotion.<br><br>
                <b>The celebration featured a fusion of cultural traditions:</b><br>
                • <b>Spiritual Offerings:</b> Devotees participated in soul-stirring Bhajans and Kirtans dedicated to Lord Ram and Mata Sita.<br>
                • <b>Ramayana Skits:</b> Engaging dramatic skits brought key moments from the Ramayana to life, focusing on the virtues and life of Lord Ram and Mata Sita.<br>
                • <b>Cultural Fusion:</b> The event beautifully incorporated the traditions of both Ram Navami and the Marathi New Year.<br><br>
                This successful collaboration was a vibrant expression of shared heritage.`,
                img: "assets/img/events/RAM NAVAMI & GUDI PADWA.png",
                galleryLink: "gallery.html"
            },
            {
                id: "p2",
                title: "Sangam - Advitya 2025",
                date: "21 Feb 2025",
                tag: "Event",
                description: `The Ganga Bhumi Club successfully hosted Sangam at Advitya 2025, a rich, day-long celebration of culture and community. The event commenced early, setting a traditional tone with Ganesh Vandana and a heartfelt Ganga Aarti.<br><br>
                The centerpiece was the moving and iconic skit on Chhath Puja. This powerful segment beautifully embraced the significance of the festival, celebrating the profound devotion, sacrifices, and unity that define this Mahaparv.<br><br>
                The cultural energy peaked with performances including captivating Hip-Hop, Kathak, Jhijhiya, Bollywood dances, and live music, concluding with an electrifying open DJ performance.`,
                img: "assets/img/events/sangam.jpg",
                galleryLink: "gallery.html"
            },
            {
                id: "p1",
                title: "Debut at Winter Fest",
                date: "14 Dec 2024",
                tag: "Event",
                description: `The Ganga Bhumi Club made a vibrant and unforgettable debut at the Winter Fest, marking its grand arrival at VIT Bhopal. In its inaugural stage performance, the club brought the rich cultures of Uttar Pradesh, Bihar, and Jharkhand to life.<br><br>
                The audience was captivated by a dynamic showcase featuring energetic folk dances, an elegant cultural ramp walk, and a soulful flute performance. This successful event was more than just a show; it was a powerful introduction to our mission.`,
                img: "assets/img/events/winterfest.jpeg",
                galleryLink: "gallery.html"
            }
        ]
    };

    // Function to render the grid items
    function renderEvents(type) {
        let events = eventsData[type] || [];
        
        // --- SWITCH LOGIC ---
        // If type is upcoming AND switch is false, force empty array
        if (type === 'upcoming' && !showUpcomingEvents) {
            events = [];
        }

        let html = "";

        if (events.length === 0) {
            // Determine message based on type
            const msg = type === 'upcoming' 
                ? "Something great coming soon. Stay tuned!" 
                : "No past events found.";

            html = `
                <div class="no-events-message">
                    <h3>${msg}</h3>
                </div>
            `;
        } else {
            events.forEach(event => {
                // We store ID and Type in data attributes for the click handler
                html += `
                <div class="event-poster-card" data-id="${event.id}" data-type="${type}">
                    <img src="${event.img}" alt="${event.title}">
                    <div class="event-poster-overlay">
                        <h3 class="event-poster-title">${event.title}</h3>
                    </div>
                </div>
                `;
            });
        }

        $container.html(html);
    }

    // Initial Render
    renderEvents("upcoming");

    // Tab Click Handler
    $tabs.on("click", function() {
        const target = $(this).data("tab");
        
        $tabs.removeClass("active");
        $(this).addClass("active");

        $container.css("opacity", "0");
        setTimeout(() => {
            renderEvents(target);
            $container.css("opacity", "1");
        }, 300);
    });

    // --- EVENT MODAL LOGIC ---
    
    function openEventModal(eventId, eventType) {
        const event = eventsData[eventType].find(e => e.id === eventId);
        if(!event) return;

        // Populate content
        $("#modal-event-image").attr("src", event.img);
        $("#modal-event-title").text(event.title);
        $("#modal-event-tag").text(event.tag);
        $("#modal-event-date").html(`<i class="fa-regular fa-calendar" style="margin-right:5px;"></i> ${event.date}`);
        $("#modal-event-desc").html(event.description);

        const $btnRight = $("#modal-action-btn");
        const $btnLeft = $("#modal-action-btn-left"); 
        let btnText, btnLink, btnTarget;
        
        if (eventType === "upcoming") {
            btnText = "Register Now";
            btnLink = event.registerLink || "#";
            btnTarget = "_blank";
        } else {
            btnText = "View Photos";
            btnLink = event.galleryLink || "gallery.html";
            btnTarget = "_self";
        }

        $btnRight.text(btnText).attr("href", btnLink).attr("target", btnTarget);
        $btnLeft.text(btnText).attr("href", btnLink).attr("target", btnTarget);

        // Reset scroll to top
        $(".event-modal-right").scrollTop(0);

        // Show modal
        $overlay.addClass("active");
        $modal.addClass("active");
        $("body").addClass("modal-open");

        // CRITICAL FIX: Stop Lenis completely and unlock the modal
        if (typeof lenis !== "undefined") {
            lenis.stop();
            
            // IMPORTANT: Tell Lenis to ignore the modal content
            setTimeout(() => {
                const $modalRight = $(".event-modal-right")[0];
                if ($modalRight) {
                    // Remove Lenis control from this element
                    $modalRight.style.overflow = "auto";
                    $modalRight.style.overflowY = "auto";
                }
            }, 100);
        }
    }

    function closeEventModal() {
        $overlay.removeClass("active");
        $modal.removeClass("active");
        $("body").removeClass("modal-open");
        
        // Restore page scroll
        if (typeof lenis !== "undefined") {
            lenis.start();
        }
    }

    // Event Delegation for Grid Items (since they are dynamic)
    $container.on("click", ".event-poster-card", function() {
        const id = $(this).data("id");
        const type = $(this).data("type");
        openEventModal(id, type);
    });

    // Close Handlers
    $("#event-modal-close").on("click", closeEventModal);
    $overlay.on("click", closeEventModal);
  }

  /*--------------------------------------------------------------
    39. GALLERY FILTER (NEW)
  --------------------------------------------------------------*/
  function initGalleryFilter() {
    if (!$.exists(".gallery-section")) return;

    const $filterBtns = $(".gallery-filter-btn");
    const $items = $(".gallery-item");

    $filterBtns.on("click", function() {
        // Active class handling
        $filterBtns.removeClass("active");
        $(this).addClass("active");

        const filterValue = $(this).data("filter");

        // Filtering logic
        $items.each(function() {
            const $item = $(this);
            
            if (filterValue === "all") {
                $item.removeClass("hidden");
                // Trigger animation
                gsap.fromTo($item, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
            } else {
                if ($item.hasClass(filterValue)) {
                    $item.removeClass("hidden");
                    gsap.fromTo($item, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.4 });
                } else {
                    $item.addClass("hidden");
                }
            }
        });
    });
  }

  /*--------------------------------------------------------------
    40. IMAGE LIGHTBOX (NEW)
  --------------------------------------------------------------*/
  function initImageLightbox() {
    const $popup = $(".ak-image-popup");
    if (!$popup.length) return;

    const $imgBox = $("#ak-lightbox-image");
    const $caption = $("#ak-lightbox-caption");
    const $closeBtn = $(".ak-image-popup-close, .ak-image-popup-overlay");

    // Open Lightbox
    $(document).on("click", ".gallery-item", function() {
        const src = $(this).find("img").attr("src");
        const title = $(this).find(".gallery-text h4").text();
        
        $imgBox.attr("src", src);
        $caption.text(title);
        
        $popup.addClass("active");
        $("body").css("overflow", "hidden"); // Prevent background scroll
        if(typeof lenis !== 'undefined') lenis.stop();
    });

    // Close Lightbox
    $closeBtn.on("click", function() {
        $popup.removeClass("active");
        $("body").css("overflow", "auto");
        if(typeof lenis !== 'undefined') lenis.start();
    });

    // Close on ESC key
    $(document).on("keydown", function(e) {
        if (e.key === "Escape" && $popup.hasClass("active")) {
            $popup.removeClass("active");
            $("body").css("overflow", "auto");
            if(typeof lenis !== 'undefined') lenis.start();
        }
    });
  }


})(jQuery);

