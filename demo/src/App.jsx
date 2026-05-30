import React, { useState } from 'react';
import { 
  VanguardButton, 
  IconButton,
  VanguardCard, 
  StatCard,
  StatusBadge,
  Badge,
  Input,
  SearchInput,
  Textarea,
  Select,
  Toggle,
  Switch,
  Checkbox,
  RadioGroup,
  Slider,
  ProgressBar,
  CircularProgress,
  SidebarItem,
  NavTab,
  Tabs,
  TabContent,
  Accordion,
  ProjectRow,
  AlertItem,
  Table,
  Pagination,
  WorkspaceSelector,
  Avatar,
  UpgradeCard,
  BarChart,
  BackgroundDecor,
  GlassPanel,
  Heading,
  Text,
  Label,
  FormGroup,
  SocialLink,
  SocialLinks,
  Navbar,
  Logo,
  FooterLink,
  FooterSection,
  Modal,
  Dialog,
  ConfirmDialog,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  Tooltip,
  Toast,
  ToastProvider,
  useToast,
  Skeleton,
  SkeletonText,
  SkeletonCard,
  Spinner,
  EmptyState,
  PricingCard,
  TestimonialCard,
  FeatureCard,
  Divider,
  FadeIn,
  SlideIn,
  ScaleIn,
  GridLayout,
  Stack,
  Center,
  Between,
  Icons
} from './vanguard-uikit.jsx';

function DemoApp() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [toggle, setToggle] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [radio, setRadio] = useState('option1');
  const [slider, setSlider] = useState(50);
  const [select, setSelect] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [scrolled, setScrolled] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { addToast } = useToast();

  const tabs = [
    { id: 'buttons', label: 'Buttons' },
    { id: 'cards', label: 'Cards' },
    { id: 'forms', label: 'Forms' },
    { id: 'data', label: 'Data' },
    { id: 'feedback', label: 'Feedback' },
  ];

  const tableColumns = [
    { header: 'Project', accessor: 'name' },
    { header: 'Status', accessor: 'status' },
    { header: 'Progress', accessor: 'progress', render: (val) => <ProgressBar value={val} size="sm" /> },
  ];

  const tableData = [
    { name: 'Nova-Interface', status: 'Active', progress: 85 },
    { name: 'Quantum-Core', status: 'Pending', progress: 40 },
    { name: 'Neural-Link', status: 'Active', progress: 65 },
    { name: 'Vanguard-Docs', status: 'Complete', progress: 100 },
  ];

  const selectOptions = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ];

  const radioOptions = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const accordionItems = [
    { id: '1', title: 'What is Vanguard UIKit?', content: 'Vanguard UIKit is a modern dark-themed component library built with React and Tailwind CSS.' },
    { id: '2', title: 'How to install?', content: 'Run npm install vanguard-uikit in your project directory.' },
    { id: '3', title: 'Is it free?', content: 'Yes, Vanguard UIKit is MIT licensed and free to use.' },
  ];

  return (
    <div className="min-h-screen bg-[#050506] text-white">
      <BackgroundDecor />
      
      <Navbar scrolled={scrolled}>
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between">
          <Logo name="VANGUARD" subtitle="UIKit Demo" />
          <div className="hidden lg:flex items-center gap-4">
            <VanguardButton variant="ghost" size="sm">Docs</VanguardButton>
            <VanguardButton variant="primary" size="sm">Get Started</VanguardButton>
          </div>
        </div>
      </Navbar>

      <main className="pt-32 pb-20 px-6 max-w-7xl mx-auto relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <StatusBadge>🚀 Vanguard UIKit Demo</StatusBadge>
            <Heading level={1} className="mt-6 text-5xl md:text-7xl">
              Build Faster. <span className="text-blue-500">Look Better.</span>
            </Heading>
            <Text size="lg" className="mt-6 max-w-2xl mx-auto">
              Explore all the components in the Vanguard UIKit. Click through the tabs below to see what's possible.
            </Text>
          </div>
        </FadeIn>

        <Tabs tabs={tabs} activeTab={activeTab} onChange={setActiveTab} className="mb-12" />

        {activeTab === 'buttons' && (
          <div className="space-y-12">
            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Buttons</Heading>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                  <div className="space-y-4">
                    <Text variant="muted" className="mb-4">Primary</Text>
                    <VanguardButton variant="primary">Primary Button</VanguardButton>
                    <VanguardButton variant="primary" icon={Icons.ArrowRight}>With Icon</VanguardButton>
                    <VanguardButton variant="primary" size="sm">Small</VanguardButton>
                    <VanguardButton variant="primary" size="lg">Large</VanguardButton>
                  </div>
                  
                  <div className="space-y-4">
                    <Text variant="muted" className="mb-4">Accent</Text>
                    <VanguardButton variant="accent">Accent Button</VanguardButton>
                    <VanguardButton variant="accent" icon={Icons.Zap}>With Icon</VanguardButton>
                    <VanguardButton variant="accent" size="sm">Small</VanguardButton>
                    <VanguardButton variant="accent" size="lg">Large</VanguardButton>
                  </div>
                  
                  <div className="space-y-4">
                    <Text variant="muted" className="mb-4">Glass</Text>
                    <VanguardButton variant="glass">Glass Button</VanguardButton>
                    <VanguardButton variant="glass" icon={Icons.Settings}>With Icon</VanguardButton>
                    <VanguardButton variant="glass" size="sm">Small</VanguardButton>
                    <VanguardButton variant="glass" size="lg">Large</VanguardButton>
                  </div>
                  
                  <div className="space-y-4">
                    <Text variant="muted" className="mb-4">Danger</Text>
                    <VanguardButton variant="danger">Danger Button</VanguardButton>
                    <VanguardButton variant="danger" icon={Icons.Trash}>With Icon</VanguardButton>
                    <VanguardButton variant="danger" size="sm">Small</VanguardButton>
                    <VanguardButton variant="danger" size="lg">Large</VanguardButton>
                  </div>
                </div>

                <Divider className="my-8" />

                <Heading level={4} className="mb-8">Icon Buttons</Heading>
                <div className="flex flex-wrap gap-4">
                  <IconButton icon={Icons.Search} variant="glass" />
                  <IconButton icon={Icons.Search} variant="glass" size="sm" />
                  <IconButton icon={Icons.Search} variant="glass" size="lg" />
                  <IconButton icon={Icons.Plus} variant="primary" />
                  <IconButton icon={Icons.Plus} variant="primary" size="sm" />
                  <IconButton icon={Icons.Plus} variant="primary" size="lg" />
                  <IconButton icon={Icons.Bell} variant="ghost" />
                  <IconButton icon={Icons.Bell} variant="ghost" size="sm" />
                  <IconButton icon={Icons.Bell} variant="ghost" size="lg" />
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Badges & Tags</Heading>
                <div className="flex flex-wrap gap-4">
                  <Badge>Default</Badge>
                  <Badge variant="blue">New</Badge>
                  <Badge>Active</Badge>
                  <Badge>Error</Badge>
                  <Badge>Warning</Badge>
                  <Badge>Pro</Badge>
                  <Badge size="sm">Small</Badge>
                  <Badge size="lg">Large</Badge>
                </div>
                <Divider className="my-8" />
                <div className="flex flex-wrap gap-4">
                  <StatusBadge variant="blue">Live</StatusBadge>
                  <StatusBadge>Online</StatusBadge>
                  <StatusBadge>Offline</StatusBadge>
                  <StatusBadge>Pending</StatusBadge>
                  <StatusBadge>Pro</StatusBadge>
                </div>
              </GlassPanel>
            </SlideIn>
          </div>
        )}

        {activeTab === 'cards' && (
          <div className="space-y-12">
            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Feature Cards</Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <VanguardCard 
                    title="Lightning Fast" 
                    description="Optimized for speed with minimal bundle size and efficient rendering."
                    icon={Icons.Zap}
                    tag="Performance"
                    delay="100"
                  />
                  <VanguardCard 
                    title="Fully Customizable" 
                    description="Modify every aspect with Tailwind classes and theme props."
                    icon={Icons.Settings}
                    tag="Flexible"
                    delay="200"
                  />
                  <VanguardCard 
                    title="Dark by Default" 
                    description="Beautiful out of the box with our signature dark aesthetic."
                    icon={Icons.Moon}
                    tag="Design"
                    delay="300"
                  />
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Stat Cards</Heading>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  <StatCard title="Revenue" value="$84,210" change="+14.2%" trend="up" icon={Icons.Wallet} />
                  <StatCard title="Users" value="12,458" change="+8.4%" trend="up" icon={Icons.Users} />
                  <StatCard title="Latency" value="1.8ms" change="-12%" trend="up" icon={Icons.Zap} />
                  <StatCard title="Errors" value="0.02%" change="+0.5%" trend="down" icon={Icons.AlertCircle} />
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Pricing Cards</Heading>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <PricingCard 
                    title="Starter" 
                    price="$9" 
                    period="month"
                    features={['5 Projects', 'Basic Analytics', 'Email Support', '1 Team Member']}
                    buttonText="Start Free Trial"
                  />
                  <PricingCard 
                    title="Pro" 
                    price="$29" 
                    period="month"
                    features={['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '10 Team Members', 'API Access']}
                    popular
                    buttonText="Get Pro"
                  />
                  <PricingCard 
                    title="Enterprise" 
                    price="$99" 
                    period="month"
                    features={['Everything in Pro', 'Custom Integrations', '24/7 Phone Support', 'Unlimited Members', 'SLA Guarantee']}
                    buttonText="Contact Sales"
                  />
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Testimonials</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <TestimonialCard 
                    quote="Vanguard UIKit transformed how we build our products. The design quality is unmatched."
                    author="Sarah Chen"
                    role="Product Designer"
                  />
                  <TestimonialCard 
                    quote="Best investment we made. Our development speed increased by 300%."
                    author="Marcus Johnson"
                    role="CTO, TechCorp"
                  />
                </div>
              </GlassPanel>
            </SlideIn>
          </div>
        )}

        {activeTab === 'forms' && (
          <div className="space-y-12">
            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Inputs</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormGroup label="Default Input">
                    <Input placeholder="Enter text..." />
                  </FormGroup>
                  <FormGroup label="With Icon">
                    <Input icon={Icons.Mail} placeholder="Enter email..." />
                  </FormGroup>
                  <FormGroup label="Search">
                    <SearchInput placeholder="Search..." />
                  </FormGroup>
                  <FormGroup label="Textarea">
                    <Textarea placeholder="Enter description..." rows={3} />
                  </FormGroup>
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Select & Sliders</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormGroup label="Select">
                    <Select 
                      options={selectOptions} 
                      value={select} 
                      onChange={setSelect}
                      placeholder="Choose option..."
                    />
                  </FormGroup>
                  <FormGroup label="Slider">
                    <Slider value={slider} onChange={setSlider} min={0} max={100} />
                    <Text variant="muted" className="mt-2">Value: {slider}</Text>
                  </FormGroup>
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Toggles & Checkboxes</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-6">
                    <Toggle checked={toggle} onChange={setToggle} label="Enable notifications" />
                    <Switch checked={toggle} onChange={setToggle} label="Dark mode" />
                  </div>
                  <div className="space-y-4">
                    <Checkbox checked={checkbox} onChange={setCheckbox} label="I agree to terms" />
                    <Checkbox checked={checkbox} onChange={setCheckbox} label="Subscribe to newsletter" />
                    <Divider className="my-4" />
                    <RadioGroup options={radioOptions} value={radio} onChange={setRadio} />
                  </div>
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Progress</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <Text variant="muted" className="mb-4">Linear Progress</Text>
                    <ProgressBar value={75} showLabel />
                    <ProgressBar value={50} />
                    <ProgressBar value={25} />
                    <ProgressBar value={90} variant="gradient" />
                    <ProgressBar value={60} size="sm" />
                    <ProgressBar value={80} size="lg" />
                  </div>
                  <div className="flex flex-wrap gap-8 items-center justify-center">
                    <CircularProgress value={75} variant="blue" />
                    <CircularProgress value={50} />
                    <CircularProgress value={25} />
                    <CircularProgress value={90} size={80} />
                  </div>
                </div>
              </GlassPanel>
            </SlideIn>
          </div>
        )}

        {activeTab === 'data' && (
          <div className="space-y-12">
            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Data Table</Heading>
                <Table 
                  columns={tableColumns} 
                  data={tableData} 
                  emptyMessage="No projects found"
                />
                <Divider className="my-6" />
                <Pagination 
                  currentPage={page} 
                  totalPages={10} 
                  onPageChange={setPage} 
                />
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Project Rows</Heading>
                <div className="space-y-2">
                  <ProjectRow name="Nova-Interface v2" progress={85} status="Active" category="UI/UX Design" />
                  <ProjectRow name="Quantum-Core Engine" progress={40} status="Pending" category="Core Systems" />
                  <ProjectRow name="Vanguard-Docs Hub" progress={100} status="Complete" category="Documentation" />
                  <ProjectRow name="Neural-Link Bridge" progress={65} status="Active" category="Infrastructure" />
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Alerts & Notifications</Heading>
                <div className="space-y-4">
                  <AlertItem title="Core-01 Overload" time="14:20" />
                  <AlertItem title="Auth Service Patch" time="13:55" color="blue" />
                  <AlertItem title="Snapshot Complete" time="12:10" />
                  <AlertItem title="New Node: EU-W" time="11:45" color="blue" />
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Accordion</Heading>
                <Accordion items={accordionItems} allowMultiple />
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Tabs</Heading>
                <Tabs 
                  tabs={[
                    { id: 'tab1', label: 'Overview' },
                    { id: 'tab2', label: 'Features' },
                    { id: 'tab3', label: 'Pricing' },
                  ]} 
                  activeTab="tab1" 
                  onChange={() => {}} 
                  variant="line"
                  className="mb-6"
                />
                <TabContent active>
                  <Text>This is the overview content. Tabs help organize content into separate views.</Text>
                </TabContent>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Bar Chart</Heading>
                <BarChart data={[60, 40, 85, 50, 95, 70, 45, 100, 80, 55, 90, 65, 75, 50]} height={200} />
              </GlassPanel>
            </SlideIn>
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="space-y-12">
            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Modals & Dialogs</Heading>
                <div className="flex flex-wrap gap-4">
                  <VanguardButton variant="primary" onClick={() => setModalOpen(true)}>
                    Open Modal
                  </VanguardButton>
                  <VanguardButton variant="danger" onClick={() => setConfirmOpen(true)}>
                    Confirm Dialog
                  </VanguardButton>
                </div>

                <Modal 
                  isOpen={modalOpen} 
                  onClose={() => setModalOpen(false)} 
                  title="Sample Modal"
                  size="md"
                >
                  <div className="space-y-4">
                    <Text>This is a modal dialog. You can put any content here.</Text>
                    <Text variant="muted">Perfect for forms, confirmations, and more.</Text>
                    <div className="flex justify-end gap-4 mt-6">
                      <VanguardButton variant="glass" onClick={() => setModalOpen(false)}>Cancel</VanguardButton>
                      <VanguardButton variant="accent" onClick={() => setModalOpen(false)}>Confirm</VanguardButton>
                    </div>
                  </div>
                </Modal>

                <ConfirmDialog 
                  isOpen={confirmOpen}
                  onClose={() => setConfirmOpen(false)}
                  onConfirm={() => addToast({ title: 'Confirmed!', message: 'Action completed', variant: 'success' })}
                  title="Confirm Action"
                  message="Are you sure you want to proceed with this action?"
                />
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Toast Notifications</Heading>
                <div className="flex flex-wrap gap-4">
                  <VanguardButton variant="accent" onClick={() => addToast({ title: 'Success!', message: 'Operation completed', variant: 'success' })}>
                    Success Toast
                  </VanguardButton>
                  <VanguardButton variant="danger" onClick={() => addToast({ title: 'Error!', message: 'Something went wrong', variant: 'error' })}>
                    Error Toast
                  </VanguardButton>
                  <VanguardButton variant="glass" onClick={() => addToast({ title: 'Warning', message: 'Please review', variant: 'warning' })}>
                    Warning Toast
                  </VanguardButton>
                  <VanguardButton variant="glass" onClick={() => addToast({ title: 'Info', message: 'New update available', variant: 'info' })}>
                    Info Toast
                  </VanguardButton>
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Dropdowns</Heading>
                <div className="flex flex-wrap gap-4">
                  <Dropdown 
                    trigger={<VanguardButton variant="glass">Dropdown</VanguardButton>}
                    align="left"
                  >
                    <DropdownItem icon={Icons.User}>Profile</DropdownItem>
                    <DropdownItem icon={Icons.Settings}>Settings</DropdownItem>
                    <DropdownDivider />
                    <DropdownItem icon={Icons.LogOut} danger>Logout</DropdownItem>
                  </Dropdown>
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Tooltips</Heading>
                <div className="flex flex-wrap gap-8 items-center justify-center py-8">
                  <Tooltip content="Top tooltip" position="top">
                    <VanguardButton variant="glass">Top</VanguardButton>
                  </Tooltip>
                  <Tooltip content="Bottom tooltip" position="bottom">
                    <VanguardButton variant="glass">Bottom</VanguardButton>
                  </Tooltip>
                  <Tooltip content="Left tooltip" position="left">
                    <VanguardButton variant="glass">Left</VanguardButton>
                  </Tooltip>
                  <Tooltip content="Right tooltip" position="right">
                    <VanguardButton variant="glass">Right</VanguardButton>
                  </Tooltip>
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Loaders & Skeletons</Heading>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <Text variant="muted" className="mb-4">Spinners</Text>
                    <div className="flex gap-4">
                      <Spinner size="sm" />
                      <Spinner size="md" />
                      <Spinner size="lg" />
                    </div>
                  </div>
                  <div>
                    <Text variant="muted" className="mb-4">Skeletons</Text>
                    <div className="space-y-3">
                      <Skeleton width="100%" height={16} />
                      <Skeleton width="80%" height={16} />
                      <Skeleton width="60%" height={16} />
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </SlideIn>

            <SlideIn direction="up">
              <GlassPanel>
                <Heading level={3} className="mb-8">Empty State</Heading>
                <EmptyState 
                  icon={Icons.Package}
                  title="No Data"
                  description="There's nothing here yet. Start by adding some content."
                  action={<VanguardButton variant="accent">Add Item</VanguardButton>}
                />
              </GlassPanel>
            </SlideIn>
          </div>
        )}

        <Divider className="my-16" />

        <SlideIn direction="up">
          <GlassPanel>
            <Heading level={3} className="mb-8">Layout Components</Heading>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <WorkspaceSelector name="Vanguard HQ" plan="Pro Plan" />
              <Avatar src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" size="lg" />
              <SocialLinks />
            </div>
          </GlassPanel>
        </SlideIn>

        <Divider className="my-16" />

        <SlideIn direction="up">
          <GlassPanel>
            <Heading level={3} className="mb-8">Icons Preview</Heading>
            <div className="grid grid-cols-8 md:grid-cols-12 gap-4">
              {[Icons.Zap, Icons.Box, Icons.Cpu, Icons.Activity, Icons.Wallet, Icons.Settings, Icons.Bell, Icons.Search, Icons.Globe, Icons.Layers, Icons.Users, Icons.Code].map((Icon, i) => (
                <div key={i} className="flex items-center justify-center p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                  <Icon size={24} className="text-blue-400" />
                </div>
              ))}
            </div>
            <Text variant="muted" className="mt-4 text-center">And 500+ more icons...</Text>
          </GlassPanel>
        </SlideIn>
      </main>

      <footer className="border-t border-white/5 bg-black/20 backdrop-blur-md pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <Logo name="VANGUARD" subtitle="UIKit" />
              <Text variant="muted" className="mt-4">
                A modern dark-themed UI component library for React.
              </Text>
            </div>
            <FooterSection title="Product" links={['Components', 'Templates', 'Documentation', 'Changelog']} />
            <FooterSection title="Company" links={['About', 'Blog', 'Careers', 'Contact']} />
            <FooterSection title="Legal" links={['Privacy', 'Terms', 'License', 'Cookies']} />
          </div>
          <Divider className="mb-8" />
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Text variant="subtle">© 2024 Vanguard UIKit. All rights reserved.</Text>
            <SocialLinks />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <ToastProvider>
      <DemoApp />
    </ToastProvider>
  );
}
