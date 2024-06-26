import { type Icons } from '@/components/icons';

export type NavItem = {
    title: string;
    href: string;
    disabled?: boolean;
};

export type SidebarNavItem = {
    title: string;
    disabled?: boolean;
    external?: boolean;
    icon?: keyof typeof Icons;
} & (
    | {
          href: string;
          items?: never;
      }
    | {
          href?: string;
          items: NavLink[];
      }
);

export type NavLink = {
    title: string;
    href: string;
};

export type SiteConfig = {
    name: string;
    description: string;
    url: string;
    ogImage: string;
    links: {
        twitter: string;
        github: string;
    };
};

export type DashboardConfig = {
    sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
    name: string;
    description: string;
    stripePriceId: string;
};
