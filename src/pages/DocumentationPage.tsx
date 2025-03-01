
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const DocumentationPage = () => {
  const [activeTab, setActiveTab] = useState("introduction");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h1 className="text-4xl font-bold mb-4">Documentation</h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about using UIarcade components in your projects.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/4 space-y-1.5">
            <Button
              variant={activeTab === "introduction" ? "default" : "ghost"}
              className="justify-start w-full"
              onClick={() => setActiveTab("introduction")}
            >
              Introduction
            </Button>
            <Button
              variant={activeTab === "installation" ? "default" : "ghost"}
              className="justify-start w-full"
              onClick={() => setActiveTab("installation")}
            >
              Installation
            </Button>
            <Button
              variant={activeTab === "usage" ? "default" : "ghost"}
              className="justify-start w-full"
              onClick={() => setActiveTab("usage")}
            >
              Usage
            </Button>
            <Button
              variant={activeTab === "theming" ? "default" : "ghost"}
              className="justify-start w-full"
              onClick={() => setActiveTab("theming")}
            >
              Theming
            </Button>
            <Button
              variant={activeTab === "customization" ? "default" : "ghost"}
              className="justify-start w-full"
              onClick={() => setActiveTab("customization")}
            >
              Customization
            </Button>
          </div>

          <div className="md:w-3/4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsContent value="introduction" className="animate-slide-in">
                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Introduction</h2>
                  <p>
                    UIarcade is a collection of reusable UI components built with Tailwind CSS and Shadcn UI. 
                    These components are designed to be accessible, customizable, and easy to use in your React projects.
                  </p>
                  <p>
                    Whether you're building a simple website or a complex web application, UIarcade provides the 
                    building blocks you need to create beautiful user interfaces.
                  </p>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Key Features</h3>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>Accessible components following WAI-ARIA guidelines</li>
                    <li>Built with Tailwind CSS for easy customization</li>
                    <li>TypeScript support for better developer experience</li>
                    <li>Dark mode support out of the box</li>
                    <li>Responsive design for all screen sizes</li>
                    <li>Minimal dependencies for better performance</li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="installation" className="animate-slide-in">
                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Installation</h2>
                  <p>
                    To install UIarcade in your project, follow these steps:
                  </p>
                  <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>npm install uiarcade</code>
                    </pre>
                  </div>
                  <p>Or if you're using Yarn:</p>
                  <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>yarn add uiarcade</code>
                    </pre>
                  </div>
                  <p>
                    UIarcade has the following peer dependencies:
                  </p>
                  <ul className="space-y-2 list-disc pl-5">
                    <li>React 16.8+ (for Hooks support)</li>
                    <li>TailwindCSS 3.0+</li>
                  </ul>
                  <p>
                    Make sure to have these installed in your project before using UIarcade components.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="usage" className="animate-slide-in">
                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Usage</h2>
                  <p>
                    Using UIarcade components is straightforward. Import the components 
                    you need from the library and use them in your React components:
                  </p>
                  <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`import { Button, Card, Input } from 'uiarcade';

function MyComponent() {
  return (
    <Card>
      <h2>Sign In</h2>
      <Input placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button>Sign In</Button>
    </Card>
  );
}`}</code>
                    </pre>
                  </div>
                  <p>
                    Each component comes with various props that allow you to customize its appearance and behavior. 
                    Check the individual component documentation for details.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="theming" className="animate-slide-in">
                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Theming</h2>
                  <p>
                    UIarcade components can be themed using Tailwind CSS custom properties. 
                    You can customize the default theme by extending your tailwind.config.js file:
                  </p>
                  <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          light: 'var(--color-primary-light)',
          dark: 'var(--color-primary-dark)',
        },
        // Add more custom colors here
      },
      // You can also customize other theme values
      borderRadius: {
        DEFAULT: 'var(--border-radius)',
      },
    },
  },
};`}</code>
                    </pre>
                  </div>
                  <p>
                    Then define your custom properties in your CSS:
                  </p>
                  <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`:root {
  --color-primary: #4f46e5;
  --color-primary-light: #818cf8;
  --color-primary-dark: #3730a3;
  --border-radius: 0.375rem;
}`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="customization" className="animate-slide-in">
                <div className="prose dark:prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4">Customization</h2>
                  <p>
                    UIarcade components are designed to be customizable. You can customize them in several ways:
                  </p>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Using Props</h3>
                  <p>
                    Most components accept props that allow you to customize their appearance and behavior. 
                    For example, the Button component accepts variant, size, and other props:
                  </p>
                  <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`<Button variant="outline" size="sm">
  Small Outline Button
</Button>`}</code>
                    </pre>
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Using Tailwind Classes</h3>
                  <p>
                    You can also customize components using Tailwind classes. Each component accepts a className 
                    prop that allows you to add custom Tailwind classes:
                  </p>
                  <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`<Button className="bg-purple-600 hover:bg-purple-700">
  Custom Button
</Button>`}</code>
                    </pre>
                  </div>
                  <h3 className="text-xl font-semibold mt-6 mb-3">Component Composition</h3>
                  <p>
                    Many UIarcade components are designed to be composable. This means you can combine them 
                    to create more complex UI patterns:
                  </p>
                  <div className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`}</code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
