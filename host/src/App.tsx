import { lazy } from "react";

const Badge = lazy(() => import("franchise/badge"));
const Button = lazy(() => import("franchise/button"));
const Card = lazy(() => import("franchise/card"));
const Input = lazy(() => import("franchise/input"));
const Label = lazy(() => import("franchise/label"));
const TextArea = lazy(() => import("franchise/textArea"));
const Calendar = lazy(() => import("franchise/calendar"));
const ErrorMessage = lazy(() => import("franchise/ErrorMessage"));
function App() {
  return (
    <div className="grid grid-cols-2 gap-4 mt-4 ml-4">
      <Badge variant="success" className="max-w-max">
        This is badge component
      </Badge>
      <Button variant="default" className="max-w-max">
        This is button component
      </Button>
      <Card className="max-w-max mx-0">This is card component</Card>
      <Input
        type="text"
        className="max-w-max"
        placeholder="This is input component"
      />
      <Label className="max-w-max">This is label component</Label>
      <TextArea
        className="max-w-max"
        placeholder="This is text area component"
      />
      <Calendar
        mode="single"
        className="max-w-max"
        captionLayout="dropdown-buttons"
        onSelect={(value: any) => {
          console.log(value);
        }}
        fromYear={1900}
        toYear={2012}
      />
      <ErrorMessage error="This is the error message component" />
    </div>
  );
}

export default App;
