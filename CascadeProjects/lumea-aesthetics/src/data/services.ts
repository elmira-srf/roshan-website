import { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: 'botox',
    title: 'Botox Injections',
    description: 'Reduce fine lines and wrinkles for a smoother, more youthful appearance.',
    icon: 'Target',
    category: 'face',
    details: 'Botox is a FDA-approved treatment that temporarily relaxes facial muscles to smooth out wrinkles and prevent new ones from forming. Perfect for forehead lines, crow\'s feet, and frown lines.',
    duration: '15-30 minutes',
    recovery: 'Minimal downtime',
    price: 'Starting at $12/unit'
  },
  {
    id: 'fillers',
    title: 'Dermal Fillers',
    description: 'Restore volume and enhance contours with natural-looking results.',
    icon: 'Droplet',
    category: 'face',
    details: 'Our premium dermal fillers add volume to areas that have lost fullness due to aging. Ideal for lips, cheeks, nasolabial folds, and jawline contouring.',
    duration: '30-60 minutes',
    recovery: 'Minimal downtime',
    price: 'Starting at $500/syringe'
  },
  {
    id: 'facials',
    title: 'Facial Treatments',
    description: 'Customized facials to rejuvenate and nourish your skin.',
    icon: 'Sparkles',
    category: 'face',
    details: 'From deep cleansing facials to advanced treatments like chemical peels and microneedling, we offer personalized skincare solutions for all skin types.',
    duration: '45-90 minutes',
    recovery: 'No downtime',
    price: 'Starting at $150'
  },
  {
    id: 'wellness',
    title: 'Sexual Wellness',
    description: 'Specialized treatments for intimate health and wellness.',
    icon: 'Heart',
    category: 'wellness',
    details: 'Discreet and professional treatments for intimate concerns, including O-shot and other rejuvenation procedures to enhance confidence and wellness.',
    duration: '30-45 minutes',
    recovery: 'Minimal downtime',
    price: 'Consultation required'
  },
  {
    id: 'laser',
    title: 'Laser Hair Removal',
    description: 'Long-lasting hair reduction for smooth, hair-free skin.',
    icon: 'Zap',
    category: 'body',
    details: 'Advanced laser technology for safe and effective hair reduction on face and body. Multiple sessions recommended for optimal results.',
    duration: '15-60 minutes',
    recovery: 'No downtime',
    price: 'Starting at $75/session'
  },
  {
    id: 'contouring',
    title: 'Face & Body Contouring',
    description: 'Non-invasive sculpting for your ideal silhouette.',
    icon: 'Scissors',
    category: 'body',
    details: 'Cutting-edge body contouring treatments to target stubborn fat and tighten skin without surgery. Perfect for abdomen, thighs, and arms.',
    duration: '30-90 minutes',
    recovery: 'Minimal downtime',
    price: 'Starting at $300/session'
  },
  {
    id: 'prp',
    title: 'PRP Therapy',
    description: 'Platelet-Rich Plasma for natural skin rejuvenation.',
    icon: 'Microscope',
    category: 'face',
    details: 'Harness your body\'s natural healing power with PRP therapy. Stimulates collagen production for improved skin texture, tone, and overall rejuvenation.',
    duration: '45-60 minutes',
    recovery: 'Minimal downtime',
    price: 'Starting at $600'
  },
  {
    id: 'microneedling',
    title: 'Microneedling & RF',
    description: 'Advanced skin rejuvenation with radiofrequency technology.',
    icon: 'Waves',
    category: 'face',
    details: 'Combines traditional microneedling with radiofrequency energy to stimulate collagen, reduce scars, and improve skin texture for a radiant complexion.',
    duration: '45-60 minutes',
    recovery: '1-3 days',
    price: 'Starting at $350'
  }
]
