import { ClassProp } from 'class-variance-authority/types';
import { ClassValue } from 'clsx';
import { Context } from 'react';
import { default as default_2 } from 'react';
import { JSX as JSX_2 } from 'react/jsx-runtime';
import * as React_2 from 'react';
import { RefObject } from 'react';
import { VariantProps } from 'class-variance-authority';

export declare type AccentColor = keyof typeof colors.accent;

export declare const Accordion: React_2.ForwardRefExoticComponent<AccordionProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface AccordionItemData {
    id: string;
    title: string;
    content: React_2.ReactNode;
}

export declare interface AccordionProps extends React_2.HTMLAttributes<HTMLDivElement> {
    items: AccordionItemData[];
    allowMultiple?: boolean;
    defaultOpen?: string[];
}

export declare const AlertItem: React_2.ForwardRefExoticComponent<AlertItemProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface AlertItemProps extends React_2.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    variant?: 'info' | 'warning' | 'error' | 'success';
    onDismiss?: () => void;
}

declare interface AnimationProps extends React_2.HTMLAttributes<HTMLDivElement> {
    delay?: number;
    duration?: number;
}

export declare const AspectRatio: React_2.ForwardRefExoticComponent<AspectRatioProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface AspectRatioProps extends React_2.HTMLAttributes<HTMLDivElement> {
    ratio?: number;
}

export declare const Avatar: React_2.ForwardRefExoticComponent<AvatarProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const AvatarGroup: React_2.ForwardRefExoticComponent<AvatarGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface AvatarGroupProps extends React_2.HTMLAttributes<HTMLDivElement> {
    max?: number;
    size?: 'sm' | 'md' | 'lg';
}

export declare interface AvatarProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof avatarVariants> {
    src?: string;
    alt?: string;
    fallback?: string;
}

declare const avatarVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
    radius?: "lg" | "xl" | "full" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const BackgroundDecor: React_2.ForwardRefExoticComponent<BackgroundDecorProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface BackgroundDecorProps extends React_2.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'radial' | 'mesh';
}

export declare const Badge: React_2.ForwardRefExoticComponent<BadgeProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare interface BadgeProps extends React_2.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
}

export declare const badgeVariants: (props?: ({
    variant?: "blue" | "default" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const BarChart: React_2.ForwardRefExoticComponent<BarChartProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface BarChartProps extends React_2.HTMLAttributes<HTMLDivElement> {
    data: {
        label: string;
        value: number;
    }[];
    max?: number;
    color?: string;
}

export declare const Breadcrumb: React_2.ForwardRefExoticComponent<BreadcrumbProps & React_2.RefAttributes<HTMLElement>>;

export declare interface BreadcrumbItem {
    label: string;
    href?: string;
}

export declare interface BreadcrumbProps extends React_2.HTMLAttributes<HTMLElement> {
    items: BreadcrumbItem[];
    separator?: React_2.ReactNode;
}

export declare const Button: React_2.ForwardRefExoticComponent<ButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare interface ButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    loading?: boolean;
    icon?: React_2.ComponentType<{
        size?: number;
        className?: string;
    }>;
}

export declare const buttonVariants: (props?: ({
    variant?: "primary" | "accent" | "glass" | "ghost" | "danger" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Calendar: React_2.ForwardRefExoticComponent<CalendarProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface CalendarProps extends React_2.HTMLAttributes<HTMLDivElement> {
    month?: number;
    year?: number;
    selectedDate?: Date;
    onSelectDate?: (date: Date) => void;
}

export declare const Callout: React_2.ForwardRefExoticComponent<CalloutProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface CalloutProps extends React_2.HTMLAttributes<HTMLDivElement> {
    title?: string;
    variant?: 'info' | 'warning' | 'error' | 'success' | 'tip';
    icon?: React_2.ElementType;
}

export declare const Card: React_2.ForwardRefExoticComponent<CardProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardBody: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardFooter: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const CardHeader: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare interface CardProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {
}

export declare const cardVariants: (props?: ({
    variant?: "liquid" | "glass" | "neuro" | null | undefined;
    hoverable?: boolean | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Carousel: React_2.ForwardRefExoticComponent<CarouselProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const CarouselItem: React_2.ForwardRefExoticComponent<CarouselItemProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface CarouselItemProps extends React_2.HTMLAttributes<HTMLDivElement> {
}

export declare interface CarouselProps extends React_2.HTMLAttributes<HTMLDivElement> {
    showDots?: boolean;
    autoPlay?: boolean;
    interval?: number;
}

export declare const Center: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const Checkbox: React_2.ForwardRefExoticComponent<CheckboxProps & React_2.RefAttributes<HTMLLabelElement>>;

export declare interface CheckboxProps extends Omit<React_2.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}

export declare const CircularProgress: React_2.ForwardRefExoticComponent<CircularProgressProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface CircularProgressProps extends React_2.HTMLAttributes<HTMLDivElement> {
    value: number;
    variant?: keyof typeof variantColors;
    size?: number;
}

export declare function cn(...inputs: ClassValue[]): string;

export declare const CodeBlock: React_2.ForwardRefExoticComponent<CodeBlockProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface CodeBlockProps extends React_2.HTMLAttributes<HTMLDivElement> {
    code: string;
    language?: string;
}

export declare const Collapsible: React_2.ForwardRefExoticComponent<CollapsibleProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface CollapsibleProps extends React_2.HTMLAttributes<HTMLDivElement> {
    trigger: React_2.ReactNode;
    defaultOpen?: boolean;
}

export declare const ColorPicker: React_2.ForwardRefExoticComponent<ColorPickerProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface ColorPickerProps extends Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value'> {
    value?: string;
    onChange?: (value: string) => void;
}

/**
 * Vanguard GNL — Color tokens
 * Focused palette: blue accent + white/glass for a cohesive dark theme.
 * CSS variables in globals.css are the source of truth for rendering.
 */
export declare const colors: {
    readonly background: {
        readonly primary: "0 0% 4%";
        readonly surface: "0 0% 6%";
        readonly elevated: "0 0% 8%";
        readonly overlay: "0 0% 0% / 0.8";
    };
    readonly accent: {
        readonly blue: "217 91% 60%";
    };
    readonly text: {
        readonly primary: "0 0% 100%";
        readonly secondary: "0 0% 100% / 0.7";
        readonly muted: "0 0% 100% / 0.4";
        readonly subtle: "0 0% 100% / 0.2";
    };
    readonly border: {
        readonly subtle: "0 0% 100% / 0.05";
        readonly light: "0 0% 100% / 0.1";
        readonly medium: "0 0% 100% / 0.15";
        readonly strong: "0 0% 100% / 0.2";
    };
    readonly glass: {
        readonly bg: "0 0% 100% / 0.05";
        readonly border: "0 0% 100% / 0.1";
        readonly highlight: "0 0% 100% / 0.15";
        readonly shadow: "0 0% 0% / 0.3";
    };
    readonly neuro: {
        readonly light: "0 0% 100% / 0.03";
        readonly shadow: "0 0% 0% / 0.4";
    };
};

export declare const Command: React_2.ForwardRefExoticComponent<CommandProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface CommandItem {
    id: string;
    label: string;
    shortcut?: string;
    icon?: React_2.ElementType;
    onSelect?: () => void;
}

export declare interface CommandProps extends React_2.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    items: CommandItem[];
    placeholder?: string;
}

export declare const ConfirmDialog: React_2.ForwardRefExoticComponent<ConfirmDialogProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface ConfirmDialogProps extends Omit<DialogProps, 'footer'> {
    onConfirm: () => void;
    confirmText?: string;
    cancelText?: string;
    variant?: 'danger' | 'primary';
}

export declare const Counter: React_2.ForwardRefExoticComponent<CounterProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare interface CounterProps extends React_2.HTMLAttributes<HTMLSpanElement> {
    value: number;
    duration?: number;
    prefix?: string;
    suffix?: string;
}

export declare const DatePicker: React_2.ForwardRefExoticComponent<DatePickerProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface DatePickerProps extends Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value'> {
    value?: string;
    onChange?: (value: string) => void;
}

export declare const Dialog: React_2.ForwardRefExoticComponent<DialogProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface DialogProps extends Omit<ModalProps, 'showClose'> {
    footer?: React_2.ReactNode;
}

export declare const Divider: React_2.ForwardRefExoticComponent<DividerProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface DividerProps extends React_2.HTMLAttributes<HTMLDivElement> {
    orientation?: 'horizontal' | 'vertical';
}

export declare const Dropdown: React_2.ForwardRefExoticComponent<DropdownProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const DropdownDivider: () => JSX_2.Element;

export declare const DropdownItem: React_2.ForwardRefExoticComponent<DropdownItemProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare interface DropdownItemProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: React_2.ComponentType<{
        size?: number;
        className?: string;
    }>;
}

export declare interface DropdownProps extends React_2.HTMLAttributes<HTMLDivElement> {
    trigger: React_2.ReactNode;
    align?: 'left' | 'right';
}

export declare const FadeIn: React_2.ForwardRefExoticComponent<AnimationProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const FadeOut: React_2.ForwardRefExoticComponent<AnimationProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const FileCard: React_2.ForwardRefExoticComponent<FileCardProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface FileCardProps extends React_2.HTMLAttributes<HTMLDivElement> {
    name: string;
    size: string;
    type?: string;
    onDownload?: () => void;
}

export declare const FileUpload: React_2.ForwardRefExoticComponent<FileUploadProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface FileUploadProps extends Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
    onChange?: (e: React_2.ChangeEvent<HTMLInputElement>) => void;
    accept?: string;
    multiple?: boolean;
    description?: string;
    hint?: string;
}

export declare const Footer: React_2.ForwardRefExoticComponent<FooterProps & React_2.RefAttributes<HTMLElement>>;

export declare interface FooterLink {
    label: string;
    href: string;
}

export declare interface FooterProps extends React_2.HTMLAttributes<HTMLElement> {
    brand?: React_2.ReactNode;
    sections?: FooterSection[];
    socials?: {
        twitter?: string;
        github?: string;
        linkedin?: string;
    };
    copyright?: string;
}

export declare interface FooterSection {
    title: string;
    links: FooterLink[];
}

export declare const FormField: React_2.ForwardRefExoticComponent<FormFieldProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface FormFieldProps extends React_2.HTMLAttributes<HTMLDivElement> {
    label?: string;
    error?: string;
    required?: boolean;
    description?: string;
}

/**
 * Get animation utility classes.
 */
export declare function getAnimation(type: 'fast' | 'slow' | 'liquid' | 'bounce' | 'elastic'): string;

/**
 * Get dark gradient background variants.
 */
export declare function getDarkGradient(variant?: 'subtle' | 'medium' | 'strong' | 'primary'): string;

/**
 * Get glassmorphism background + border classes.
 */
export declare function getGlassBackground(): string;

/**
 * Get blue glow shadow.
 */
export declare function getGlow(size?: 'sm' | 'md' | 'lg'): string;

/**
 * Get inner highlight class for liquid glass inset glow.
 */
export declare function getInnerHighlight(): string;

/**
 * Get liquid glass effect classes.
 * Higher blur + gradient + inset highlight for a premium glass feel.
 */
export declare function getLiquidGlass(): string;

/**
 * Get liquid surface classes.
 * Combined glass + gradient + shadow for premium surfaces.
 */
export declare function getLiquidSurface(): string;

/**
 * Get neuromorphic effect classes.
 * Dual shadows (dark + light) for an embossed/pressed look.
 */
export declare function getNeuromorphic(): string;

export declare const GlassPanel: React_2.ForwardRefExoticComponent<GlassPanelProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface GlassPanelProps extends React_2.HTMLAttributes<HTMLDivElement> {
    glow?: boolean;
}

export declare const GridLayout: React_2.ForwardRefExoticComponent<GridLayoutProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface GridLayoutProps extends React_2.HTMLAttributes<HTMLDivElement> {
    columns?: number;
    gap?: number;
}

export declare const Heading: React_2.ForwardRefExoticComponent<HeadingProps & React_2.RefAttributes<HTMLHeadingElement>>;

export declare interface HeadingProps extends React_2.HTMLAttributes<HTMLHeadingElement> {
    level?: 1 | 2 | 3 | 4;
    uppercase?: boolean;
    italic?: boolean;
}

export declare const HStack: React_2.ForwardRefExoticComponent<Omit<StackProps, "direction"> & React_2.RefAttributes<HTMLDivElement>>;

export declare const IconButton: React_2.ForwardRefExoticComponent<IconButtonProps & React_2.RefAttributes<HTMLButtonElement>>;

export declare interface IconButtonProps extends React_2.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof iconButtonVariants> {
    icon: React_2.ComponentType<{
        size?: number;
        className?: string;
    }>;
}

export declare const iconButtonVariants: (props?: ({
    variant?: "primary" | "glass" | "ghost" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const Input: React_2.ForwardRefExoticComponent<InputProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface InputProps extends React_2.InputHTMLAttributes<HTMLInputElement> {
    icon?: React_2.ElementType;
}

declare interface KeyboardShortcutOptions {
    modifiers?: KeyModifier[];
    preventDefault?: boolean;
}

export declare type KeyModifier = 'ctrl' | 'shift' | 'alt' | 'meta';

export declare const Label: React_2.ForwardRefExoticComponent<LabelProps & React_2.RefAttributes<HTMLLabelElement>>;

export declare interface LabelProps extends React_2.LabelHTMLAttributes<HTMLLabelElement> {
}

export declare const LineChart: React_2.ForwardRefExoticComponent<LineChartProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface LineChartProps extends React_2.HTMLAttributes<HTMLDivElement> {
    data: number[];
    labels?: string[];
    color?: string;
    height?: number;
}

export declare const Logo: React_2.ForwardRefExoticComponent<LogoProps & React_2.RefAttributes<HTMLAnchorElement>>;

export declare interface LogoProps extends React_2.HTMLAttributes<HTMLAnchorElement> {
    href?: string;
    src?: string;
    alt?: string;
    showText?: boolean;
    text?: string;
    size?: 'sm' | 'md' | 'lg';
    icon?: React_2.ElementType;
}

export declare const Modal: React_2.ForwardRefExoticComponent<ModalProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface ModalProps extends React_2.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    showClose?: boolean;
}

export declare const Navbar: React_2.ForwardRefExoticComponent<NavbarProps & React_2.RefAttributes<HTMLElement>>;

export declare interface NavbarProps extends React_2.HTMLAttributes<HTMLElement> {
    brand?: React_2.ReactNode;
    items?: NavItem[];
    scrolled?: boolean;
    search?: {
        placeholder?: string;
        onSearch?: (value: string) => void;
    };
    notificationCount?: number;
    onNotificationClick?: () => void;
    onSettingsClick?: () => void;
    onLogout?: () => void;
    avatar?: {
        src?: string;
        name?: string;
    };
    actions?: React_2.ReactNode;
    onMenuToggle?: () => void;
}

export declare interface NavItem {
    label: string;
    href?: string;
    icon?: React_2.ElementType;
    active?: boolean;
    children?: NavItem[];
}

export declare const Pagination: React_2.ForwardRefExoticComponent<PaginationProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface PaginationProps extends React_2.HTMLAttributes<HTMLDivElement> {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export declare const ProductCard: React_2.ForwardRefExoticComponent<ProductCardProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface ProductCardProps extends React_2.HTMLAttributes<HTMLDivElement> {
    name: string;
    image?: string;
    price: string | number;
    originalPrice?: string | number;
    rating?: number;
    reviews?: number;
    tags?: string[];
    onFavorite?: () => void;
    onShare?: () => void;
}

export declare const ProgressBar: React_2.ForwardRefExoticComponent<ProgressBarProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface ProgressBarProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof progressVariants> {
    value: number;
    size?: 'sm' | 'md' | 'lg';
    showLabel?: boolean;
}

export declare const progressVariants: (props?: ({
    variant?: "blue" | "gradient" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const ProjectRow: React_2.ForwardRefExoticComponent<ProjectRowProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface ProjectRowProps extends React_2.HTMLAttributes<HTMLDivElement> {
    name: string;
    description?: string;
    icon?: React_2.ElementType;
    status?: 'active' | 'paused' | 'completed';
    meta?: string;
    href?: string;
}

export declare const RadioGroup: React_2.ForwardRefExoticComponent<RadioGroupProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface RadioGroupProps extends Omit<React_2.HTMLAttributes<HTMLDivElement>, 'onChange'> {
    options: RadioOption[];
    value?: string;
    onChange?: (value: string) => void;
    name?: string;
}

export declare interface RadioOption {
    label: string;
    value: string;
}

export declare const Rating: React_2.ForwardRefExoticComponent<RatingProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface RatingProps extends React_2.HTMLAttributes<HTMLDivElement> {
    value: number;
    max?: number;
    size?: number;
    interactive?: boolean;
    onChange?: (value: number) => void;
}

export declare const ScaleIn: React_2.ForwardRefExoticComponent<AnimationProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const SearchInput: React_2.ForwardRefExoticComponent<SearchInputProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface SearchInputProps extends Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'type'> {
    placeholder?: string;
}

export declare const Select: React_2.ForwardRefExoticComponent<SelectProps & React_2.RefAttributes<HTMLSelectElement>>;

export declare interface SelectOption {
    label: string;
    value: string;
}

export declare interface SelectProps extends Omit<React_2.SelectHTMLAttributes<HTMLSelectElement>, 'onChange'> {
    options: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    placeholder?: string;
}

export declare const shadows: {
    readonly glass: {
        readonly sm: "0 4px 16px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.1)";
        readonly md: "0 8px 32px hsl(0 0% 0% / 0.3), inset 0 1px 0 hsl(0 0% 100% / 0.1)";
        readonly lg: "0 12px 40px hsl(0 0% 0% / 0.4), inset 0 1px 0 hsl(0 0% 100% / 0.15)";
    };
    readonly neuro: {
        readonly sm: "4px 4px 8px hsl(0 0% 0% / 0.4), -4px -4px 8px hsl(0 0% 100% / 0.03)";
        readonly md: "8px 8px 16px hsl(0 0% 0% / 0.4), -8px -8px 16px hsl(0 0% 100% / 0.03)";
        readonly lg: "12px 12px 24px hsl(0 0% 0% / 0.4), -12px -12px 24px hsl(0 0% 100% / 0.03)";
    };
    readonly glow: {
        readonly blue: "0 0 20px hsl(217 91% 60% / 0.5)";
    };
    readonly accent: {
        readonly blue: "0 8px 24px hsl(217 91% 60% / 0.4), inset 0 1px 1px hsl(0 0% 100% / 0.2)";
    };
};

export declare type ShadowSize = 'sm' | 'md' | 'lg';

/**
 * Vanguard GNL — Shadow tokens
 * Shadow definitions for glass, neuromorphism, and glow effects.
 * CSS variables in globals.css are the source of truth for rendering.
 */
export declare type ShadowType = 'glass' | 'neuro' | 'glow' | 'accent';

export declare const Sheet: React_2.ForwardRefExoticComponent<SheetProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface SheetProps extends React_2.HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    position?: 'left' | 'right' | 'top' | 'bottom';
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

export declare const Skeleton: React_2.ForwardRefExoticComponent<SkeletonProps & React_2.RefAttributes<HTMLDivElement>>;

export declare const SkeletonCard: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare interface SkeletonProps extends React_2.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass';
}

export declare const SkeletonText: React_2.ForwardRefExoticComponent<SkeletonTextProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface SkeletonTextProps extends React_2.HTMLAttributes<HTMLDivElement> {
    lines?: number;
}

export declare const SlideIn: React_2.ForwardRefExoticComponent<SlideProps & React_2.RefAttributes<HTMLDivElement>>;

declare interface SlideProps extends AnimationProps {
    direction?: 'up' | 'down' | 'left' | 'right';
}

export declare const Slider: React_2.ForwardRefExoticComponent<SliderProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface SliderProps extends Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'> {
    value?: number;
    onChange?: (value: number) => void;
    min?: number;
    max?: number;
}

export declare const Spin: React_2.ForwardRefExoticComponent<React_2.HTMLAttributes<HTMLDivElement> & React_2.RefAttributes<HTMLDivElement>>;

export declare const Spinner: React_2.ForwardRefExoticComponent<SpinnerProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface SpinnerProps extends React_2.HTMLAttributes<HTMLDivElement>, VariantProps<typeof spinnerVariants> {
}

export declare const spinnerVariants: (props?: ({
    variant?: "blue" | "white" | null | undefined;
    size?: "sm" | "md" | "lg" | "xl" | null | undefined;
} & ClassProp) | undefined) => string;

export declare const SplitView: React_2.ForwardRefExoticComponent<SplitViewProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface SplitViewProps extends React_2.HTMLAttributes<HTMLDivElement> {
    left: React_2.ReactNode;
    right: React_2.ReactNode;
    split?: number;
    direction?: 'horizontal' | 'vertical';
}

export declare const Stack: React_2.ForwardRefExoticComponent<StackProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface StackProps extends React_2.HTMLAttributes<HTMLDivElement> {
    direction?: 'row' | 'col';
    gap?: number;
    align?: 'start' | 'center' | 'end' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    wrap?: boolean;
}

export declare const StatCard: React_2.ForwardRefExoticComponent<StatCardProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface StatCardProps extends React_2.HTMLAttributes<HTMLDivElement> {
    label: string;
    value: string | number;
    change?: number;
    icon?: React_2.ElementType;
}

export declare const StatusBadge: React_2.ForwardRefExoticComponent<StatusBadgeProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface StatusBadgeProps extends React_2.HTMLAttributes<HTMLDivElement> {
    variant?: keyof typeof variantColors_2;
}

export declare interface Step {
    label: string;
    description?: string;
}

export declare const Stepper: React_2.ForwardRefExoticComponent<StepperProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface StepperProps extends React_2.HTMLAttributes<HTMLDivElement> {
    steps: Step[];
    currentStep?: number;
    onStepClick?: (index: number) => void;
}

export declare const Switch: React_2.ForwardRefExoticComponent<SwitchProps & React_2.RefAttributes<HTMLLabelElement>>;

export declare interface SwitchProps extends Omit<React_2.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}

export declare const TabContent: React_2.ForwardRefExoticComponent<TabContentProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface TabContentProps extends React_2.HTMLAttributes<HTMLDivElement> {
    tabId: string;
    activeTab?: string;
}

export declare interface TabItem {
    id: string;
    label: string;
    icon?: React_2.ElementType;
}

export declare function Table<T = any>({ columns, data, emptyMessage, className, ...props }: TableProps<T>): JSX_2.Element;

export declare interface TableColumn<T = any> {
    header: string;
    accessor: string;
    render?: (value: any, row: T) => React_2.ReactNode;
}

export declare interface TableProps<T = any> extends React_2.HTMLAttributes<HTMLDivElement> {
    columns: TableColumn<T>[];
    data: T[];
    emptyMessage?: string;
}

export declare const Tabs: React_2.ForwardRefExoticComponent<TabsProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface TabsProps extends React_2.HTMLAttributes<HTMLDivElement> {
    tabs: TabItem[];
    activeTab?: string;
    onTabChange?: (id: string) => void;
    variant?: 'default' | 'pills' | 'underline';
}

export declare const Tag: React_2.ForwardRefExoticComponent<TagProps & React_2.RefAttributes<HTMLSpanElement>>;

export declare interface TagProps extends React_2.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
    onRemove?: () => void;
}

declare const tagVariants: (props?: ({
    variant?: "blue" | "default" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & ClassProp) | undefined) => string;

declare const Text_2: React_2.ForwardRefExoticComponent<TextProps & React_2.RefAttributes<HTMLParagraphElement>>;
export { Text_2 as Text }

export declare const Textarea: React_2.ForwardRefExoticComponent<TextareaProps & React_2.RefAttributes<HTMLTextAreaElement>>;

export declare interface TextareaProps extends React_2.TextareaHTMLAttributes<HTMLTextAreaElement> {
    rows?: number;
}

export declare interface TextProps extends React_2.HTMLAttributes<HTMLParagraphElement>, VariantProps<typeof textVariants> {
}

export declare const textVariants: (props?: ({
    size?: "sm" | "md" | "lg" | "xl" | "xs" | null | undefined;
    variant?: "subtle" | "primary" | "success" | "default" | "danger" | "muted" | null | undefined;
} & ClassProp) | undefined) => string;

declare type Theme = 'dark' | 'light';

declare interface ThemeContextValue {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

export declare function ThemeProvider({ children, defaultTheme, storageKey, }: ThemeProviderProps): JSX_2.Element;

declare interface ThemeProviderProps {
    children: default_2.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}

export declare const Timeline: React_2.ForwardRefExoticComponent<TimelineProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface TimelineItem {
    title: string;
    description?: string;
    completed?: boolean;
    date?: string;
}

export declare interface TimelineProps extends React_2.HTMLAttributes<HTMLDivElement> {
    items: TimelineItem[];
}

export declare const TimePicker: React_2.ForwardRefExoticComponent<TimePickerProps & React_2.RefAttributes<HTMLInputElement>>;

export declare interface TimePickerProps extends Omit<React_2.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange' | 'value'> {
    value?: string;
    onChange?: (value: string) => void;
}

export declare function Toast({ title, message, variant, onClose, className }: ToastProps): JSX_2.Element;

export declare const ToastContext: Context<ToastContextValue | null>;

declare interface ToastContextValue {
    toasts: ToastData[];
    addToast: (toast: Omit<ToastData, 'id'>) => void;
    removeToast: (id: number) => void;
}

export declare interface ToastData {
    id: number;
    title: string;
    message?: string;
    variant: ToastVariant;
    duration?: number;
}

declare interface ToastData_2 {
    id: number;
    title: string;
    message?: string;
    variant: 'success' | 'error' | 'warning' | 'info';
    duration?: number;
}

declare interface ToastProps extends ToastData_2 {
    onClose: () => void;
    className?: string;
}

export declare function ToastProvider({ children }: ToastProviderProps): JSX_2.Element;

declare interface ToastProviderProps {
    children: default_2.ReactNode;
}

export declare type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export declare const Toggle: React_2.ForwardRefExoticComponent<ToggleProps & React_2.RefAttributes<HTMLLabelElement>>;

export declare interface ToggleProps extends Omit<React_2.LabelHTMLAttributes<HTMLLabelElement>, 'onChange'> {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    label?: string;
}

export declare const Tooltip: React_2.ForwardRefExoticComponent<TooltipProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface TooltipProps extends React_2.HTMLAttributes<HTMLDivElement> {
    content: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
}

export declare const UpgradeCard: React_2.ForwardRefExoticComponent<UpgradeCardProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface UpgradeCardProps extends React_2.HTMLAttributes<HTMLDivElement> {
    title: string;
    description?: string;
    cta?: string;
    onAction?: () => void;
}

export declare function useAnimation(options?: UseAnimationOptions): {
    isAnimating: boolean;
    start: () => void;
    stop: () => void;
};

declare interface UseAnimationOptions {
    duration?: number;
    onComplete?: () => void;
}

export declare function useIntersectionObserver(options?: UseIntersectionObserverOptions): [RefObject<HTMLDivElement | null>, boolean];

declare interface UseIntersectionObserverOptions extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

export declare function useKeyboardShortcut(key: string, callback: () => void, options?: KeyboardShortcutOptions): void;

export declare const UserCard: React_2.ForwardRefExoticComponent<UserCardProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface UserCardProps extends React_2.HTMLAttributes<HTMLDivElement> {
    name: string;
    role?: string;
    avatar?: string;
    stats?: {
        label: string;
        value: string | number;
    }[];
}

export declare function useTheme(): ThemeContextValue;

export declare function useToast(): ToastContextValue;

export declare function useToastState(): {
    toasts: ToastData[];
    addToast: ({ title, message, variant, duration }: Omit<ToastData, "id">) => void;
    removeToast: (id: number) => void;
};

export declare const VanguardCard: React_2.ForwardRefExoticComponent<VanguardCardProps & React_2.RefAttributes<HTMLDivElement>>;

export declare interface VanguardCardProps extends React_2.HTMLAttributes<HTMLDivElement> {
    title?: string;
    description?: string;
    icon?: React_2.ComponentType<{
        size?: number;
        className?: string;
    }>;
    tag?: string;
    hoverable?: boolean;
    glass?: boolean;
    delay?: string | number;
}

declare const variantColors: {
    blue: {
        text: string;
        glow: string;
    };
};

declare const variantColors_2: {
    blue: {
        color: string;
        glow: string;
    };
};

export declare const VStack: React_2.ForwardRefExoticComponent<Omit<StackProps, "direction"> & React_2.RefAttributes<HTMLDivElement>>;

/**
 * Get accent button shadow with hover lift.
 */
export declare function withAccentShadow(): string;

export { }
