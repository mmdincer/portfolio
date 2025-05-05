import { Card } from "@/components/ui/card"
import { Code, Database, Brain, Layers, PenTool, Globe } from "lucide-react"

interface ServiceCardProps {
  icon: string
  title: string
  description: string
}

export function ServiceCard({ icon, title, description }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "Code":
        return <Code className="h-8 w-8 text-green-500" />
      case "Database":
        return <Database className="h-8 w-8 text-green-500" />
      case "Brain":
        return <Brain className="h-8 w-8 text-green-500" />
      case "Layers":
        return <Layers className="h-8 w-8 text-green-500" />
      case "PenTool":
        return <PenTool className="h-8 w-8 text-green-500" />
      case "Globe":
        return <Globe className="h-8 w-8 text-green-500" />
      default:
        return <Code className="h-8 w-8 text-green-500" />
    }
  }

  return (
    <Card className="p-6 dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300 rounded-xl">
      <div className="mb-4">{getIcon()}</div>
      <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
    </Card>
  )
}
