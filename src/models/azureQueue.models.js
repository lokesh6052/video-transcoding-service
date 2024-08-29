import { QueueServiceClient } from "@azure/storage-queue";
import { DefaultAzureCredential } from "@azure/identity";

class AzureQueue {
  constructor() {
    const crediential = new DefaultAzureCredential();
    this.queueServiceClient = new QueueServiceClient(
      `https://${process.env.AZURE_STORAGE_ACCOUNT_NAME}.queue.core.windows.net`,
      crediential
    );
    const queueClient = this.queueServiceClient.getQueueClient(
      process.env.AZURE_STORAGE_QUEUE_NAME
    );
  }

  async receviceMessage() {
    const receviedMessages = await queueClient.receiveMessages();
    return receviedMessages;
  }

  async deleteMessage(messageId, popReceipt) {
    const deletedMessage = await queueClient.deleteMessage(
      messageId,
      popReceipt
    );
    return deletedMessage;
  }
}

export { AzureQueue };
