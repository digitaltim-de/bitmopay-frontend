import type {Coin, Feature, Integration, Partner, Stat} from "./types"

export const supportedCoins: Coin[] = [
    {name: "Bitcoin", icon: "/bitcoin-logo.png"},
    {name: "Ethereum", icon: "/ethereum-logo.png"},
    {name: "USDT", icon: "/placeholder-2t5j3.png"},
    {name: "BNB", icon: "/placeholder-gdxha.png"},
    {name: "Solana", icon: "/solana-logo.png"}
]

export const integrations: Integration[] = [
    {name: "Shopify", icon: "/shopify-logo.png"},
    {name: "WooCommerce", icon: "/woocommerce-logo.png"},
    {name: "WHMCS", icon: "/whmcs-logo.png"},
    {name: "PrestaShop", icon: "/prestashop-logo.png"},
    {name: "Zapier", icon: "/zapier-logo.png"}
]

export const partners: Partner[] = [
    { name: "Alternative Airlines", logo: "https://coingate.com/app/uploads/2023/11/Logo_Alternative-Airlines_grey.png" },
    { name: "Cherry Servers", logo: "https://coingate.com/app/uploads/2023/11/Logo_Cherry-servers_grey.png" },
    { name: "Hostinger", logo: "https://coingate.com/app/uploads/2023/11/Logo_Hostinger_grey.png" },
    { name: "NordVPN", logo: "https://coingate.com/app/uploads/2023/11/Logo_NordVPN_grey.png" },
    { name: "Surfshark", logo: "https://coingate.com/app/uploads/2023/11/Logo_Surfshark_grey.png" },
    { name: "Coinzilla", logo: "https://coingate.com/app/uploads/2024/07/Coinzilla_image-1.png" },
]

export const features: Feature[] = [
    {
        title: "Global Payment Optimization",
        description:
            "Improve authorization rates, optimize checkout conversions, and offer local payment methods worldwide.",
        icon: "Globe"
    },
    {
        title: "Continuous Revenue",
        description:
            "Promote recurring payments, automatically resolve payment issues, and improve management and efficiency.",
        icon: "Zap"
    },
    {
        title: "Unified Payment System",
        description:
            "Build an integrated payment experience that streamlines transactions and improves customer satisfaction.",
        icon: "Shield"
    }
]

export const stats: Stat[] = [
    {value: "94%", label: "Customer satisfaction"},
    {value: "$105", label: "Avg. transaction"},
    {value: "1K+", label: "Active businesses"},
    {value: "18%", label: "Annual growth rate"}
]
