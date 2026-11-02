import { useEffect, useMemo, useState } from "react";
import {
  Search,
  ShoppingCart,
  UserRound,
  Menu,
  ChevronDown,
  ChevronRight,
  Heart,
  Star,
  ShieldCheck,
  Gamepad2,
  SlidersHorizontal,
  X,
  Zap,
  Package,
  Check,
  Headphones,
  MessageCircle,
  Clock3,
  BadgeCheck,
} from "lucide-react";
import "./App.css";

const products = [
  {
    id: 1,
    slug: "the-isle-share-steam-online-ca-nhan",
    name: "The Isle - Share Steam Online Cá Nhân",
    category: "Tài Khoản Steam Share",
    price: 110000,
    oldPrice: null,
    discount: 35,
    image: "/images/the-isle-product-1.jpg",
    tag: "BÁN CHẠY",
    description:
      "Game The Isle bản quyền Steam, chơi riêng trên tài khoản cá nhân.",
  },
  {
    id: 2,
    slug: "thue-game-the-isle-tai-khoan-steam-online",
    name: "Thuê Game The Isle - Tài Khoản Steam Online",
    category: "Tài Khoản Steam Share",
    price: 35000,
    oldPrice: null,
    discount: 0,
    image: "/images/the-isle-product-2.jpg",
    tag: "GIÁ TỐT",
    description:
      "Thuê tài khoản Steam Online để trải nghiệm thế giới khủng long The Isle.",
  },
];

const formats = [
  {
    icon: Package,
    title: "Tài Khoản Steam Offline",
    subtitle: "CHƠI CHUNG",
    description:
      "Share Steam chơi chung nhiều người — Khi chơi cần đổi qua chế độ Offline Mode.",
    features: [
      "Giá rẻ tiết kiệm",
      "Game bản quyền update đầy đủ",
      "Tài khoản dùng chung, không đổi thông tin",
    ],
  },
  {
    icon: Zap,
    title: "Share Steam Cá Nhân",
    subtitle: "CHƠI RIÊNG",
    description:
      "Game được share về máy được chơi riêng thông qua công nghệ của G4Market, chơi vĩnh viễn.",
    features: [
      "Game chơi trực tiếp trên tài khoản cá nhân",
      "Hỗ trợ máy nhà và cloud PC chạy windows",
      "Bảo hành vĩnh viễn",
    ],
  },
  {
    icon: Gamepad2,
    title: "Steam Online",
    subtitle: "ĐỔI THÔNG TIN",
    description:
      "Share Steam cá nhân bạn chơi riêng — có thể đổi thông tin đăng nhập về của mình, chơi Online đầy đủ tính năng.",
    features: [
      "Đổi được thông tin đăng nhập",
      "Chơi Online, multiplayer, co-op",
      "Lưu save trên Steam Cloud",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Key Global",
    subtitle: "CỦA BẠN 100%",
    description:
      "Key bản quyền nhập trực tiếp vào Steam của bạn — game thuộc về tài khoản Steam cá nhân bạn ngay từ đầu.",
    features: [
      "Nhập trực tiếp vào tài khoản Steam của bạn",
      "Sở hữu vĩnh viễn, không phụ thuộc shop",
      "Chơi Online đầy đủ như mua chính hãng",
    ],
  },
];

const formatMoney = (value) => `${value.toLocaleString("vi-VN")}đ`;

/* =====================================================
   HEADER
===================================================== */

function Header({ search, setSearch, cartCount, onCart, onAccount, onHome }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);

  return (
    <>
      <div className="topline">
        <div className="container topline-inner">
          <span>
            Chợ game bản quyền <b>G4MARKET</b>
          </span>

          <span>
            <i className="online-dot" /> Hỗ trợ khách hàng 24/7
            <span className="top-separator">|</span> Giao dịch an toàn
          </span>
        </div>
      </div>

      <header className="site-header">
        <div className="container header-main">
          <button
            className="mobile-toggle icon-button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Mở menu"
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>

          <button
            className="brand"
            onClick={onHome}
            aria-label="G4Market trang chủ"
          >
            <span className="brand-symbol">G4</span>
            <span className="brand-word">
              G4<span>MARKET</span>
              <small>GAME STORE</small>
            </span>
          </button>

          <div className="search-field">
            <Search size={18} />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm kiếm sản phẩm..."
              aria-label="Tìm kiếm sản phẩm"
            />

            {search && (
              <button
                className="clear-search"
                onClick={() => setSearch("")}
                aria-label="Xóa tìm kiếm"
              >
                <X size={15} />
              </button>
            )}
          </div>

          <div className="header-actions">
            <button className="header-action" onClick={onAccount}>
              <UserRound size={19} />
              <span>Tài khoản</span>
            </button>

            <button className="header-action cart-action" onClick={onCart}>
              <ShoppingCart size={20} />
              <span>Giỏ hàng</span>
              <b>{cartCount}</b>
            </button>
          </div>
        </div>
      </header>

      <nav className={`main-nav ${mobileOpen ? "mobile-open" : ""}`}>
        <div className="container nav-inner">
          <div className="nav-category-wrap">
            <button
              className="nav-category"
              onClick={() => setCategoryOpen((v) => !v)}
            >
              <Menu size={17} />
              <span>Thể loại</span>
              <ChevronDown size={15} />
            </button>

            {categoryOpen && (
              <div className="category-dropdown">
                {[
                  "Game Steam Hot",
                  "Black Myth Wukong",
                  "Mua Ark Survival Online",
                  "Mua GTA 5",
                  "Tài Khoản Steam Offline",
                  "Game Steam Online",
                  "Thuê Cloud Gaming",
                ].map((item) => (
                  <a
                    href="#products"
                    key={item}
                    onClick={() => setCategoryOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="nav-links">
            <button onClick={onHome}>Trang chủ</button>
            <a href="/#products">Sản phẩm</a>
            <a href="/#guide">Blog</a>
          </div>

          <span className="nav-note">Game bản quyền · Giá tốt mỗi ngày</span>
        </div>
      </nav>
    </>
  );
}

/* =====================================================
   PRODUCT CARD
===================================================== */

function ProductCard({ product, onSelect }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className="product-card">
      <div
        className="product-visual"
        onClick={() => onSelect(product)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && onSelect(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => {
            e.currentTarget.src =
              "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/376210/library_hero.jpg";
          }}
        />

        <div className="visual-vignette" />

        {product.discount > 0 && (
          <span className="discount-label">-{product.discount}%</span>
        )}

        <span className="product-label">{product.tag}</span>

        <button
          className={`favorite-button ${favorite ? "is-favorite" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setFavorite((v) => !v);
          }}
          aria-label="Yêu thích"
        >
          <Heart size={18} fill={favorite ? "currentColor" : "none"} />
        </button>
      </div>

      <div className="product-content">
        <div className="product-category">
          <Gamepad2 size={13} />
          {product.category}
        </div>

        <h3>
          <button onClick={() => onSelect(product)}>{product.name}</button>
        </h3>

        <p className="product-description">{product.description}</p>

        <div className="product-purchase-row">
          <div className="price-area">
            <strong>Tải xuống IOS</strong>

            {product.oldPrice && (
              <div className="old-price"></div>
            )}
          </div>

          <button className="detail-button" onClick={() => onSelect(product)}>
            Xem chi tiết <ChevronRight size={16} />
          </button>
        </div>

        <div className="product-meta">
          <span>
            <i /> Còn hàng
          </span>

          <span>
            <ShieldCheck size={13} /> Bảo hành vĩnh viễn
          </span>
        </div>
      </div>
    </article>
  );
}

/* =====================================================
   PRODUCT DETAIL PAGE
===================================================== */

function ProductDetailPage({ product, onBack, onAdd, notify }) {
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.image);

  // Trạng thái modal tải xuống
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadProgress, setDownloadProgress] = useState(0);
  const [downloadFinished, setDownloadFinished] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  useEffect(() => {
    setActiveImage(product.image);
    setQuantity(1);
  }, [product]);

  const handleBuyNow = () => {
    // Nếu là sản phẩm thuê game
    if (product.id === 2) {
      setContactModalOpen(true);
      return;
    }

    // Nếu là sản phẩm mua game
    setDownloadModalOpen(true);
    setDownloadProgress(0);
    setDownloadFinished(false);
    setIsDownloading(false);
  };

  // Bắt đầu tải xuống giả lập trong 40 giây
  const startDownload = () => {
    if (isDownloading) return;

    setIsDownloading(true);
    setDownloadFinished(false);
    setDownloadProgress(0);

    let progress = 0;

    const timer = setInterval(() => {
      progress += 1;
      setDownloadProgress(progress);

      if (progress >= 100) {
        clearInterval(timer);

        setIsDownloading(false);
        setDownloadFinished(true);

        // Tự động tải file mẫu
        const link = document.createElement("a");
        link.href = "/The-Isle-mobileconfig.pdf";
        link.download = "The-Isle-mobileconfig.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }, 400);
  };

  return (
    <main className="container product-detail-page">
      <div className="breadcrumb">
        <button onClick={onBack}>Trang chủ</button>
        <ChevronRight size={13} />
        <button onClick={onBack}>The Isle</button>
        <ChevronRight size={13} />
        <span>{product.name}</span>
      </div>

      <section className="detail-main">
        <div className="detail-gallery">
          <div className="detail-main-image">
            <img
              src={activeImage}
              alt={product.name}
              onError={(e) => {
                e.currentTarget.src =
                  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/376210/library_hero.jpg";
              }}
            />

            {product.discount > 0 && (
              <span className="discount-label">-{product.discount}%</span>
            )}
          </div>

          <div className="detail-thumbnails">
            <button
              className={activeImage === product.image ? "active" : ""}
              onClick={() => setActiveImage(product.image)}
            >
              <img src={product.image} alt="Ảnh sản phẩm" />
            </button>

            <button
              onClick={() =>
                setActiveImage(
                  "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/376210/library_hero.jpg",
                )
              }
              className={activeImage !== product.image ? "active" : ""}
            >
              <img
                src="https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/376210/library_hero.jpg"
                alt="Ảnh The Isle"
              />
            </button>
          </div>
        </div>

        <div className="detail-information">
          <div className="product-category">
            <Gamepad2 size={14} />
            {product.category}
          </div>

          <h1>{product.name}</h1>

          <div className="detail-rating">
            <span className="stars">★★★★★</span>
            <b>4.8</b>
            <span>(173 đánh giá)</span>
            <i />
            <span>Đã bán 990+</span>
          </div>

          <div className="detail-price-box">
            <strong>IOS</strong>

            {product.oldPrice && (
              <>
                <del>{formatMoney(product.oldPrice)}</del>
                <span className="detail-discount">-{product.discount}%</span>
              </>
            )}
          </div>

          <p className="detail-short-description">{product.description}</p>

          <div className="detail-benefits">
            <div>
              <ShieldCheck size={19} />
              <span>
                <b>Sản phẩm bản quyền</b>
                <small>Giao dịch an toàn</small>
              </span>
            </div>

            <div>
              <BadgeCheck size={19} />
              <span>
                <b>Bảo hành vĩnh viễn</b>
                <small>Hỗ trợ khi gặp sự cố</small>
              </span>
            </div>

            <div>
              <Headphones size={19} />
              <span>
                <b>Hỗ trợ 24/7</b>
                <small>Luôn sẵn sàng hỗ trợ</small>
              </span>
            </div>
          </div>

          <div className="detail-stock">
            <i />
            Sản phẩm hiện đang có sẵn
          </div>

          <div className="detail-quantity">
            <span>Số lượng:</span>

            <div>
              <button onClick={() => setQuantity((v) => Math.max(1, v - 1))}>
                −
              </button>

              <strong>{quantity}</strong>

              <button onClick={() => setQuantity((v) => v + 1)}>+</button>
            </div>
          </div>

          <div className="detail-actions">
            <button
              className="detail-add-cart"
              onClick={() => onAdd(product, quantity)}
            >
              <ShoppingCart size={18} />
              Thêm vào giỏ hàng
            </button>

            <button className="detail-buy-now" onClick={handleBuyNow}>
              Tải xuống
            </button>
          </div>

          <div className="detail-safe-note">
            <ShieldCheck size={16} />
            Thanh toán an toàn · Hỗ trợ khách hàng 24/7
          </div>
        </div>
      </section>

      <section className="detail-description-section">
        <div className="detail-section-heading">
          <h2>Mô tả sản phẩm</h2>
        </div>

        <div className="detail-description-content">
          <div className="game-intro">
            <span className="section-eyebrow">WELCOME TO THE ISLE</span>
            <h2>THE ISLE – CUỘC CHIẾN SINH TỒN CỦA THẾ GIỚI KHỦNG LONG</h2>

            <p>
              Bạn đã bao giờ tưởng tượng mình được đặt chân vào một thế giới nơi
              con người không còn đứng đầu chuỗi thức ăn? Một thế giới hoang dã
              rộng lớn, nơi mỗi bước di chuyển đều có thể quyết định sự sống còn
              của bạn?
            </p>

            <p>
              <strong>The Isle</strong> đưa bạn đến một hòn đảo bí ẩn, nơi những
              loài khủng long thống trị thiên nhiên. Bạn sẽ bắt đầu hành trình
              từ một sinh vật nhỏ bé, tự tìm kiếm thức ăn, nước uống, phát triển
              và từng bước trở thành kẻ săn mồi đáng sợ.
            </p>
          </div>

          <img
            className="detail-content-image"
            src="/images/the-isle-detail-1.jpg"
            alt="Thế giới rộng lớn trong The Isle"
            loading="lazy"
          />

          <h3>🌿 KHÁM PHÁ THẾ GIỚI MỞ ĐẦY BÍ ẨN</h3>

          <p>
            Hòn đảo trong The Isle được xây dựng với nhiều khu vực tự nhiên khác
            nhau: những khu rừng rậm rạp, đồng cỏ rộng lớn, đầm lầy nguy hiểm và
            những dòng sông trải dài giữa thiên nhiên hoang dã.
          </p>

          <p>
            Mỗi khu vực đều mang đến những thử thách riêng. Bạn có thể bắt gặp
            dấu vết của những sinh vật khác, tìm kiếm nguồn thức ăn hoặc vô tình
            bước vào lãnh địa của một kẻ săn mồi lớn hơn mình. Không có nơi nào
            thực sự an toàn trên hòn đảo này.
          </p>

          <img
            className="detail-content-image"
            src="/images/the-isle-detail-2.jpg"
            alt="Khung cảnh thiên nhiên trong The Isle"
            loading="lazy"
          />

          <h3>🦖 TRỞ THÀNH LOÀI KHỦNG LONG MÀ BẠN MUỐN</h3>

          <p>
            Trong game, bạn có thể trải nghiệm cuộc sống của nhiều loài khủng
            long khác nhau. Mỗi loài sở hữu đặc điểm, kích thước, khả năng và
            phong cách sinh tồn riêng biệt.
          </p>

          <p>
            Bạn thích trở thành một kẻ săn mồi mạnh mẽ, phục kích con mồi trong
            rừng sâu? Hay lựa chọn một loài ăn cỏ, sống theo bầy đàn và luôn
            phải cảnh giác trước những mối nguy hiểm?
          </p>

          <p>
            Mỗi lựa chọn đều tạo nên một hành trình khác nhau. Hãy học cách
            thích nghi với môi trường, quản lý nhu cầu sinh tồn và bảo vệ bản
            thân trước những sinh vật khác.
          </p>

          <img
            className="detail-content-image"
            src="/images/the-isle-detail-3.jpg"
            alt="Các loài khủng long trong The Isle"
            loading="lazy"
          />

          <h3>⚔️ SINH TỒN – SĂN MỒI – PHÁT TRIỂN</h3>

          <p>
            The Isle không đơn thuần là một trò chơi điều khiển khủng long. Đây
            là một trải nghiệm sinh tồn đòi hỏi sự kiên nhẫn và khả năng quan
            sát. Bạn phải liên tục tìm kiếm thức ăn, nước uống, lựa chọn vị trí
            an toàn và cân nhắc trước mỗi cuộc đối đầu.
          </p>

          <p>
            Một cuộc săn thành công có thể giúp bạn tồn tại lâu hơn, nhưng một
            quyết định sai lầm cũng có thể khiến toàn bộ hành trình kết thúc.
            Chính sự khó đoán này tạo nên sức hấp dẫn đặc biệt của thế giới The
            Isle.
          </p>

          <div className="detail-highlight">
            <h3>ĐIỂM NỔI BẬT CỦA THE ISLE</h3>

            <ul>
              <li>Thế giới mở rộng lớn với môi trường thiên nhiên đa dạng.</li>
              <li>
                Trải nghiệm sinh tồn dưới góc nhìn của các loài khủng long.
              </li>
              <li>
                Nhiều phong cách chơi: săn mồi, ăn cỏ và sinh tồn theo bầy.
              </li>
              <li>Đối đầu và tương tác với những người chơi khác.</li>
              <li>Đồ họa môi trường tạo cảm giác hoang dã và chân thực.</li>
            </ul>
          </div>

          <h3>📦 THÔNG TIN SẢN PHẨM</h3>

          <div className="detail-specifications">
            <div>
              <span>Tên trò chơi</span>
              <strong>The Isle</strong>
            </div>

            <div>
              <span>Nền tảng</span>
              <strong>Steam</strong>
            </div>

            <div>
              <span>Thể loại</span>
              <strong>Sinh tồn · Thế giới mở</strong>
            </div>

            <div>
              <span>Hình thức</span>
              <strong>{product.category}</strong>
            </div>

            <div>
              <span>Tình trạng</span>
              <strong className="detail-available">Còn hàng</strong>
            </div>

            <div>
              <span>Hỗ trợ</span>
              <strong>Hỗ trợ khách hàng 24/7</strong>
            </div>
          </div>

          <h3>🛒 HƯỚNG DẪN MUA HÀNG</h3>

          <p>
            Chọn sản phẩm phù hợp với nhu cầu của bạn, thêm vào giỏ hàng và tiến
            hành đặt mua. Sau khi hoàn tất, hãy làm theo hướng dẫn nhận sản phẩm
            được cung cấp.
          </p>

          <p>
            Nếu gặp khó khăn trong quá trình cài đặt hoặc sử dụng, bạn có thể
            liên hệ bộ phận hỗ trợ để được hướng dẫn.
          </p>

          <p className="detail-ending">
            <strong>The Isle – Survive. Evolve. Dominate.</strong>
            <br />
            Bạn đã sẵn sàng bước vào thế giới hoang dã chưa?
          </p>
        </div>
      </section>

      <section className="detail-reviews">
        <h2>Đánh giá sản phẩm</h2>

        <div className="detail-review-summary">
          <strong>4.8/5</strong>
          <div>
            <span className="stars">★★★★★</span>
            <p>Dựa trên 173 đánh giá</p>
          </div>
        </div>
      </section>

      <section className="detail-related">
        <h2>Sản phẩm The Isle khác</h2>

        <div className="product-grid">
          {products
            .filter((item) => item.id !== product.id)
            .map((item) => (
              <article className="product-card" key={item.id}>
                <div className="product-visual">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="product-content">
                  <div className="product-category">
                    <Gamepad2 size={13} />
                    {item.category}
                  </div>

                  <h3>
                    <button
                      onClick={() =>
                        window.location.assign(`/product/${item.slug}`)
                      }
                    >
                      {item.name}
                    </button>
                  </h3>

                  <div className="product-purchase-row">
                    <div className="price-area">
                      <strong>{formatMoney(item.price)}</strong>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>

      {downloadModalOpen && (
        <div className="download-overlay">
          <div className="download-modal">
            <button
              className="download-close"
              disabled={isDownloading}
              onClick={() => setDownloadModalOpen(false)}
            >
              <X size={22} />
            </button>

            <div className="download-modal-icon">
              <Package size={30} />
            </div>

            <h2>THE ISLE</h2>
            <p className="download-subtitle">Tải xuống trò chơi</p>

            <div className="download-info">
              <div>
                <span>Tên tệp</span>
                <strong>The_Isle_Setup.exe</strong>
              </div>

              <div>
                <span>Dung lượng</span>
                <strong>16 GB</strong>
              </div>

              <div>
                <span>Phiên bản</span>
                <strong>Latest Version</strong>
              </div>
            </div>

            {!isDownloading && !downloadFinished && (
              <button className="download-start-btn" onClick={startDownload}>
                <Package size={17} />
                TẢI XUỐNG
              </button>
            )}

            {isDownloading && (
              <div className="download-progress-area">
                <div className="download-progress-heading">
                  <span>Đang tải xuống...</span>
                  <strong>{downloadProgress}%</strong>
                </div>

                <div className="download-progress-track">
                  <div
                    className="download-progress-fill"
                    style={{ width: `${downloadProgress}%` }}
                  />
                </div>

                <div className="download-progress-details">
                  <span>
                    {(downloadProgress * 10.24 * 16).toFixed(1)} MB / 16 GB
                  </span>
                  <span>{(20 + Math.random() * 15).toFixed(1)} MB/s</span>
                </div>

                <p className="download-time">
                  Vui lòng không đóng cửa sổ này...
                </p>
              </div>
            )}

            {downloadFinished && (
              <div className="download-success">
                <div className="download-success-icon">
                  <Check size={25} />
                </div>

                <h3>Tải xuống hoàn tất!</h3>
                <p>File đã được tải xuống thiết bị của bạn.</p>

                <button
                  className="download-start-btn"
                  onClick={() => setDownloadModalOpen(false)}
                >
                  HOÀN TẤT
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {contactModalOpen && (
        <div
          className="download-overlay"
          onClick={() => setContactModalOpen(false)}
        >
          <div
            className="contact-admin-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="download-close"
              onClick={() => setContactModalOpen(false)}
            >
              <X size={22} />
            </button>

            <div className="contact-admin-icon">
              <Headphones size={32} />
            </div>

            <span className="contact-admin-label">
              G4MARKET CUSTOMER SUPPORT
            </span>

            <h2>LIÊN HỆ ADMIN</h2>

            <p className="contact-admin-description">
              Sản phẩm thuê game The Isle cần được Admin hỗ trợ cấp tài khoản.
              Vui lòng liên hệ Admin để được tư vấn và nhận hướng dẫn thuê game.
            </p>

            <div className="contact-admin-note">
              <ShieldCheck size={19} />
              <span>
                <strong>Hỗ trợ trực tiếp</strong>
                <small>Admin sẽ hướng dẫn bạn các bước tiếp theo.</small>
              </span>
            </div>

            <a
              className="contact-admin-button"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={18} />
              LIÊN HỆ ADMIN
            </a>

            <button
              className="contact-admin-cancel"
              onClick={() => setContactModalOpen(false)}
            >
              Để sau
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

/* =====================================================
   RATING PANEL
===================================================== */

function RatingPanel() {
  const rows = [
    { n: 5, p: 97 },
    { n: 4, p: 1 },
    { n: 3, p: 0 },
    { n: 2, p: 0 },
    { n: 1, p: 2 },
  ];

  return (
    <section className="rating-panel">
      <div className="rating-overview">
        <strong>4.8</strong>

        <div>
          <div className="stars">★★★★★</div>
          <span>173 đánh giá</span>
        </div>
      </div>

      <div className="rating-breakdown">
        {rows.map((row) => (
          <div className="rating-line" key={row.n}>
            <span>
              {row.n} <Star size={11} fill="currentColor" />
            </span>

            <div className="rating-track">
              <i style={{ width: `${row.p}%` }} />
            </div>

            <small>{row.p}%</small>
          </div>
        ))}
      </div>

      <div className="rating-trust">
        <ShieldCheck size={28} />

        <div>
          <b>Giao dịch an toàn</b>
          <span>Sản phẩm bản quyền 100%</span>
        </div>
      </div>
    </section>
  );
}

/* =====================================================
   PURCHASE FORMATS
===================================================== */

function PurchaseFormats() {
  return (
    <section className="guide-section" id="guide">
      <div className="section-eyebrow">G4MARKET</div>

      <h2>
        Các hình thức mua game tại <span>G4Market</span>
      </h2>

      <p className="section-description">
        Lựa chọn hình thức phù hợp với nhu cầu chơi game của bạn
      </p>

      <div className="format-grid">
        {formats.map(({ icon: Icon, ...format }) => (
          <article className="format-card" key={format.title}>
            <div className="format-icon">
              <Icon size={21} />
            </div>

            <span className="format-subtitle">{format.subtitle}</span>

            <h3>{format.title}</h3>

            <p>{format.description}</p>

            <ul>
              {format.features.map((feature) => (
                <li key={feature}>
                  <Check size={14} />
                  {feature}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}

/* =====================================================
   FOOTER
===================================================== */

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <a className="brand" href="/">
            <span className="brand-symbol">G4</span>

            <span className="brand-word">
              G4<span>MARKET</span>
              <small>GAME STORE</small>
            </span>
          </a>

          <p>
            Chợ mua & thuê game bản quyền hot như: GTA V, ARK, Black Myth
            Wukong, Red Dead Redemption 2. Hỗ trợ 24/7, giá tốt, uy tín.
          </p>
        </div>

        <div>
          <h4>THÔNG TIN</h4>
          <a href="/">Trang chủ</a>
          <a href="/#products">Sản phẩm</a>
          <a href="/#guide">Blog</a>
          <a href="#footer">FAQs</a>
        </div>

        <div>
          <h4>CHÍNH SÁCH</h4>
          <a href="#footer">Điều khoản bảo mật</a>
          <a href="#footer">Điều khoản dịch vụ</a>
          <a href="#footer">Tuyên bố miễn trừ trách nhiệm</a>
        </div>

        <div id="footer">
          <h4>LIÊN HỆ</h4>

          <p>Địa chỉ: khu đô thị Ocean Park, Gia Lâm, Hà Nội</p>

          <p className="support-hours">
            <Headphones size={14} />
            Hỗ trợ khách hàng 24/7
          </p>

          <div className="social-links">
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
              YouTube
            </a>

            <a href="https://www.tiktok.com" target="_blank" rel="noreferrer">
              TikTok
            </a>

            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <span>© G4MARKET 2026</span>
          <span>Chợ game bản quyền · Hỗ trợ 24/7</span>
        </div>
      </div>
    </footer>
  );
}

/* =====================================================
   MAIN APP
===================================================== */

export default function App() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [category, setCategory] = useState("Tất cả");
  const [cartCount, setCartCount] = useState(0);
  const [toast, setToast] = useState("");

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  /* Theo dõi nút Back / Forward của trình duyệt */
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, []);

  /* Chuyển trang không cần react-router-dom */
  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
    window.scrollTo(0, 0);
  };

  /* Tìm sản phẩm theo slug trên URL */
  const selectedProduct = products.find(
    (product) => currentPath === `/product/${product.slug}`,
  );

  const notify = (message) => {
    setToast(message);

    window.clearTimeout(window.__g4Toast);

    window.__g4Toast = window.setTimeout(() => {
      setToast("");
    }, 2400);
  };

  /* Lọc và sắp xếp sản phẩm */
  const filteredProducts = useMemo(() => {
    const normalized = search.trim().toLocaleLowerCase("vi");

    const result = products.filter(
      (product) =>
        (category === "Tất cả" || product.category === category) &&
        product.name.toLocaleLowerCase("vi").includes(normalized),
    );

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [search, sort, category]);

  /* Thêm sản phẩm vào giỏ */
  const addToCart = (product, quantity = 1) => {
    setCartCount((count) => count + quantity);

    notify(`Đã thêm “${product.name}” vào giỏ hàng`);
  };

  const goHome = () => {
    navigate("/");
  };

  return (
    <div className="app" id="top">
      <Header
        search={search}
        setSearch={setSearch}
        cartCount={cartCount}
        onHome={goHome}
        onCart={() =>
          notify(
            cartCount
              ? `Giỏ hàng có ${cartCount} sản phẩm`
              : "Giỏ hàng đang trống",
          )
        }
        onAccount={() => notify("Vui lòng đăng nhập để tiếp tục")}
      />

      {selectedProduct ? (
        <ProductDetailPage
          key={selectedProduct.id}
          product={selectedProduct}
          onBack={goHome}
          onAdd={addToCart}
          notify={notify}
        />
      ) : (
        <main className="container page-main">
          <div className="breadcrumb">
            <a href="/">Trang chủ</a>
            <ChevronRight size={13} />
            <span>The Isle</span>
          </div>

          <section className="category-heading">
            <div className="category-copy">
              <span className="section-eyebrow">
                <i /> DANH MỤC GAME
              </span>

              <h1>The Isle</h1>

              <p>
                Mua The Isle Steam giá rẻ tại G4Market — sinh tồn hóa thân khủng
                long thế giới mở, 100+ người chơi, 77% tích cực. Bản quyền 100%,
                bảo hành vĩnh viễn.
              </p>

              <div className="category-facts">
                <span>
                  <Star size={15} fill="currentColor" />
                  <b>4.8</b> (173 đánh giá)
                </span>

                <span>
                  <i className="fact-dot green" />
                  Tải xuống IOS
                </span>

                <span>
                  <i className="fact-dot orange" />
                  Đã bán <b>3.410+</b>
                </span>

                <span>
                  <i className="fact-dot green" />
                  Còn hàng
                </span>
              </div>
            </div>

            <div className="category-image">
              <img src="/images/the-isle-banner.jpg" alt="The Isle" />

              <div className="category-image-shade" />

              <div className="category-image-title">
                <span>ENTER THE</span>
                <strong>ISLE</strong>
                <small>SURVIVE · EVOLVE · DOMINATE</small>
              </div>
            </div>
          </section>

          <section className="products-section" id="products">
            <div className="section-heading">
              <div>
                <span className="section-eyebrow">LỰA CHỌN CỦA BẠN</span>

                <h2>
                  Sản phẩm <span>The Isle</span>
                </h2>

                <p>Khám phá các hình thức sở hữu và trải nghiệm game</p>
              </div>

              <label className="sort-control">
                <SlidersHorizontal size={16} />
                <span>Sắp xếp:</span>

                <select value={sort} onChange={(e) => setSort(e.target.value)}>
                  <option value="default">Mặc định</option>
                  <option value="low">Giá thấp đến cao</option>
                  <option value="high">Giá cao đến thấp</option>
                </select>
              </label>
            </div>

            <div className="filter-line">
              <div className="category-tabs">
                {["Tất cả", "Tài Khoản Steam Share"].map((tab) => (
                  <button
                    key={tab}
                    className={category === tab ? "active" : ""}
                    onClick={() => setCategory(tab)}
                  >
                    {tab}
                    <span>2</span>
                  </button>
                ))}
              </div>

              <span className="products-count">
                {filteredProducts.length} sản phẩm
              </span>
            </div>

            <div className="product-grid">
              {filteredProducts.length ? (
                filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onSelect={(item) => navigate(`/product/${item.slug}`)}
                  />
                ))
              ) : (
                <div className="empty-state">
                  <Search size={25} />
                  <b>Không tìm thấy sản phẩm</b>
                  <span>Thử tìm kiếm với từ khóa khác.</span>

                  <button onClick={() => setSearch("")}>Xóa tìm kiếm</button>
                </div>
              )}
            </div>
          </section>

          <RatingPanel />

          <PurchaseFormats />

          <section className="support-banner">
            <div className="support-icon">
              <Headphones size={22} />
            </div>

            <div>
              <h3>Cần hỗ trợ lựa chọn sản phẩm?</h3>
              <p>Đội ngũ G4Market luôn sẵn sàng hỗ trợ bạn 24/7.</p>
            </div>

            <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
              <MessageCircle size={17} />
              Liên hệ hỗ trợ
            </a>
          </section>
        </main>
      )}

      <Footer />

      {toast && (
        <div className="toast-message">
          <Check size={17} />
          {toast}
        </div>
      )}
    </div>
  );
}
