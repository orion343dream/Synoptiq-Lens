import { Component, HostListener, OnInit, AfterViewInit } from '@angular/core';

interface ServiceData {
  title: string;
  content: string;
  features: string[];
  color: string;
  icon: string;
  bgImage: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // Component-level SCSS removed; styles are migrated to Tailwind/global `styles.scss`
  // styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
   isScrolled = false;
   isLoading = true;
   mobileMenuOpen = false;
   isVisible = false;
   activeIndex = 0;
   mousePosition = { x: 0, y: 0 };
   productModalOpen = false;
   selectedProduct: any = null;
   isMobile = false;
   private mouseThrottle = false;
   private animationFrameId: number | null = null;

  serviceData: ServiceData[] = [
    {
      title: 'Containerization',
      content: 'Seamlessly transition workloads to containerized environments with optimized cloud deployment strategies for enhanced scalability and efficiency.',
      features: [
        'Docker containerization',
        'Kubernetes orchestration',
        'Microservices architecture',
        'CI/CD pipeline integration'
      ],
      color: 'crusta',
      icon: 'work',
      bgImage: 'https://tse1.mm.bing.net/th/id/OIP.KPuOfsRhatVpj8SItT9PUQHaEZ?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      title: 'Application Modernization',
      content: 'Transform legacy systems with cloud migration, microservices architecture, and modern technology stacks for enhanced performance and maintainability.',
      features: [
        'Legacy system migration',
        'Cloud-native development',
        'Performance optimization',
        'Technology stack upgrade'
      ],
      color: 'ming',
      icon: 'public',
      bgImage: 'https://ipsenglobal.com/wp-content/uploads/2023/11/Remote_Flyer-scaled.jpg'
    },
    {
      title: 'DevOps & DevSecOps',
      content: 'Streamline development workflows with automated deployment, integrated security practices, and comprehensive infrastructure management solutions.',
      features: [
        'Automated CI/CD pipelines',
        'Infrastructure as Code',
        'Security integration',
        'Monitoring and logging'
      ],
      color: 'crusta',
      icon: 'psychology',
      bgImage: 'https://soldig.mx/wp-content/uploads/2023/07/devops-finops-scaled.jpg'
    },
    {
      title: 'Custom Software Solutions',
      content: 'Delivering tailored application architecture and consulting services designed to address specific business challenges and requirements.',
      features: [
        'Custom application development',
        'System architecture design',
        'Business process automation',
        'Integration services'
      ],
      color: 'ming',
      icon: 'apps',
      bgImage: 'https://technoeyenet.com/wp-content/uploads/2021/04/mdm-technoeye.jpg'
    },
    {
      title: 'Data Analytics & AI',
      content: 'Transform raw data into actionable insights using advanced analytics and artificial intelligence to drive informed business decisions.',
      features: [
        'Predictive analytics',
        'Machine learning models',
        'Data visualization',
        'Business intelligence'
      ],
      color: 'crusta',
      icon: 'analytics',
      bgImage: 'https://trigent.com/wp-content/uploads/banner-blog-cross-platform-testing-with-ai-ml.jpg'
    },
    {
      title: 'Cybersecurity Solutions',
      content: 'Comprehensive security frameworks and monitoring systems to protect your digital assets and ensure regulatory compliance.',
      features: [
        'Threat detection',
        'Security audits',
        'Compliance frameworks',
        'Incident response'
      ],
      color: 'ming',
      icon: 'security',
      bgImage: 'https://cyberserious.co.uk/assets/img/home/slide/2.jpg'
    },
    {
      title: 'Cloud Migration',
      content: 'Seamless migration to cloud platforms with optimized architecture for scalability, cost-efficiency, and enhanced performance.',
      features: [
        'Cloud strategy planning',
        'Migration execution',
        'Performance optimization',
        'Cost management'
      ],
      color: 'crusta',
      icon: 'cloud',
      bgImage: 'https://mobizinc.com/wp-content/uploads/2023/07/cloud-migration.jpg'
    }
  ];

  ngOnInit() {
    // Handle loading screen
    window.addEventListener('load', () => {
      const loadingScreen = document.getElementById('loadingScreen');
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.style.opacity = '0';
          loadingScreen.style.transition = 'opacity 0.5s ease-out';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
            this.isLoading = false;
          }, 500);
        }
      }, 1000); // Show loader for 1s for better UX
    });

    // Trigger loading screen hide even if load event already fired
    if (document.readyState === 'complete') {
      const loadingScreen = document.getElementById('loadingScreen');
      setTimeout(() => {
        if (loadingScreen) {
          loadingScreen.style.opacity = '0';
          loadingScreen.style.transition = 'opacity 0.5s ease-out';
          setTimeout(() => {
            loadingScreen.style.display = 'none';
            this.isLoading = false;
          }, 500);
        }
      }, 1000);
    }

    // Check for mobile device
    this.checkMobile();
  }

  ngAfterViewInit() {
    // Typing animation implementation
    const typingTexts = [
      'Digital Transformation',
      'Cybersecurity Solutions',
      'Business Innovation',
      'Cloud Solutions',
      'Application Modernization',
      'DevOps & DevSecOps',
      'Data Analytics & AI',
      'Custom Software Solutions',
      'Containerization',
      'Cloud Migration'
    ];
    const typingElement = document.getElementById('typing-text') as HTMLElement;
    let currentIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    const typingSpeed = 100; // milliseconds
    const deletingSpeed = 50;
    const pauseTime = 2000; // pause before deleting

    if (!typingElement) {
      console.warn('Typing text element not found');
      return;
    }

    // Remove the JavaScript width setting since we're using Tailwind CSS classes

    function typeWriter() {
      const currentText = typingTexts[currentIndex];

      if (isDeleting) {
        // Remove characters
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % typingTexts.length;
          setTimeout(typeWriter, 500); // pause before next word
        } else {
          setTimeout(typeWriter, deletingSpeed);
        }
      } else {
        // Add characters
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
          // Finished typing current word, pause then start deleting
          setTimeout(() => {
            isDeleting = true;
            typeWriter();
          }, pauseTime);
        } else {
          setTimeout(typeWriter, typingSpeed);
        }
      }
    }

    // Start the typing animation
    setTimeout(typeWriter, 1000); // Start after 1 second

    // Initialize Why Choose Us section visibility
    this.checkVisibility();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
    this.checkVisibility();
  }

  @HostListener('document:mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    // Throttle mouse movement updates for better performance
    if (!this.mouseThrottle) {
      requestAnimationFrame(() => {
        this.mousePosition = { x: event.clientX, y: event.clientY };
        this.mouseThrottle = false;
      });
      this.mouseThrottle = true;
    }
  }

  private checkVisibility() {
    const section = document.getElementById('why-choose-us-section');
    if (section) {
      const rect = section.getBoundingClientRect();
      this.isVisible = rect.top < window.innerHeight && rect.bottom > 0;
    }
  }

  private checkMobile() {
    this.isMobile = window.innerWidth < 768;
  }

  // Smooth scroll behavior
  scrollToSection(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  toggleMobileMenu(): void {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  handleCardClick(index: number): void {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
    }
  }

  handleCardHover(index: number): void {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
    }
  }

  handleCardLeave(): void {
    // Optional: Add leave effects if needed
  }

  handleTouchStart(event: TouchEvent, index: number): void {
    event.preventDefault();
    this.handleCardClick(index);
  }

  handleTouchEnd(event: TouchEvent): void {
    event.preventDefault();
  }

  handleKeyDown(event: KeyboardEvent, index: number): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.handleCardClick(index);
    }
  }

  getCardClasses(index: number): string {
    const baseClasses = 'relative cursor-pointer overflow-hidden rounded-2xl transition-all duration-500 landscape:flex landscape:flex-col landscape:justify-center';
    const activeClasses = index === this.activeIndex
      ? 'landscape:w-full landscape:h-full'
      : 'landscape:w-32 landscape:h-full hover:scale-105 hover:shadow-lg';
    const inactiveClasses = index !== this.activeIndex ? 'opacity-75 hover:opacity-100' : '';
    return `${baseClasses} ${activeClasses} ${inactiveClasses}`;
  }

  getOverlayClasses(index: number, color: string): string {
    const baseClasses = 'absolute inset-0 transition-opacity duration-500 pointer-events-none';
    const colorClasses = color === 'crusta'
      ? 'bg-gradient-to-br from-crusta/70 via-crusta/50 to-crusta/30'
      : 'bg-gradient-to-br from-ming/70 via-ming/50 to-ming/30';
    const opacityClasses = index === this.activeIndex ? 'opacity-100' : 'opacity-60';
    return `${baseClasses} ${colorClasses} ${opacityClasses}`;
  }

  getBorderClasses(index: number, color: string): string {
    if (index !== this.activeIndex) return '';
    const baseClasses = 'absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none';
    const colorClasses = color === 'crusta' ? 'border-orange-300' : 'border-teal-300';
    return `${baseClasses} ${colorClasses}`;
  }

  getContentClasses(index: number): string {
    const baseClasses = 'relative z-10 p-4 landscape:p-6 transition-all duration-500';
    const activeClasses = index === this.activeIndex
      ? 'landscape:absolute landscape:inset-0 landscape:flex landscape:flex-col landscape:justify-center'
      : '';
    return `${baseClasses} ${activeClasses}`;
  }

  getIconColor(color: string): string {
    return color === 'crusta' ? 'text-orange-300' : 'text-teal-300';
  }

  getIndicatorClasses(index: number, color: string): string {
    const baseClasses = 'w-3 h-3 rounded-full transition-all duration-300 cursor-pointer hover:scale-125';
    const activeClasses = index === this.activeIndex
      ? (color === 'crusta' ? 'bg-crusta scale-125' : 'bg-ming scale-125')
      : 'bg-white/50 hover:bg-white/75';
    return `${baseClasses} ${activeClasses}`;
  }

  openProductModal(product: any): void {
    this.selectedProduct = product;
    this.productModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeProductModal(): void {
    this.productModalOpen = false;
    this.selectedProduct = null;
    document.body.style.overflow = 'auto';
  }

  @HostListener('document:keydown', ['$event'])
  handleKeydown(event: KeyboardEvent): void {
    if (event.key === 'Escape' && this.productModalOpen) {
      this.closeProductModal();
    }
  }
}
