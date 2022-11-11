import { IEventBusService } from "../interfaces"
import { ConfigModule, Logger, MedusaContainer } from "../types/global"

type InjectedDependencies = {
  logger: Logger
}

type EventHandler<T = unknown> = (data: T, eventName: string) => Promise<void>

type EmitOptions = {
  delay?: number
  attempts?: number
  backoff?: {
    type: "fixed" | "exponential"
    delay: number
  }
}

/**
 * Can keep track of multiple subscribers to different events and run the
 * subscribers when events happen. Events will run asynchronously.
 */
export default class DefaultEventBusService implements IEventBusService {
  protected readonly container_: MedusaContainer & InjectedDependencies
  protected readonly config_: ConfigModule
  protected readonly logger_: Logger

  constructor(
    container: MedusaContainer & InjectedDependencies,
    config: ConfigModule
  ) {
    this.container_ = container
    this.config_ = config
    this.logger_ = container.logger
  }

  withTransaction(transactionManager): this | DefaultEventBusService {
    if (!transactionManager) {
      return this
    }

    const cloned = new DefaultEventBusService(
      {
        ...this.container_,
        logger: this.logger_,
      },
      this.config_
    )

    return cloned
  }

  /**
   * Adds a function to a list of event subscribers.
   * @param event - the event that the subscriber will listen for.
   * @param subscriber - the function to be called when a certain event
   * happens. Subscribers must return a Promise.
   * @return this
   */
  subscribe(event: string | symbol, handler: EventHandler): this {
    this.logger_.info(`Subscribing to ${String(event)}`)

    return this
  }

  /**
   * Adds a function to a list of event subscribers.
   * @param event - the event that the subscriber will listen for.
   * @param subscriber - the function to be called when a certain event
   * happens. Subscribers must return a Promise.
   * @return this
   */
  unsubscribe(event: string | symbol, subscriber: EventHandler): this {
    this.logger_.info(`Unsubscribing from ${String(event)}`)
    return this
  }

  /**
   * Adds a function to a list of event subscribers.
   * @param event - the event that the subscriber will listen for.
   * @param subscriber - the function to be called when a certain event
   * happens. Subscribers must return a Promise.
   * @return this
   */
  protected registerCronHandler_(
    event: string | symbol,
    subscriber: EventHandler
  ): this {
    this.logger_.info(`Registering cron handler ${String(event)}`)
    return this
  }

  /**
   * Calls all subscribers when an event occurs.
   * @param {string} eventName - the name of the event to be process.
   * @param data - the data to send to the subscriber.
   * @param options - options to add the job with
   * @return the job from our queue
   */
  async emit<T>(
    eventName: string,
    data: T,
    options: EmitOptions = {}
  ): Promise<void> {
    this.logger_.info(`Emitting ${eventName}`)
  }

  /**
   * Registers a cron job.
   * @param eventName - the name of the event
   * @param data - the data to be sent with the event
   * @param cron - the cron pattern
   * @param handler - the handler to call on each cron job
   * @return void
   */
  createCronJob<T>(
    eventName: string,
    data: T,
    cron: string,
    handler: EventHandler
  ): void {
    this.logger_.info(`Registering ${eventName}`)
  }
}
