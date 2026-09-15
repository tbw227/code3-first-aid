/**
 * Lucide icon registry — tree-shaken imports + createIcons helpers.
 * Use <i data-lucide="icon-name" class="..."></i> in HTML, then call initIcons().
 */
import {
  createIcons,
  Activity,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Ban,
  BriefcaseMedical,
  Building2,
  Calendar,
  CalendarClock,
  CalendarDays,
  ChartColumn,
  ChartLine,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleCheck,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  Droplet,
  Download,
  FileText,
  Filter,
  Flame,
  GraduationCap,
  Hand,
  HardHat,
  Heart,
  Info,
  Leaf,
  ListChecks,
  LoaderCircle,
  Lock,
  Mail,
  MapPin,
  Menu,
  Package,
  RefreshCw,
  Scan,
  Search,
  ShoppingCart,
  Send,
  Shield,
  ShieldCheck,
  Siren,
  SprayCan,
  Star,
  Thermometer,
  Trash2,
  TriangleAlert,
  Truck,
  Users,
  Vibrate,
  Warehouse,
  Wrench,
  X,
  Zap,
} from 'lucide';

/** Icons available to data-lucide attributes across the site. */
export const icons = {
  Activity,
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Ban,
  BriefcaseMedical,
  Building2,
  Calendar,
  CalendarClock,
  CalendarDays,
  ChartColumn,
  ChartLine,
  Check,
  ChevronDown,
  ChevronRight,
  ChevronUp,
  CircleCheck,
  ClipboardCheck,
  ClipboardList,
  Cloud,
  Droplet,
  Download,
  FileText,
  Filter,
  Flame,
  GraduationCap,
  Hand,
  HardHat,
  Heart,
  Info,
  Leaf,
  ListChecks,
  LoaderCircle,
  Lock,
  Mail,
  MapPin,
  Menu,
  Package,
  RefreshCw,
  Scan,
  Search,
  ShoppingCart,
  Send,
  Shield,
  ShieldCheck,
  Siren,
  SprayCan,
  Star,
  Thermometer,
  Trash2,
  TriangleAlert,
  Truck,
  Users,
  Vibrate,
  Warehouse,
  Wrench,
  X,
  Zap,
};

/**
 * Replace [data-lucide] placeholders with SVG icons.
 * @param {ParentNode} [root=document]
 */
export function initIcons(root = document) {
  createIcons({
    icons,
    root,
    attrs: {
      'stroke-width': 1.75,
      'aria-hidden': 'true',
    },
  });
}

/**
 * Create a Lucide placeholder element (call initIcons on a parent afterward).
 * @param {string} name  kebab-case Lucide name, e.g. "arrow-right"
 * @param {string} [className]
 * @returns {HTMLElement}
 */
export function createIconEl(name, className = '') {
  const el = document.createElement('i');
  el.setAttribute('data-lucide', name);
  el.setAttribute('aria-hidden', 'true');
  if (className) el.className = className;
  return el;
}

/**
 * Swap a container's icon to a new Lucide icon and re-render.
 * @param {ParentNode} container
 * @param {string} name
 * @param {string} [className]
 */
export function setIcon(container, name, className = '') {
  container.replaceChildren(createIconEl(name, className));
  initIcons(container);
}
