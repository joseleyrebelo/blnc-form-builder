Please read this file to find more on the status and thought of improvements

## How to run?

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Caveats

I started designing the code structure to provide an api to get the form-json, but converted to access the json placed on a tsx file rather than a json(more applicable storage profile).

- This initial approach means that the code can operate with multiple form formats but loses the advantages of typescript, which is relevant as per the task description, and to create a stronger type-resilient solution.
  - That implementation can be see on `./pages/api/get-form`, and `util/api/general` subsequently.
  - This would allow for updating the form in case with the means of `useState` and `useEffect`.

## Improvements

- I believe the current email rendering is approapriate but came to maind that more control of the layout and position of the form field on the email front such as `emailLayout : "title" | "body" | "subtitle"` and `emailLayoutIndex: number` could be added as well.
- Add tests to cover the utility as well as the components.
