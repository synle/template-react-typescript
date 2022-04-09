type HelloWorldProps = {
  name: string;
};

export default function (props: HelloWorldProps) {
  return (
    <>
      <h1>Hello world {props.name} from template-react-typescript!</h1>
      <br />
      <h4>window.appEnv.APP_MODE={window.appEnv.APP_MODE}</h4>
      <br />
      <h4>window.appEnv.APP_VERSION={window.appEnv.APP_VERSION}</h4>
      <br />
    </>
  );
}
