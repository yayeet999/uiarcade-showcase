
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Copy, ArrowLeft } from "lucide-react";
import { toast } from "sonner";
import { getComponentById } from "@/data/components";
import { getComponentCode } from "@/registry";
import NotFoundPage from "./NotFoundPage";

const ComponentDetailPage = () => {
  const { componentId } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("html");
  
  const component = componentId ? getComponentById(parseInt(componentId)) : undefined;
  const componentCode = component ? getComponentCode(component.name) : null;
  
  if (!component || !componentCode) {
    return <NotFoundPage />;
  }

  // Add copy functionality
  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard!");
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <Button 
        variant="ghost" 
        className="mb-6 flex items-center gap-2" 
        onClick={() => navigate(-1)}
      >
        <ArrowLeft className="h-4 w-4" />
        Back to components
      </Button>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column - Live Preview */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-lg border p-6"
        >
          <h2 className="text-2xl font-bold mb-6">{component.name} Preview</h2>
          <div className="flex items-center justify-center min-h-[400px] bg-muted rounded-lg p-6">
            <div dangerouslySetInnerHTML={{ __html: componentCode.preview }} />
          </div>
        </motion.div>

        {/* Right Column - Code Tabs */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card rounded-lg border"
        >
          <div className="p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold">Code</h2>
              <Button
                variant="outline"
                size="sm"
                onClick={() => handleCopyCode(componentCode[activeTab])}
                className="flex items-center gap-2"
              >
                <Copy className="h-4 w-4" />
                Copy
              </Button>
            </div>
            
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="w-full">
                <TabsTrigger value="html" className="flex-1">HTML</TabsTrigger>
                <TabsTrigger value="css" className="flex-1">CSS</TabsTrigger>
                <TabsTrigger value="fullcode" className="flex-1">Full Code</TabsTrigger>
              </TabsList>

              <TabsContent value="html" className="mt-4">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{componentCode.html}</code>
                </pre>
              </TabsContent>

              <TabsContent value="css" className="mt-4">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{componentCode.css}</code>
                </pre>
              </TabsContent>

              <TabsContent value="fullcode" className="mt-4">
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{componentCode.fullcode}</code>
                </pre>
              </TabsContent>
            </Tabs>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ComponentDetailPage;
