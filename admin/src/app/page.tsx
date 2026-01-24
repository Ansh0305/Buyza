import { Button } from "@/components/ui/button";
import {MousePointerClick} from "lucide-react"

export default function HomePage() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Button
        variant="default"
        size="xs"
        className="rounded-full cursor-pointer"
      >
        <MousePointerClick />
        Click me
      </Button>

      <Button
        variant="destructive"
        size="sm"
        className="rounded-full cursor-pointer"
      >
        <MousePointerClick />
        Click me
      </Button>

      <Button
        variant="ghost"
        size="lg"
        className="rounded-full cursor-pointer"
      >
        <MousePointerClick />
        Click me
      </Button>

      <Button
        variant="link"
        size="xl"
        className="rounded-full cursor-pointer"
      >
        <MousePointerClick />
        Click me
      </Button>

      <Button
        variant="outline"
        size="xxl"
        className="rounded-full cursor-pointer"
      >
        <MousePointerClick />
        Click me
      </Button>

      <Button
        variant="secondary"
        size="xxxl"
        className="rounded-full cursor-pointer"
      >
        <MousePointerClick />
        Click me
      </Button>
    </div>
  );
}
