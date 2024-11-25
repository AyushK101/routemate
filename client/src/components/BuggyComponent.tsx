// BuggyComponent.tsx

function BuggyComponent() {
  throw new Error("Oops! Something went wrong in BuggyComponent.");
  return <div>This will never be rendered</div>;
}

export default BuggyComponent;
